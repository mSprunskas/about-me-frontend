import React, { PureComponent } from 'react';

const withLayout = (WrappedComponent) => {
    class WithLayout extends PureComponent {
        render() {
            return (
                <div className="page-loader-container">
                    <div className="page-loader-content">
                        <WrappedComponent {...this.props} />
                    </div>
                </div>
            );
        }
    }

    return WithLayout;
};

export default withLayout;
