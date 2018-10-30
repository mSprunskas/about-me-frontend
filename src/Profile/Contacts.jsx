import React, { PureComponent } from 'react';
import Obfuscate from 'react-obfuscate'
import Location from "./Location";

class Contacts extends PureComponent {
    render() {
        const { contacts } = this.props;

        return (
            <div className="contacts-container">
                {contacts.location && (
                    <div>
                        <Location location={contacts.location} />
                    </div>
                )}
                <div>
                    <span>
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <Obfuscate email={contacts.email} />
                    </span>
                </div>
                <div>
                    <span>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <Obfuscate tel={contacts.phone} />
                    </span>
                </div>
            </div>
        );
    }
}

export default Contacts;
