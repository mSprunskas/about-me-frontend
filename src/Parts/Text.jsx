import React, { PureComponent } from 'react';

class Text extends PureComponent {
    render() {
        return this.props.part.content;
    }
}

export default Text;