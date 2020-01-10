export const setAuthToken = (token) => {
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}