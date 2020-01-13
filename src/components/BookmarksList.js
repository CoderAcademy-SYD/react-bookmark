import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBookmarks } from "./../actions";

class BookmarksList extends Component {
    componentDidMount() {
        this.props.fetchBookmarks();
    }
    
    render() {
        const { bookmarks } = this.props;

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
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps, { fetchBookmarks })(BookmarksList);