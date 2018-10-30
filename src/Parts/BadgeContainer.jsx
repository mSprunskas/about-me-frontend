import React, { PureComponent } from 'react';

import Badge from './Badge';

class BadgeContainer extends PureComponent {
    renderContent() {
        if (this.props.part.properties.length < 1) {
            return '';
        }

        return this.props.part.properties.map((badge, key) => {
            return (
                <Badge key={key} content={badge}/>
            )
        });
    }

    render() {
        return (
            <div className="badge-container">{this.renderContent()}</div>
        );
    }
}

export default BadgeContainer;
