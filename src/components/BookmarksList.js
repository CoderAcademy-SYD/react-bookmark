import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBookmarks } from "./../actions";

class BookmarksList extends Component {
    state = { loading: true };
    
    componentDidMount() {
        let promises = [
            this.props.fetchBookmarks(),
            this.props.fetchBookmarks(),
            this.props.fetchBookmarks()
        ]

        Promise.all(promises)
            .then(() => this.setState({ loading: false }));
    }
    
    render() {
        const { bookmarks } = this.props;
        const { loading } = this.state;

        if (loading) {
            return(
                <h1>Loading......</h1>
            );
        }

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