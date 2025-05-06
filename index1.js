const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myUrl.pathname;
    const name = myUrl.searchParams.get('name'); 
    const color = myUrl.searchParams.get('color') || 'red';
    const method = req.method;

    // Match route like /api/{word}
    const match = pathname.match(/^\/api\/([a-zA-Z0-9-]+)$/);
    
    if (method === 'GET' && match && name) {
        const pathVariable = match[1];
        res.end(`
            <html>
              <body>
                <h1 style="color:${color};">${pathVariable} ${name}</h1>
              </body>
            </html>
        `);
    } else {
        res.end(JSON.stringify({ error: "Not Found or missing 'name' parameter" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api/`);
});
