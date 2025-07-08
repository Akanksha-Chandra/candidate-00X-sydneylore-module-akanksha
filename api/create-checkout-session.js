export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    const { amount, currency } = req.body;
    
    // Mock Stripe session ID
    const sessionId = `test_session_${Date.now()}`;
    
    res.status(200).json({ sessionId });
}