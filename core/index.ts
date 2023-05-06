import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { byEnv } from "./env";

export const apiUrl = (segment: string = "") => {
    return byEnv(`https://api.codesanctum.org/${segment}`, `https://api-test.codesanctum.org/${segment}`);
}

let httpLink = createHttpLink({
    uri: apiUrl("graphql"),
});

let authLink = setContext((op, prev) => {
    if (globalThis.localStorage) {
        let token = localStorage.getItem("accessToken");
        if (token) {
            return {
                ...prev,
                headers: {
                    ...prev.headers,
                    Authorization: `bearer ${token}`
                }
            }
        }
    }

    return {
        ...prev,
        headers: {
            ...prev.headers
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})