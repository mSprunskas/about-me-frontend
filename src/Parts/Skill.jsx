import React, { PureComponent }  from 'react';

class Skill extends PureComponent {
    render() {
        return (
            <tr>
                <td>
                    {this.props.part.properties.skill}
                </td>
                <td>
                    {this.props.part.properties.level}
                </td>
                <td>
                    {this.props.part.properties.experience}
                </td>
            </tr>
        );
    }
}

export default Skill;