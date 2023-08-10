import {getConfig} from "./ConfigHelper";
import {createServer, IncomingMessage, ServerResponse} from "http";
import {getCache} from "./DataHelper";

export function initServer() {
    const config = getConfig()

    const server = createServer((request: IncomingMessage, response: ServerResponse) => {
        const data = getCache()

        response.setHeader("Access-Control-Allow-Origin","*")
        response.setHeader("Content-Type", "application/json");
        response.writeHead(200);
        response.end(JSON.stringify(data, null, 3));
    })

    server.listen(config.server.port, config.server.ip, () => {
        console.log(`Server is running on http://${config.server.ip}:${config.server.port}`)
    })
}