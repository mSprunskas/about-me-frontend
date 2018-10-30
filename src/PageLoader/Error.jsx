import React, { PureComponent, Fragment } from 'react';

import withLayout from './Layout';

class Error extends PureComponent {
    render() {
        const { error } = this.props;

        if (typeof error.response === 'undefined') {
            return (
                <div className="text-center">
                    <p>
                        <i className="fa fa-hourglass-end fa-2x" aria-hidden="true" />
                        Network timeout occurred
                    </p>
                    <button className="btn btn-default" onClick={() => window.location.reload()}>
                        refresh
                    </button>
                </div>
            );
        }

        if (error.response.status === 500) {
            return (
                <Fragment>
                    <i className="fa fa-fire-extinguisher fa-2x" aria-hidden="true" />
                    Looks like backend is dead, try again later?
                </Fragment>
            );
        }

        if (error.response.status === 400) {
            return (
                <Fragment>
                    <i className="fa fa-exclamation-circle fa-2x" aria-hidden="true" />
                    No result, try different query
                </Fragment>
            );
        }

        return (
            <Fragment>
                <i className="fa fa-exclamation-circle fa-2x" aria-hidden="true" />
                Error occurred, try refreshing page
            </Fragment>
        );
    }
}

export default withLayout(Error);
