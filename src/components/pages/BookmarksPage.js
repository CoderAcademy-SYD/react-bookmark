import React, { Component } from "react";
import BookmarksList from "./../BookmarksList";
import BookmarksForm from "./../forms/BookmarksForm";
class BookmarksPage extends Component {
    render() {
        return (
            <>
                <h2>Create New Bookmark</h2>
                <BookmarksForm />

                <h2>Your Bookmarks</h2>
                <BookmarksList />    
            </>
        );
    }
}

export default BookmarksPage;