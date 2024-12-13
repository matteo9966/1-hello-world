import {createServer} from 'http';


function main(){
    const server = createServer((req,res)=>{
        const url = req.url;

        if(url.includes('hello-world')){
            // res.statusCode=200;
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Hello World');
        }else{
            res.statusCode=400;
            res.end('Bad Request')
        }
    })

    server.listen(4000,()=>{console.log('listening on port 4000')});
}

main();
