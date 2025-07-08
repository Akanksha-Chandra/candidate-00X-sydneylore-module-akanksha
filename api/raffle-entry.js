export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    
    // Mock response - in production, update your database
    const newTickets = Math.floor(Math.random() * 10) + 1;
    
    res.status(200).json({ 
        success: true, 
        tickets: newTickets 
    });
}