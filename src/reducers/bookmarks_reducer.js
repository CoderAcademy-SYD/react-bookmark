export default (state = [], action) => {
    switch(action.type) {
        case "SET_BOOKMARKS":
            return action.payload;
        default:
            return state;
    }
}