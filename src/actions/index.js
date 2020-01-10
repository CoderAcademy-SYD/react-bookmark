export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}

export const setBookmarks = (bookmarks) => {
    return {
        type: "SET_BOOKMARKS",
        payload: bookmarks
    }
}