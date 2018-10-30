import React, { PureComponent } from 'react';

class Badge extends PureComponent {
    render() {
        return (<div className="badge">{this.props.content}</div>);
    }
}

export default Badge;
