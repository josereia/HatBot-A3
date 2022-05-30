import axios from "axios"
const url = "http://10.0.0.156:3334/message"

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