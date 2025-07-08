class RaffleWidget {
    constructor() {
        this.userId = '123';
        this.isExpanded = false;
        this.tickets = 0;
        this.baseUrl = window.location.origin;
        
        this.toggle = document.getElementById('raffleToggle');
        this.panel = document.getElementById('rafflePanel');
        this.ticketCount = document.getElementById('ticketCount');
        this.joinBtn = document.getElementById('joinRaffleBtn');
        this.paymentBtn = document.getElementById('paymentBtn');
        this.statusMessage = document.getElementById('statusMessage');
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.togglePanel());
        this.joinBtn.addEventListener('click', () => this.joinRaffle());
        this.paymentBtn.addEventListener('click', () => this.proceedToPayment());
        
        this.loadTicketCount();
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.raffle-widget')) {
                this.closePanel();
            }
        });
    }
    
    async loadTicketCount() {
        try {
            const response = await fetch(`${this.baseUrl}/api/raffle-status?userId=${this.userId}`);
            const data = await response.json();
            this.tickets = data.tickets;
            this.updateTicketDisplay();
        } catch (error) {
            this.showStatus('Error loading tickets', 'error');
        }
    }
    
    async joinRaffle() {
        try {
            this.joinBtn.disabled = true;
            this.joinBtn.textContent = 'Joining...';
            
            const response = await fetch(`${this.baseUrl}/api/raffle-entry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: this.userId })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.tickets = data.tickets;
                this.updateTicketDisplay();
                this.showStatus('Successfully joined raffle!', 'success');
            } else {
                this.showStatus('❌ Error, try again.', 'error');
            }
        } catch (error) {
            this.showStatus('❌ Error, try again.', 'error');
        } finally {
            this.joinBtn.disabled = false;
            this.joinBtn.textContent = 'Join the Raffle';
        }
    }
    
    async proceedToPayment() {
        try {
            this.paymentBtn.disabled = true;
            this.paymentBtn.textContent = 'Processing...';
            
            const response = await fetch(`${this.baseUrl}/api/create-checkout-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 100, currency: 'usd' })
            });
            
            const data = await response.json();
            
            if (data.sessionId) {
                this.showStatus('Redirecting to payment...', 'success');
                
                // Simulate payment success
                setTimeout(async () => {
                    try {
                        const webhookResponse = await fetch(`${this.baseUrl}/api/stripe-webhook`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ sessionId: data.sessionId })
                        });
                        
                        const webhookData = await webhookResponse.json();
                        if (webhookData.success) {
                            this.tickets = webhookData.tickets;
                            this.updateTicketDisplay();
                            this.showStatus('Payment successful! Tickets added.', 'success');
                        } else {
                            this.showStatus('❌ Payment failed. Please try again.', 'error');
                        }
                    } catch (error) {
                        this.showStatus('❌ Payment failed. Please try again.', 'error');
                    }
                }, 2000);
            }
        } catch (error) {
            this.showStatus('❌ Payment failed. Please try again.', 'error');
        } finally {
            this.paymentBtn.disabled = false;
            this.paymentBtn.textContent = 'Proceed to Payment';
        }
    }
    
    togglePanel() {
        this.isExpanded = !this.isExpanded;
        this.panel.classList.toggle('active', this.isExpanded);
    }
    
    closePanel() {
        this.isExpanded = false;
        this.panel.classList.remove('active');
    }
    
    updateTicketDisplay() {
        this.ticketCount.textContent = `✅ You have ${this.tickets} tickets.`;
    }
    
    showStatus(message, type) {
        this.statusMessage.textContent = message;
        this.statusMessage.className = `status-message status-${type}`;
        this.statusMessage.style.display = 'block';
        
        setTimeout(() => {
            this.statusMessage.style.display = 'none';
        }, 3000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RaffleWidget();
});