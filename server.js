const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Public and Private VAPID keys for web push notifications
const publicVapidKey = 'BCNoSOMeo80WNdFQ-uOL9GjWcSpHc03w83fCkZIXnNSgIMSPSOE-F35DeTCjLn8DaKPNo1N10RLOLXWet_R_THQ';
const privateVapidKey = 'r0ZKGWn-x5bOva2ogt3GDB2Y3lSMcWqYlUgTExLNfeQ';

webpush.setVapidDetails('mailto:bhaskarbabucm6@gmail.com', publicVapidKey, privateVapidKey);

// Store the subscriptions
const subscriptions = [];

// Route to receive new subscription
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});

// Route to send notifications
app.post('/send-notification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'New Notification',
      body: 'This is a push notification!',
    },
  };
  Promise.all(subscriptions.map(subscription => webpush.sendNotification(subscription, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({ message: 'Notification sent successfully' }))
    .catch(err => {
      console.error('Error sending notification:', err);
      res.status(500).json({ error: 'Error sending notification' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
