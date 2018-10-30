import React, { PureComponent } from 'react';

import Children from './Children';

class Div extends PureComponent {
    render() {
        return (
            <div>
                <Children children={this.props.children} all={this.props.all} />
            </div>
        );
    }
}

export default Div;
