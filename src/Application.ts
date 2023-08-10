import {getConfig, readConfig} from "./helper/ConfigHelper";
import * as packageConfig from '../package.json'
import {initRequestSchedule} from "./helper/RequestHelper";
import {initServer} from "./helper/ServerHelper";

console.log(`Starting ${packageConfig.name} ${packageConfig.version}...`)

console.log('read config...')
readConfig()

console.log('init request schedule...')
initRequestSchedule()

console.log('init web server...')
initServer()