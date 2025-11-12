export async function swRegister() {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Worker API not supported.');
    return;
  }
 
  try {
    const registration = await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registration succeeded:', registration);
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
}