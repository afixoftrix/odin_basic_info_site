const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        const filepath = path.join( process.cwd(), "/public/index.html" )
        console.log(filepath);
        fs.readFile(filepath, (err, html) => {
            if (err){ 
                console.log(err);
                return err
            }
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.write(html)
            res.end()
        })
    }
})

server.listen(3000, () => { console.log("listening on port 3000");})