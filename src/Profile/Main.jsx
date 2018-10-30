import React, { PureComponent } from 'react';

import { Dynamic } from '../Parts';

class Main extends PureComponent {
    render() {
        return this.props.parts
            .filter((part) => part.parent_identifier === null)
            .sort((a, b) => a.order > b.order)
            .map((part, key) => <Dynamic key={key} part={part} all={this.props.parts}/>);
    }
}

export default Main;