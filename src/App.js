import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import ContentDetails from "./pages/ContentDetails";
import Home from "./pages/Home";

class App extends React.Component{

    render(){
        return(
            <div>
                <style>
                    @import "https://vjs.zencdn.net/7.0.0/video-js.css";
                </style>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contentDetails/:bongoId" component={ContentDetails} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;