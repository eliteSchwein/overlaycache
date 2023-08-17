import {fetchWithTimeout} from "./FetchHelper";
import {getConfig} from "./ConfigHelper";
import {updateCache} from "./DataHelper";

export function initRequestSchedule() {
    const config = getConfig()

    setInterval(async () => {
        await requestData("twitch", `${config.web.url}/api?type=5000&method=getData&data=twitch`)
        await requestData("announcement", `${config.web.url}/api?type=5000&method=variable&variable=announcement`)
        await requestData("ads", `${config.web.url}/api?type=5000&method=getAd&token=${config.web.token}`)
        await requestData("theme", `${config.web.url}/api?type=5000&method=getTheme`)
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