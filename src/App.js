import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/:userName' component={User} />
                    // <Route>
                    //     <div>Default page</div>
                    // </Route>
                </Switch>
            </Router>
        );
    }
}
export default App;