import React, { PureComponent } from 'react';

class Paragraph extends PureComponent {
    render() {
        return (
            <p>{this.props.part.content}</p>
        );
    }
}

export default Paragraph;
