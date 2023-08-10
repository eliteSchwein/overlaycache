import {readFile, readFileSync} from "fs";
import * as path from "path";

let configData: any = {
    "twitch": {
        "channelName": "eliteSCHW31N",
        "channelId": "118277573"
    },
    "web": {
        "token": "",
        "url": ""
    },
    "server":{
        "ip": "0.0.0.0",
        "port": "8080"
    }
}
export function readConfig() {
    const configFile = readFileSync(path.resolve(__dirname, "../config.local.json"), {encoding: 'utf8'})

    configData = JSON.parse(configFile)

    return configData
}

export function getConfig() {
    return configData
}