import React, { PureComponent, Fragment } from 'react';

import Header from './Header';
import Main from './Main';

class Profile extends PureComponent {
    render() {
        const { profile } = this.props;

        return (
            <Fragment>
                <Header profile={profile} />
                <Main parts={profile.parts} />
            </Fragment>
        )
    }
}

export default Profile;
