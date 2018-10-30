import React, { PureComponent } from 'react';

class TableCell extends PureComponent {
    render() {
        return (<td>{this.props.part.content}</td>);
    }
}

export default TableCell;