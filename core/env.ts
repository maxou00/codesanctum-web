export function byEnv(prodValue: any, devValue: any, testValue: any = undefined) {
    console.log("-------------------------------------------------")
    console.log("NODE_ENV ", process.env.NODE_ENV)
    console.log("NEXT_PUBLIC_ENV ", process.env.NEXT_PUBLIC_ENV)
    console.log("NEXT_PUBLIC_API_DOMAIN ", process.env.NEXT_PUBLIC_API_DOMAIN);
    console.log("NEXT_PUBLIC_GOOGLE_CLIENT_ID ", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    console.log("NEXT_PUBLIC_GITHUB_CLIENT_ID ", process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);
    console.log("NEXT_PUBLIC_GITHUB_CALLBACK_URL ", process.env.NEXT_PUBLIC_GITHUB_CALLBACK_URL);
    console.log("-------------------------------------------------")

    if(globalThis.window) {
        if(["www.codesanctum.org", "codesanctum.org"].includes(window.location.hostname)) {
            return prodValue;
        }
        if(["test.codesanctum.org", "localhost", "127.0.0.1"].includes(window.location.hostname)) {
            if(window.location.hostname === "test.codesanctum.org") {
                return testValue || devValue;
            }
            return devValue;
        }
    }
    if(process.env.NEXT_PUBLIC_ENV === "production" || process.env.NODE_ENV === "production") {
        return prodValue;
    }
    if(process.env.NODE_ENV === "test") {
        return testValue || devValue;
    }
    return devValue;
}