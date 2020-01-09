import React from "react";

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

export default BookmarksList;