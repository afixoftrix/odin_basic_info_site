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
    else if (req.url === '/about'){
        const filepath = path.join( process.cwd(), "/public/about.html" )
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
    else if (req.url === '/contact-me'){
        const filepath = path.join( process.cwd(), "/public/contact-me.html" )
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
    else if ((req.url.indexOf(".css")) != -1){
        const filepath = path.join( process.cwd(), "/public/styles.css" )
        console.log(filepath);
        fs.readFile(filepath, (err, css) => {
            if (err){ 
                console.log(err);
                return err
            }
            res.writeHead(200, { 'Content-Type': 'text/css'})
            res.write(css)
            res.end()
        })
    }
    else {
        const filepath = path.join(process.cwd(), "/public/404.html");
        console.log(filepath);
        fs.readFile(filepath, (err, html) => {
            if (err) {
                console.log(err);
                return err;
            }
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        });
    }
})

server.listen(3000, () => { console.log("listening on port 3000");})