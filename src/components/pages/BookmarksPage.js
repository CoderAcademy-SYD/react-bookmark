import React, { Component } from "react";
import BookmarksList from "./../BookmarksList";
import BookmarksForm from "./../forms/BookmarksForm";
class BookmarksPage extends Component {
    state = { 
        bookmarks: [
            { title: "home", url: "http://google.com"},
            { title: "social", url: "http://facebook.com"}
        ] 
    }

    render() {
        const { token } = this.props;

        return (
            <>
                <h2>Create New Bookmark</h2>
                <BookmarksForm token={token} />

                <h2>Your Bookmarks</h2>
                <BookmarksList bookmarks={this.state.bookmarks}  />    
            </>
        );
    }
}

export default BookmarksPage;