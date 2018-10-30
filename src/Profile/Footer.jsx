import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <div>
                    App source code @ <a href="https://github.com/mSprunskas/about-me-frontend" target="_blank" rel="noopener noreferrer">https://github.com/mSprunskas/about-me-frontend</a>.
                </div>
                <div>
                    Backend source code @ <a href="https://github.com/mSprunskas/about-me-api" target="_blank" rel="noopener noreferrer">https://github.com/mSprunskas/about-me-api</a>.
                </div>
                <div>
                    Theme inspired by <a href="https://themes.3rdwavemedia.com/demo/pillar/" target="_blank" rel="noopener noreferrer">Pillar</a>.
                </div>
            </footer>
        );
    }
}

export default Footer;