export function byEnv(prodValue: any, devValue: any, testValue: any = undefined) {
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