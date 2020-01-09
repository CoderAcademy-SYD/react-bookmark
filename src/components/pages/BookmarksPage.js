import React, { Component } from "react";
import BookmarksList from "./../BookmarksList";

class BookmarksPage extends Component {
    state = { 
        bookmarks: [
            { title: "home", url: "http://google.com"},
            { title: "social", url: "http://facebook.com"}
        ] 
    }

    render() {
        return (
            <>
                <h2>Create New Bookmark</h2>

                <h2>Your Bookmarks</h2>
                {
                    <BookmarksList bookmarks={this.state.bookmarks}  />
                    //Create a new simple/functional component
                    //called BookmarksList
                    //This component takes a single prop named bookmarks
                    //renders all the bookmarks to the screen as a list
                    //example:
                    // title - url
                    // title - url
                    // title - url
                }
            </>
        );
    }
}

export default BookmarksPage;