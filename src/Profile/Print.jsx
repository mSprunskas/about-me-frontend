import React, { PureComponent } from 'react';

class Print extends PureComponent {
    render() {
        return (
            <div className="ribbon-button-container hidden-print">
                <div className="ribbon-button-content" onClick={() => window.print()} role="button">
                    Print
                </div>
            </div>
        );
    }
}

export default Print;
