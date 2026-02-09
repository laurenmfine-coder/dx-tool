/**
 * ReasonDx Cross-Links
 * Automatically adds "Related Content" navigation between modules, cases, and deep dives
 */
(function() {
    if (window.DxCrossLinks) return;

    window.DxCrossLinks = {
        /**
         * Find related content for a given topic
         * @param {string} topicId - the current topic identifier
         * @returns {Array} related items with title, url, type
         */
        findRelated: function(topicId) {
            if (!topicId) return [];
            const related = [];
            const normalized = topicId.toLowerCase().replace(/[^a-z0-9]/g, '-');

            // Check for deep dive
            related.push({
                title: `${topicId} Deep Dive`,
                url: `deep-dive-player.html?module=${normalized}`,
                type: 'deepDive',
                icon: '🔬'
            });

            // Check for adventure case
            related.push({
                title: `${topicId} Case Adventure`,
                url: `adventure-cases/${normalized}-expanded-adventure.html`,
                type: 'adventure',
                icon: '🗺️'
            });

            return related;
        },

        /**
         * Render a cross-links panel into a container
         * @param {string} containerId - DOM element ID
         * @param {string} topicId - current topic
         */
        render: function(containerId, topicId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const links = this.findRelated(topicId);
            if (links.length === 0) return;

            container.innerHTML = `
                <div style="margin-top: 1.5rem; padding: 1rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; background: rgba(255,255,255,0.03);">
                    <h4 style="margin: 0 0 0.75rem 0; font-size: 0.85rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em;">Related Content</h4>
                    ${links.map(l => `
                        <a href="${l.url}" style="display: flex; align-items: center; gap: 8px; padding: 8px; margin-bottom: 4px; border-radius: 6px; color: inherit; text-decoration: none; transition: background 0.2s;"
                           onmouseenter="this.style.background='rgba(255,255,255,0.05)'" onmouseleave="this.style.background='transparent'">
                            <span>${l.icon}</span>
                            <span style="font-size: 0.9rem;">${l.title}</span>
                            <span style="margin-left: auto; font-size: 0.75rem; opacity: 0.5;">${l.type}</span>
                        </a>
                    `).join('')}
                </div>
            `;
        }
    };

    console.log('DxCrossLinks initialized');
})();
