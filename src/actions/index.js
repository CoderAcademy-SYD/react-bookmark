import LocalApi from "./../apis/local_api";

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

export const fetchBookmarks = async () => {
    let bookmarks = await LocalApi.get("/bookmarks");

    return {
        type: "SET_BOOKMARKS",
        payload: bookmarks
    }
}