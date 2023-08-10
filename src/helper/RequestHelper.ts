import {fetchWithTimeout} from "./FetchHelper";
import {getConfig} from "./ConfigHelper";
import {updateCache} from "./DataHelper";

export function initRequestSchedule() {
    const config = getConfig()

    setInterval(async () => {
        await requestData("twitch", `${config.web.url}/?getdata=twitch`)
        await requestData("announcement", `${config.web.url}/?variable=announcement`)
        await requestData("ads", `${config.web.url}/?getad=true&token=${config.web.token}`)
        await requestData("theme", `${config.web.url}/?getthemecolor`)
    }, 1000*5)
}

async function requestData(key:string, url:string) {
    try {
        const request = await fetchWithTimeout(url)
        const data = await request.json()

        updateCache(key, data)
    }catch (e) {
        console.log('an Error occurred! \n')
        console.log(e)
    }
}