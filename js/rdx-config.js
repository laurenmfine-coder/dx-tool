try{if(!/^\/(index.html)?$/.test(location.pathname)){location.replace('/');}}catch(e){}
// ReasonDx — Central Configuration
// Single source of truth for Supabase URL and anon key
// Load this script before any other RDX scripts that need Supabase

(function() {
  window.RDX_CONFIG = {
    SUPABASE_URL: 'https://lpwbiqpojisqgezycupw.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0',
    WORKER_URL: 'https://coachdx-attending.laurenmfine.workers.dev',
    EMAIL_WORKER: 'https://rdx-email.laurenmfine.workers.dev',
    DEBUG: false,
  };
  // Convenience aliases
  window.SUPABASE_URL = window.RDX_CONFIG.SUPABASE_URL;
  window.SUPABASE_ANON_KEY = window.RDX_CONFIG.SUPABASE_ANON_KEY;
  // Singleton Supabase client — prevents GoTrueClient multiple instance warnings
  if (window.supabase && window.supabase.createClient && !window._rdxSbClient) {
    window.addEventListener('load', function() {
      if (!window._rdxSbClient && window.supabase) {
        window._rdxSbClient = window.supabase.createClient(
          window.RDX_CONFIG.SUPABASE_URL, 
          window.RDX_CONFIG.SUPABASE_ANON_KEY
        );
      }
    });
  }
})();
