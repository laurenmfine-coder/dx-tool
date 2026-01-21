// =====================================================
// Dx Learning Ecosystem - Rate Limiter
// =====================================================
// Tracks and limits API usage per user to prevent overuse
// Place this file in your CoachDx folder and include it before other scripts

const DxRateLimiter = (function() {
    // =====================================================
    // CONFIGURATION - Adjust these values as needed
    // =====================================================
    
    const CONFIG = {
        // Daily limits by feature - CONSERVATIVE for budget control
        limits: {
            coachChat: 5,         // Coach conversations per day
            sbarAnalysis: 3,      // SBAR submissions per day
            caseGeneration: 2,    // AI-generated cases per day
            totalDaily: 5         // Total API calls per day across all features
        },
        
        // Storage keys
        storageKey: 'dxEcosystemUsage',
        
        // Warning thresholds (percentage of limit)
        warningThreshold: 0.6,   // Show warning at 60% usage (3 of 5 calls)
        
        // Reset time (midnight local time)
        resetHour: 0
    };

    // =====================================================
    // USAGE TRACKING
    // =====================================================
    
    function getUsageData() {
        const stored = localStorage.getItem(CONFIG.storageKey);
        if (!stored) return createFreshUsageData();
        
        const data = JSON.parse(stored);
        
        // Check if we need to reset (new day)
        if (isNewDay(data.lastReset)) {
            return createFreshUsageData();
        }
        
        return data;
    }
    
    function createFreshUsageData() {
        const data = {
            lastReset: new Date().toDateString(),
            usage: {
                coachChat: 0,
                sbarAnalysis: 0,
                caseGeneration: 0,
                totalDaily: 0
            },
            history: [] // Track timestamps for rate limiting
        };
        saveUsageData(data);
        return data;
    }
    
    function saveUsageData(data) {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    }
    
    function isNewDay(lastReset) {
        return lastReset !== new Date().toDateString();
    }

    // =====================================================
    // PUBLIC API
    // =====================================================
    
    /**
     * Check if user can make an API call
     * @param {string} feature - The feature type (coachChat, sbarAnalysis, etc.)
     * @returns {object} { allowed: boolean, remaining: number, message: string }
     */
    function canMakeRequest(feature = 'coachChat') {
        const data = getUsageData();
        const featureUsage = data.usage[feature] || 0;
        const featureLimit = CONFIG.limits[feature] || CONFIG.limits.totalDaily;
        const totalUsage = data.usage.totalDaily;
        const totalLimit = CONFIG.limits.totalDaily;
        
        // Check feature-specific limit
        if (featureUsage >= featureLimit) {
            return {
                allowed: false,
                remaining: 0,
                message: `You've reached your daily limit for this feature (${featureLimit} uses). Try again tomorrow!`,
                limitType: 'feature'
            };
        }
        
        // Check total daily limit
        if (totalUsage >= totalLimit) {
            return {
                allowed: false,
                remaining: 0,
                message: `You've reached your total daily limit (${totalLimit} API calls). Try again tomorrow!`,
                limitType: 'total'
            };
        }
        
        const remaining = Math.min(featureLimit - featureUsage, totalLimit - totalUsage);
        const isWarning = (featureUsage / featureLimit) >= CONFIG.warningThreshold || 
                          (totalUsage / totalLimit) >= CONFIG.warningThreshold;
        
        return {
            allowed: true,
            remaining: remaining,
            message: isWarning ? `You have ${remaining} API calls remaining today.` : null,
            limitType: null,
            isWarning: isWarning
        };
    }
    
    /**
     * Record an API call
     * @param {string} feature - The feature type
     */
    function recordUsage(feature = 'coachChat') {
        const data = getUsageData();
        
        // Increment counters
        data.usage[feature] = (data.usage[feature] || 0) + 1;
        data.usage.totalDaily = (data.usage.totalDaily || 0) + 1;
        
        // Add to history for detailed tracking
        data.history.push({
            feature: feature,
            timestamp: new Date().toISOString()
        });
        
        // Keep history manageable (last 200 entries)
        if (data.history.length > 200) {
            data.history = data.history.slice(-200);
        }
        
        saveUsageData(data);
        
        // Update UI if widget exists
        updateUsageWidget();
        
        return data.usage;
    }
    
    /**
     * Get current usage statistics
     * @returns {object} Current usage data
     */
    function getStats() {
        const data = getUsageData();
        return {
            usage: data.usage,
            limits: CONFIG.limits,
            remaining: {
                coachChat: CONFIG.limits.coachChat - (data.usage.coachChat || 0),
                sbarAnalysis: CONFIG.limits.sbarAnalysis - (data.usage.sbarAnalysis || 0),
                caseGeneration: CONFIG.limits.caseGeneration - (data.usage.caseGeneration || 0),
                totalDaily: CONFIG.limits.totalDaily - (data.usage.totalDaily || 0)
            },
            percentUsed: {
                coachChat: ((data.usage.coachChat || 0) / CONFIG.limits.coachChat * 100).toFixed(1),
                totalDaily: ((data.usage.totalDaily || 0) / CONFIG.limits.totalDaily * 100).toFixed(1)
            },
            resetsAt: getNextResetTime()
        };
    }
    
    function getNextResetTime() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(CONFIG.resetHour, 0, 0, 0);
        return tomorrow.toLocaleString();
    }

    // =====================================================
    // UI COMPONENTS
    // =====================================================
    
    /**
     * Create and inject the usage widget into the page
     */
    function createUsageWidget() {
        // Don't create if already exists
        if (document.getElementById('dxUsageWidget')) return;
        
        const widget = document.createElement('div');
        widget.id = 'dxUsageWidget';
        widget.innerHTML = `
            <style>
                #dxUsageWidget {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    padding: 15px;
                    min-width: 200px;
                    z-index: 9999;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    transition: all 0.3s ease;
                }
                #dxUsageWidget.collapsed {
                    min-width: auto;
                    padding: 10px;
                    cursor: pointer;
                }
                #dxUsageWidget.collapsed .widget-details {
                    display: none;
                }
                #dxUsageWidget.warning {
                    border: 2px solid #F59E0B;
                }
                #dxUsageWidget.danger {
                    border: 2px solid #EF4444;
                }
                .widget-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }
                .widget-header h4 {
                    margin: 0;
                    font-size: 0.85rem;
                    color: #374151;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .widget-toggle {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    color: #9CA3AF;
                }
                .widget-toggle:hover {
                    color: #374151;
                }
                .usage-bar-container {
                    background: #E5E7EB;
                    border-radius: 6px;
                    height: 8px;
                    overflow: hidden;
                    margin-bottom: 8px;
                }
                .usage-bar {
                    height: 100%;
                    border-radius: 6px;
                    transition: width 0.3s ease, background 0.3s ease;
                }
                .usage-bar.low { background: #10B981; }
                .usage-bar.medium { background: #F59E0B; }
                .usage-bar.high { background: #EF4444; }
                .usage-text {
                    font-size: 0.8rem;
                    color: #6B7280;
                }
                .usage-text strong {
                    color: #374151;
                }
                .collapsed-indicator {
                    display: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                #dxUsageWidget.collapsed .collapsed-indicator {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                #dxUsageWidget.collapsed .widget-header h4 span:last-child {
                    display: none;
                }
            </style>
            <div class="widget-header">
                <h4><span>📊</span> <span>API Usage</span></h4>
                <button class="widget-toggle" onclick="DxRateLimiter.toggleWidget()" title="Toggle">−</button>
            </div>
            <div class="widget-details">
                <div class="usage-bar-container">
                    <div class="usage-bar low" id="usageBar" style="width: 0%"></div>
                </div>
                <div class="usage-text">
                    <strong id="usageCount">0</strong> / <span id="usageLimit">100</span> calls today
                </div>
            </div>
            <div class="collapsed-indicator">
                <span id="collapsedCount">0</span>/<span id="collapsedLimit">100</span>
            </div>
        `;
        
        document.body.appendChild(widget);
        updateUsageWidget();
    }
    
    /**
     * Update the usage widget display
     */
    function updateUsageWidget() {
        const widget = document.getElementById('dxUsageWidget');
        if (!widget) return;
        
        const stats = getStats();
        const used = stats.usage.totalDaily || 0;
        const limit = stats.limits.totalDaily;
        const percent = (used / limit) * 100;
        
        // Update bar
        const bar = document.getElementById('usageBar');
        bar.style.width = `${Math.min(percent, 100)}%`;
        bar.className = 'usage-bar ' + (percent < 50 ? 'low' : percent < 80 ? 'medium' : 'high');
        
        // Update text
        document.getElementById('usageCount').textContent = used;
        document.getElementById('usageLimit').textContent = limit;
        document.getElementById('collapsedCount').textContent = used;
        document.getElementById('collapsedLimit').textContent = limit;
        
        // Update widget border
        widget.classList.remove('warning', 'danger');
        if (percent >= 90) {
            widget.classList.add('danger');
        } else if (percent >= 80) {
            widget.classList.add('warning');
        }
    }
    
    /**
     * Toggle widget collapsed state
     */
    function toggleWidget() {
        const widget = document.getElementById('dxUsageWidget');
        if (!widget) return;
        
        widget.classList.toggle('collapsed');
        const btn = widget.querySelector('.widget-toggle');
        btn.textContent = widget.classList.contains('collapsed') ? '+' : '−';
    }
    
    /**
     * Show limit reached modal
     */
    function showLimitModal(message) {
        // Remove existing modal
        const existing = document.getElementById('dxLimitModal');
        if (existing) existing.remove();
        
        const modal = document.createElement('div');
        modal.id = 'dxLimitModal';
        modal.innerHTML = `
            <style>
                #dxLimitModal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .limit-modal-content {
                    background: white;
                    border-radius: 16px;
                    padding: 30px;
                    max-width: 400px;
                    text-align: center;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                }
                .limit-modal-icon {
                    font-size: 3rem;
                    margin-bottom: 15px;
                }
                .limit-modal-title {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #1F2937;
                    margin-bottom: 10px;
                }
                .limit-modal-message {
                    color: #6B7280;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }
                .limit-modal-btn {
                    background: #2563EB;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .limit-modal-btn:hover {
                    background: #1D4ED8;
                }
            </style>
            <div class="limit-modal-content">
                <div class="limit-modal-icon">⏱️</div>
                <div class="limit-modal-title">Daily Limit Reached</div>
                <div class="limit-modal-message">${message}</div>
                <button class="limit-modal-btn" onclick="document.getElementById('dxLimitModal').remove()">
                    Got it
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    // =====================================================
    // WRAPPER FUNCTION FOR API CALLS
    // =====================================================
    
    /**
     * Wrap an async function with rate limiting
     * @param {function} apiFunction - The async function to wrap
     * @param {string} feature - The feature type for tracking
     * @returns {function} Wrapped function that checks limits first
     */
    function withRateLimit(apiFunction, feature = 'coachChat') {
        return async function(...args) {
            const check = canMakeRequest(feature);
            
            if (!check.allowed) {
                showLimitModal(check.message);
                throw new Error('Rate limit exceeded');
            }
            
            if (check.isWarning && check.message) {
                console.warn('DxRateLimiter:', check.message);
            }
            
            // Record usage before making the call
            recordUsage(feature);
            
            // Make the actual API call
            return apiFunction.apply(this, args);
        };
    }

    // =====================================================
    // ADMIN FUNCTIONS (for testing/debugging)
    // =====================================================
    
    /**
     * Reset usage data (for testing)
     */
    function resetUsage() {
        localStorage.removeItem(CONFIG.storageKey);
        updateUsageWidget();
        console.log('DxRateLimiter: Usage data reset');
    }
    
    /**
     * Set custom limits (for testing or per-user adjustments)
     */
    function setLimits(newLimits) {
        Object.assign(CONFIG.limits, newLimits);
        console.log('DxRateLimiter: Limits updated', CONFIG.limits);
    }
    
    /**
     * Get full configuration
     */
    function getConfig() {
        return { ...CONFIG };
    }

    // =====================================================
    // INITIALIZATION
    // =====================================================
    
    // Auto-create widget when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createUsageWidget);
    } else {
        createUsageWidget();
    }

    // =====================================================
    // PUBLIC INTERFACE
    // =====================================================
    
    return {
        // Core functions
        canMakeRequest,
        recordUsage,
        getStats,
        
        // UI functions
        createUsageWidget,
        updateUsageWidget,
        toggleWidget,
        showLimitModal,
        
        // Wrapper
        withRateLimit,
        
        // Admin/debug functions
        resetUsage,
        setLimits,
        getConfig
    };
})();

// Make it globally available
window.DxRateLimiter = DxRateLimiter;
