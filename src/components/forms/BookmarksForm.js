import React, {Component} from "react";
import { connect } from "react-redux";
import { createBookmark } from "./../../actions";

class BookmarksForm extends Component {
    state = {
        title: "",
        url: "",
        errorMessage: null
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const { title, url } = this.state;
        const { createBookmark } = this.props;

        try {
            await createBookmark({ title, url });
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        const { title, url, errorMessage } = this.state;

        return (
            <>
                {errorMessage}
                <form onSubmit={this.onFormSubmit} >
                    <div>
                        <label>Title</label>
                        <input name="title" value={title} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <label>Url</label>
                        <input name="url" value={url} onChange={this.onInputChange} />
                    </div>
                    <input type="submit" value="Create New Bookmark" />
                </form>
            </>
        )
    }
}

export default connect(null, { createBookmark })(BookmarksForm);