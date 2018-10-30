import React, { PureComponent } from 'react';

import Contacts from './Contacts';
import Avatar from './Avatar';
import Print from './Print';

class Header extends PureComponent {
    render() {
        const { profile } = this.props;

        return (
            <header>
                <Print />

                <div className="row">
                    <div className="col-sm-3 col-xs-12">
                        <div className="avatar-container">
                            <Avatar url={profile.avatar} />
                        </div>
                    </div>
                    <div className="col-sm-9 col-xs-12">
                        <div className="vcard-container">
                            <div className="h1 text-uppercase">
                                <strong>{profile.name}</strong>
                            </div>
                            <div className="occupation h3">{profile.occupation}</div>
                            <Contacts contacts={profile.contacts}/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
