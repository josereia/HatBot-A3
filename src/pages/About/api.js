import axios from "axios";
const baseURL = "https://api.github.com/repos/josereia/Chatbot-A3/contributors";

export async function getGitHubContributors() {
    return await axios.get(baseURL, { params: {} })
}