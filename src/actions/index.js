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

export const fetchBookmarks = () => {
    return async (dispatch, getState) => {
        let response = await LocalApi.get("/bookmarks");

        return dispatch({
            type: "SET_BOOKMARKS",
            payload: response.data
        });
    }
}

export const createBookmark = (bookmark) => {
    return async (dispatch, getState) => {
        const response = await LocalApi.post(
            "/bookmarks", 
            bookmark
        );

        return dispatch({
            type: "SET_BOOKMARKS",
            payload: response.data
        })
    };
}