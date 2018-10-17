import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ContentDetails from "./pages/ContentDetails";
import Home from "./pages/Home";


/*<BrowserRouter>
<Route path="/" exact component={test} />
</BrowserRouter>*/

class App extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <style>
                        @import "https://vjs.zencdn.net/7.0.0/video-js.css";
                    </style>
                    <Route exact path="/" component={Home} />
                    <Route path="/contentDetails/:bongoId" component={ContentDetails} />
                </div>
            </Router>
        )
    }
}

export default App;