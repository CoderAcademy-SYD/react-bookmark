import React, {Component} from "react";
import { connect } from "react-redux";
import { createBookmark } from "./../../actions";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class BookmarksForm extends Component {
    state = {
        errorMessage: null
    }

    onFormSubmit = async (formValues) => {
        const { title, url } = formValues;
        const { createBookmark } = this.props;

        try {
            await createBookmark({ title, url });
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        const { errorMessage } = this.state;
        const { handleSubmit, error, anyTouched } = this.props;

        return (
            <>
                {errorMessage}
                {anyTouched && error}
                <form onSubmit={handleSubmit(this.onFormSubmit)} >
                    <div>
                        <label>Title</label>
                        <Field
                            name="title"
                            component={Input}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Url</label>
                        <Field
                            name="url"
                            component={Input}
                            type="text"
                        />
                    </div>
                    <input type="submit" value="Create New Bookmark" />
                </form>
            </>
        )
    }
}

const WrappedBookmarksForm = reduxForm({
    form: "bookmark",
    validate: (formValues) => {
        const errors = {};

        if (!formValues.title) {
            errors.title = "Title is required";
            errors._error = "Tite is required";
        }

        

        return errors;
    }
})(BookmarksForm)

export default  connect(null, { createBookmark })(WrappedBookmarksForm);