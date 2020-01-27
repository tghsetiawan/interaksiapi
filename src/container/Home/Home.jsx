import React, {Component, Fragment} from 'react';
import BlogPost from  '../Pages/BlogPost/BlogPost';
import Product from '../Pages/Product/Product';
import Card from '../Pages/CardProduct/CardProduct';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import NewProduct from '../Pages/NewProduct/NewProduct';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Home.css';




class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount(){

    }
     
    render(){
        return(
            <Router>
                <Fragment>

                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/card">Card</Link>
                        <Link to="/newproduct">New Product</Link>
                    </div>
                    
                    <Switch>
                        <Route path="/" exact>
                            <BlogPost /> 
                        </Route>

                        <Route path="/product">
                            <Product /> 
                        </Route>

                        <Route path="/card"> 
                            <Card /> 
                        </Route>

                        <Route path="/newproduct"> 
                            <NewProduct /> 
                        </Route>
                        
                        {/* <Route path="/detail-post/:id"> 
                            <DetailPost /> 
                        </Route> */}
                        
                        <Route path="/detail-post/:postID" component={DetailPost} />

                    </Switch>
                    
                </Fragment>
            </Router>
        )
    }
}

export default Home;