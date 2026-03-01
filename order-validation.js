// Order Validation Module — Stub
// Provides CDS alerts when orders conflict with allergies, medications, or labs
window.ORDER_VALIDATION = { triggeredAlerts: [] };
window.OrderValidator = {
  getAnalytics: function() { return { alerts: [], score: 100 }; },
  getCRDAVector: function() { return []; }
};
