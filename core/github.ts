export const githubClient = {
    clientId: "Iv1.c9be0bd51a7bd8bf",
    redirectUri: "http://localhost:3000/signin?oauth=github"
}

export function getGithubLoginUrl(from: string) {
    let options = {
        client_id: githubClient.clientId,
        redirect_uri: githubClient.redirectUri,
        scope: "user:email",
        state: from 
    }

    let qs = new URLSearchParams(options);
    return  `https://github.com/login/oauth/authorize?${qs.toString()}`
}