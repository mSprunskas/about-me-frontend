import React, { PureComponent } from 'react';

import PART_MAP from './parts.js';

const AVAILABLE_PARTS = Object.keys(PART_MAP);

class Dynamic extends PureComponent {
    constructor(props) {
        super(props);
    }

    getChildParts(identifier) {
        // if part has no id it has no children
        if (identifier === null) {
            return [];
        }

        const children = this.props.all.filter((part) =>  part.parent_identifier === identifier);

        const sorted = children.sort((a, b) => { return a.order > b.order });

        return [...[], ...sorted];
    }

    render() {
        const { part, all } = this.props;

        const partKey = AVAILABLE_PARTS.includes(part.layout) ? part.layout : 'text';
        const Part = PART_MAP[partKey];

        return (
            <Part part={part} children={this.getChildParts(part.identifier)} all={all} />
        );
    }
}

export default Dynamic;