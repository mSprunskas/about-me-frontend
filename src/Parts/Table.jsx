import React, { PureComponent } from 'react';

import Children from './Children';

class Table extends PureComponent {
    render() {
        return (
            <table className="table table-bordered table-striped">
                <tbody>
                    <Children children={this.props.children} all={this.props.all} />
                </tbody>
            </table>
        );
    }
}

export default Table;