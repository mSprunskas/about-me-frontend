import React, { PureComponent } from 'react';

import Children from './Children';

class Section extends PureComponent {
    render() {
        return (
            <section>
                <Children children={this.props.children} all={this.props.all} />
            </section>
        );
    }
}

export default Section;