import React from 'react';
import AddBlogPage from '../add-blog-page';
import MainPage from '../main-page';
import {ServiceProvider} from '../service-context';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "../header";
import './app.css'
import BlogService from '../../blog-service';
import PostPage from "../post-page";

const App = () =>{
    return(
        <ServiceProvider value={BlogService}>
            <Router>
                <Header />
                <Route path="/add-user-blog" component={AddBlogPage} />
                <Route path="/" exact component={MainPage} />
                <Route path="/post" exact component={PostPage} />
            </Router>
        </ServiceProvider>
    );
}
export default App;
