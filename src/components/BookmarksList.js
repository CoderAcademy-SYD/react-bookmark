import React from "react";
import { connect } from "react-redux";

const BookmarksList = (props) => {
    const { bookmarks } = props;

    return (
        <ul>
            {bookmarks.map((bookmark) => {
                return (
                    <li key={`${bookmark.title}#${bookmark.url}`}>
                        {bookmark.title} - {bookmark.url}
                    </li>
                );
            })}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps)(BookmarksList);