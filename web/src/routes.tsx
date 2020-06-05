import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoints from './pages/CreatePoints';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/create-point" component={CreatePoints} />
        </BrowserRouter>
    );
}

export default Routes;