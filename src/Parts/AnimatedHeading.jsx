import React, { PureComponent } from 'react';

import Reveal from 'react-reveal/Reveal';

class AnimatedHeading extends PureComponent {
    render() {
        const { part } = this.props;

        return (
            <div className="animated-heading">
                <h2>{part.content}</h2>
                <div className="clearfix">
                    <Reveal effect="expand" duration={1500} delay={500}>
                        <div className="underline" />
                    </Reveal>
                </div>
            </div>
        );
    }
}

export default AnimatedHeading;