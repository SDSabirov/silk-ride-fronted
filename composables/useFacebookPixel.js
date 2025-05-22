export function useFacebookPixel() {
  const track = (eventName, params = {}) => {
    if (process.client && window.fbq) {
      window.fbq('track', eventName, params);
    }
  };
  return { track };
}