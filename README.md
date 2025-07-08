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
- **Backend**: Node.js serverless functions
- **Deployment**: Vercel/Netlify
- **Payment**: Stripe (mock implementation)
- **Styling**: Custom CSS with animations

## 📂 Project Structure

```
sydneylore-project/
├── index.html              # Main landing page
├── stories.html            # Stories page
├── css/
│   └── styles.css          # Main stylesheet
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
├── netlify.toml           # Netlify config
└── README.md              # This file
```

## 🔧 Local Development

### Prerequisites
- Node.js (for package management)
- Python or PHP (for local server)

### Setup
1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/candidate-001-sydneylore-module-raffle.git
cd candidate-001-sydneylore-module-raffle
```

2. **Start local server**:
```bash
# Option 1: Python
python -m http.server 3000

# Option 2: Node.js
npx serve . -p 3000

# Option 3: PHP
php -S localhost:3000
```

3. **Open in browser**:
```
http://localhost:3000
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir .
```

### GitHub Pages
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main"
4. Click "Save"

**Note**: API endpoints require serverless functions (Vercel/Netlify)

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

### Custom Integration
```html
<!-- Include CSS -->
<link rel="stylesheet" href="css/styles.css">

<!-- Include widget HTML -->
<div class="raffle-widget">
  <!-- Widget content -->
</div>

<!-- Include JavaScript -->
<script src="js/raffle-widget.js"></script>
```

## 🎯 Widget Behavior

- **Position**: Fixed bottom-right corner
- **Toggle**: Click to expand/collapse
- **Outside Click**: Auto-close when clicking outside
- **Responsive**: Adapts to screen size
- **Animations**: Smooth transitions
- **Status Messages**: 3-second auto-hide

## 🔧 Configuration

### Environment Variables
```javascript
// In production, set these in your deployment platform
const config = {
  STRIPE_PUBLIC_KEY: 'pk_test_...',
  STRIPE_SECRET_KEY: 'sk_test_...',
  DATABASE_URL: 'your-database-url'
};
```

### Widget Options
```javascript
// Customizable options
const raffleWidget = new RaffleWidget({
  position: 'bottom-right',  // bottom-left, top-right, top-left
  theme: 'purple',          // purple, blue, green
  autoExpand: false,        // Auto-expand on load
  showTicketCount: true     // Show ticket count in toggle
});
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Widget toggles open/close
- [ ] Join raffle button works
- [ ] Payment flow simulates correctly
- [ ] Ticket count updates
- [ ] Status messages display
- [ ] Mobile responsive design
- [ ] Cross-browser compatibility

### Test Data
```javascript
// Mock user data for testing
const testUser = {
  id: '123',
  initialTickets: 0,
  canJoinFree: true,
  paymentEnabled: true
};
```

## 🐛 Troubleshooting

### Common Issues

**Widget not appearing**:
- Check console for JavaScript errors
- Verify CSS file is loaded
- Ensure DOM is ready before initialization

**API endpoints not working**:
- Check deployment platform supports serverless functions
- Verify API routes are correctly configured
- Check browser network tab for request errors

**Payment simulation fails**:
- Verify API endpoints are accessible
- Check request/response format
- Ensure proper error handling

## 📝 License

This project is created for demonstration purposes. Please ensure compliance with your organization's policies before production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Create an issue in the GitHub repository
- Check the troubleshooting section
- Review the implementation guide

---

**Built with ❤️ for SydneyLore.com**
