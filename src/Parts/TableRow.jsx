import React, { PureComponent } from 'react';

import Children from './Children';

class TableRow extends PureComponent {
    render() {
        return (
            <tr>
                <Children children={this.props.children} all={this.props.all} />
            </tr>
        );
    }
}

export default TableRow;