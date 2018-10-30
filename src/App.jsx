import React, { PureComponent, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Helmet } from 'react-helmet';

const history = createBrowserHistory();

import { configuredProfile, dummyProfile } from './DataProvider';
import { PageLoader } from './PageLoader';
import { NotFound, About } from './Pages';
import { Favicon } from './Meta';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <Favicon />
                </Helmet>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact render={() => (
                            <PageLoader page={About} provider={configuredProfile} />
                        )} />
                        <Route path="/dummy" render={() => (
                            <PageLoader page={About} provider={dummyProfile} />
                        )} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default App;
