/**
 * Dx Learning Ecosystem - Splash Screen
 * Shows a polished loading screen while page loads
 */

(function() {
    // Insert splash immediately (before DOM ready)
    const splash = document.createElement('div');
    splash.id = 'dx-splash';
    splash.innerHTML = `
        <style>
            #dx-splash {
                position: fixed;
                inset: 0;
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                transition: opacity 0.5s ease, visibility 0.5s ease;
            }
            #dx-splash.hidden {
                opacity: 0;
                visibility: hidden;
            }
            .dx-splash-logo {
                font-size: 64px;
                margin-bottom: 24px;
                animation: dx-splash-pulse 2s ease-in-out infinite;
            }
            @keyframes dx-splash-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            .dx-splash-title {
                font-family: 'Inter', -apple-system, sans-serif;
                font-size: 32px;
                font-weight: 700;
                color: white;
                margin-bottom: 8px;
                letter-spacing: -0.5px;
            }
            .dx-splash-subtitle {
                font-family: 'Inter', -apple-system, sans-serif;
                font-size: 16px;
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 48px;
            }
            .dx-splash-loader {
                width: 200px;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                overflow: hidden;
            }
            .dx-splash-loader-bar {
                height: 100%;
                width: 30%;
                background: white;
                border-radius: 2px;
                animation: dx-splash-load 1.5s ease-in-out infinite;
            }
            @keyframes dx-splash-load {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
            }
        </style>
        <div class="dx-splash-logo">🏥</div>
        <div class="dx-splash-title">Dx Learning Ecosystem</div>
        <div class="dx-splash-subtitle">Clinical Reasoning Mastery</div>
        <div class="dx-splash-loader">
            <div class="dx-splash-loader-bar"></div>
        </div>
    `;
    
    // Insert at beginning of body or as soon as body exists
    function insertSplash() {
        if (document.body) {
            document.body.insertBefore(splash, document.body.firstChild);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.insertBefore(splash, document.body.firstChild);
            });
        }
    }
    
    insertSplash();
    
    // Hide splash when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            splash.classList.add('hidden');
            setTimeout(function() {
                splash.remove();
            }, 500);
        }, 800); // Minimum display time for polish
    });
})();
