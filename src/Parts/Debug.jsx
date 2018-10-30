import React, { PureComponent } from 'react';

import Children from './Children';

class Debug extends PureComponent {
    render() {
        return (
            <div className="part-debug">
                <div className="part-debug-content">
                    <Children children={this.props.children} all={this.props.all} />
                </div>
            </div>
        );
    }
}

export default Debug;