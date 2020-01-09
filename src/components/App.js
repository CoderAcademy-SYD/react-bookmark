import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";

class App extends Component {
    state = { token: sessionStorage.getItem("token") };

    onRegisterFormSubmit = (token, callback = () => {}) => {
        sessionStorage.setItem("token", token);
        this.setState({ token }, callback);
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact 
                            path="/register" 
                            render={(props) => {
                                return <RegisterPage {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />
                            }}  
                        />
                        <Route exact path="/bookmarks" component={BookmarksPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
