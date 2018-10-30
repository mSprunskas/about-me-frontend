import React, { PureComponent } from 'react';

import Children from './Children';

class List extends PureComponent {
    render() {
        return (
            <ul>
                <Children children={this.props.children} all={this.props.all} />
            </ul>
        );
    }
}

export default List;
