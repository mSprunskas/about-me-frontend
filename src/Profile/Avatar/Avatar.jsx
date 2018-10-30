import React from 'react';

import image from './default.jpg';

class Avatar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const url = this.props.url ? this.props.url : image;

        //TODO: retina
        return (
            <img src={url} alt="pic" className="img-responsive" />
        );
    }
}

export default Avatar;