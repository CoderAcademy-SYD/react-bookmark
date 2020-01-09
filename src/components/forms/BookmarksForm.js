import React, {Component} from "react";
import axios from "axios";

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
        const { token } = this.props;

        try {
            const response = await axios.post(
                "http://localhost:3000/bookmarks", 
                { title, url },
                { headers: {"Authorization": `Bearer ${token}`} }
            );
            console.log(response);
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

export default BookmarksForm;