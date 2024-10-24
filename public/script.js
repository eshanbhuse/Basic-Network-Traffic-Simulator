function simulate() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    fetch(`/simulate?source=${source}&destination=${destination}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Route: ${data.route.join(' -> ')}`;
        })
        .catch(error => console.error('Error:', error));
}
