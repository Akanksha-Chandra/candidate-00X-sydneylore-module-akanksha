# SydneyLore Raffle Widget

A responsive, fixed-position raffle widget for SydneyLore.com featuring ticket tracking, payment integration, and modern UI design.

## 🚀 Live Demo

**Live URL**: (https://sydneylore-staging.vercel.app)
**GitHub Repository**: (https://github.com/Akanksha-Chandra/candidate-00X-sydneylore-module-akanksha)

## ✨ Features

- **Fixed Position Widget**: Stays accessible on all pages
- **Ticket Tracking System**: Real-time ticket count updates
- **Payment Integration**: Mock Stripe payment flow
- **Responsive Design**: Works on desktop and mobile
- **Expandable Panel**: Clean, collapsible interface
- **Status Messages**: User feedback for all actions
- **Cross-Page Compatibility**: Works on any page

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: Vercel
- **Payment**: Stripe (mock implementation)
- **Styling**: Custom CSS with animations

## 📂 Project Structure

```
sydneylore-project/
├── index.html              # Main landing page
├── stories.html            # Stories page
├── js/
│   └── raffle-widget.js    # Widget functionality
├── api/                    # Serverless functions
│   ├── raffle-status.js    # Get user ticket count
│   ├── raffle-entry.js     # Join raffle endpoint
│   ├── create-checkout-session.js  # Payment session
│   └── stripe-webhook.js   # Payment webhook
├── raffle-widget-standalone.js  # Standalone widget
├── widget-demo.html        # Demo page
├── vercel.json            # Vercel config
└── README.md              # This file
```

## 🔧 Local Development

- Python or PHP (for local server)

## 📡 API Endpoints

### GET `/api/raffle-status`
Get user's current ticket count
```javascript
// Query parameters
?userId=123

// Response
{
  "tickets": 5
}
```

### POST `/api/raffle-entry`
Join the raffle (free entry)
```javascript
// Request body
{
  "userId": "123"
}

// Response
{
  "success": true,
  "tickets": 6
}
```

### POST `/api/create-checkout-session`
Create payment session
```javascript
// Request body
{
  "amount": 100,
  "currency": "usd"
}

// Response
{
  "sessionId": "test_session_1234567890"
}
```

### POST `/api/stripe-webhook`
Handle payment completion
```javascript
// Request body
{
  "sessionId": "test_session_1234567890"
}

// Response
{
  "success": true,
  "tickets": 10
}
```

## 🎨 Widget Integration

### Standalone Widget
Include the widget on any page:
```html
<script src="raffle-widget-standalone.js"></script>
```

## 🎯 Widget Behavior

- **Position**: Fixed bottom-right corner
- **Toggle**: Click to expand/collapse
- **Outside Click**: Auto-close when clicking outside
- **Responsive**: Adapts to screen size
- **Animations**: Smooth transitions
- **Status Messages**: 3-second auto-hide

