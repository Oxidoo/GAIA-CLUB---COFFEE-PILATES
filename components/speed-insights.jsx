// Vercel Speed Insights Component
// Based on @vercel/speed-insights@2.0.0

// Initialize the Speed Insights queue
function initSpeedInsightsQueue() {
  if (window.si) return;
  window.si = function(...params) {
    window.siq = window.siq || [];
    window.siq.push(params);
  };
}

function SpeedInsights() {
  React.useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    // Initialize the queue
    initSpeedInsightsQueue();

    // Check if script is already loaded
    const scriptSrc = '/_vercel/speed-insights/script.js';
    if (document.head.querySelector(`script[src*="${scriptSrc}"]`)) {
      return;
    }

    // Create and configure the script element
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    
    // Add SDK metadata
    script.dataset.sdkn = '@vercel/speed-insights/react';
    script.dataset.sdkv = '2.0.0';

    // Error handling
    script.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${scriptSrc}. Please check if any content blockers are enabled and try again.`
      );
    };

    // Inject the script
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Note: We don't remove the script on unmount as Speed Insights should persist
    };
  }, []);

  return null;
}
