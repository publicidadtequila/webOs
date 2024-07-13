/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAhUdHPH2ZlJxzA6KPaPQkmcT1gicGFREc",
  authDomain: "yapideme-56978.firebaseapp.com",
  projectId: "yapideme-56978",
  storageBucket: "yapideme-56978.appspot.com",
  messagingSenderId: "589988419106",
  appId: "1:589988419106:web:20399ece6c0add7be61c7b",
  measurementId: "G-2JYK8EWECV"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
