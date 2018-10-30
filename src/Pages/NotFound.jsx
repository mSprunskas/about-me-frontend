import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';

class NotFound extends PureComponent {
    componentDidMount() {
        document.body.classList.add('layout-fullscreen');
    }

    componentWillUnmount() {
        document.body.classList.add('layout-fullscreen');
    }

    render() {
        const params = {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 1500,
                    }
                },
                line_linked: {
                    enable: true,
                    opacity: 0.05,
                },
                move: {
                    direction: 'right',
                    speed: 0.15,
                },
                size: {
                    value: 1,
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                    }
                }
            },
            retina_detect: true
        };

        return (
            <div className="page-content">
                <Particles params={params} />
                <div className="directions-container">
                    <p className="directions-message">404 - Not found</p>
                    <div>
                        <a href="/">Start Over</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;