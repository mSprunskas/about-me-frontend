import React, { PureComponent } from 'react';

class TableHeadingCell extends PureComponent {
    render() {
        return (<th>{this.props.part.content}</th>);
    }
}

export default TableHeadingCell;
