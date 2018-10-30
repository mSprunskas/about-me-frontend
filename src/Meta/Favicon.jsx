import React, { PureComponent } from 'react';
import favicon from './favicon.png';

class Favicon extends PureComponent {
    render() {
        return (
            <link rel="icon" href={favicon} />
        );
    }
}

export default Favicon;
