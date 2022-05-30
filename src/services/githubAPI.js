import axios from "axios";
const baseURL = "https://api.github.com/repos/josereia/Chatbot-A3/contributors";

async function getGitHubContributors() {
    return await axios.get(baseURL, { params: {} })
}

export { getGitHubContributors }