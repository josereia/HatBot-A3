import axios from "axios"
const url = "http://192.168.0.2:3334/message"

async function postMessage(text) {
    return await axios.get(url, {
        params: {
            lang: "pt-br",
            text: text,
            userId: "1"
        }
    })
}

export { postMessage }