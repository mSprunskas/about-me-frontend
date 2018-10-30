import React, { PureComponent } from 'react';

import Dynamic from './Dynamic';

class Children extends PureComponent {
    render() {
        if (this.props.children.length < 1) {
            return '';
        }

        return this.props.children.map((part, key) => {
            return (
                <Dynamic key={key} part={part} all={this.props.all} />
            )
        });
    }
}

export default Children;
