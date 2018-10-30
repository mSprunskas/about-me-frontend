import React, { PureComponent } from 'react';

class Location extends PureComponent {
    render() {
        const { location } = this.props;

        return (
            <a href={location.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {location.title}
            </a>
        );
    }
}

export default Location;
