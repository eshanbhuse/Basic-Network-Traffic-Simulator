const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('docs'));

// Simulating a basic network
let networkNodes = ['A', 'B', 'C', 'D', 'E'];

// Define network traffic simulation
app.get('/simulate', (req, res) => {
    const source = req.query.source || 'A';
    const destination = req.query.destination || 'E';

    let route = simulateTraffic(source, destination);
    res.json({ route });
});

function simulateTraffic(source, destination) {
    let visited = [];
    let currentNode = source;
    let route = [currentNode];

    while (currentNode !== destination) {
        visited.push(currentNode);
        // Randomly select the next node that's not visited
        let possibleNodes = networkNodes.filter(node => !visited.includes(node));
        currentNode = possibleNodes[Math.floor(Math.random() * possibleNodes.length)];
        route.push(currentNode);
    }

    return route;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
