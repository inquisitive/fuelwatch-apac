// FuelWatch APAC — Service Worker
// Enables background push notifications

const CACHE_NAME = 'fuelwatch-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// Handle push notifications from server (future use)
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || '⛽ FuelWatch APAC Updated!';
  const options = {
    body: data.body || 'Petrol prices have been updated. Check the latest rates now.',
    icon: '/fuelwatch-apac/icon.png',
    badge: '/fuelwatch-apac/icon.png',
    tag: 'fuelwatch-update',
    renotify: true,
    data: { url: 'https://inquisitive.github.io/fuelwatch-apac/' }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Clicking notification opens the site
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data?.url || 'https://inquisitive.github.io/fuelwatch-apac/';
  e.waitUntil(clients.openWindow(url));
});
