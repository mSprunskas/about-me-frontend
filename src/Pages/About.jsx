import React  from 'react';

import Zoom from 'react-reveal/Zoom';

import Profile from '../Profile/Profile';
import Footer from '../Profile/Footer';

class About extends React.PureComponent {
    render() {
        return (
            <Zoom bottom>
                <div className="profile-container">
                    <div className="container">
                        <div className="profile-content">
                            <div className="profile-content-shadow" />
                            <Profile profile={this.props.data} />
                        </div>
                    </div>
                    <hr />
                    <Footer />
                </div>
            </Zoom>
        );
    }
}

export default About;