import React, {Component} from "react";

class BookmarksForm extends Component {
    state = {
        title: "",
        url: ""
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { title, url } = this.state;

        return (
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
        )
    }
}

export default BookmarksForm;