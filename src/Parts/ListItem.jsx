import React, { PureComponent } from 'react';

class ListItem extends PureComponent {
    render() {
        return (
            <li>{this.props.part.content}</li>
        );
    }
}

export default ListItem;
