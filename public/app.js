// Fetch the "Hello, World!" message from the REST API
fetch('/api/hello')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error fetching the message:', error);
        document.getElementById('message').textContent = 'Failed to load message';
    });
