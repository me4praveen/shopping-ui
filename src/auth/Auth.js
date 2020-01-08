import React, { links } from 'react';
import { HEADER_CONFIG } from '../assets/config/header';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Cart from '../module/cart/Cart';

function getAllLinks() {
    const links = [];
    HEADER_CONFIG.tabs.forEach(tab => {
        if(!tab.subtabs) {
            links.push(tab)
        } else{
            links.concat(tab.subtabs);
        } 
    });
    links.concat(
        [
            {
                "path" : "/cart",
                "exact": true,
                "title": "Cart",
                "component": Cart,
                "type": "public"
            },
        ]
    )
    return links;
}

function Auth() {

    const links = getAllLinks()
    return (
        <Router>
            <Switch>
                {
                    links.map((link, index) => link.type === "public" ?
                        <Route key={index} path={link.path} exact={link.exact} component={link.component} /> :
                        null)
                }
                <Route component={PageNotFound} />
            </Switch>
            
        </Router>
    )
}

export default Auth;
