export default function handler(req, res) {
    const { userId } = req.query;
    
    // Mock response - in production, query your database
    const tickets = Math.floor(Math.random() * 10);
    
    res.status(200).json({ tickets });
}