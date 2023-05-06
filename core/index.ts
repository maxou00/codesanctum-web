import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const apiUrl = (segment: string = "") => {
    return `https://api-test.codesanctum.org/${segment}`;
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