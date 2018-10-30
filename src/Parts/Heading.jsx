import React, { PureComponent } from 'react';

class Heading extends PureComponent {
    render() {
        const { part } = this.props;

        const size = part.properties.size ? part.properties.size : '1';
        const Element = 'h' + size;

        return (
            <Element>{part.content}</Element>
        );
    }
}

export default Heading;