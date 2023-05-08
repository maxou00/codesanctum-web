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

export const JOIN_REQUEST_FORM_ID = "9b7b1c28-0df8-4196-addf-d0c2e75faf26";