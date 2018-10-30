import React, { Fragment } from 'react';

import FunniesComponent from 'funnies/dist/react';

import withLayout from './Layout';

class Loader extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <div className="sk-double-bounce">
                    <div className="sk-child sk-double-bounce1" />
                    <div className="sk-child sk-double-bounce2" />
                </div>
                <div className="text-center">
                    <h1>Loading...</h1>
                </div>
                <div className="text-center">
                    <FunniesComponent timeout={3000} />
                </div>
            </Fragment>
        )
    }
}

export default withLayout(Loader);
