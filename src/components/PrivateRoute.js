import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    const { token, ...rest } = props;

    if (!token) {
        return <Redirect to="/" />
    }
    
    return (
        <Route {...rest} />
    );
}

export default PrivateRoute;