import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/views/Home';
import Nav from '../components/layouts/Nav';
import Footer from '../components/layouts/Footer';

// import '../styles/index.css';

class App extends React.PureComponent {
  render() {

    const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/hire-me" component={Request} /> */}
      </Switch>
    );

    return (
      <React.Fragment>
        <Nav />
        {routes}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;