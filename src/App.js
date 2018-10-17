import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import Home from './pages/Home'
import test from './pages/test'

/*<BrowserRouter>
<Route path="/" exact component={test} />
</BrowserRouter>*/
class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" component={test} />
            </BrowserRouter>
        )
    }
}

export default App;