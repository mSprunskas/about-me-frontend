import React, { PureComponent } from 'react';

import Children from './Children';

class SkillGroup extends PureComponent {
    render() {
        //TODO: translations

        return (
            <div className="skill-group">
                <h4>{this.props.part.content}</h4>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                            <th>Experience (years)</th>
                        </tr>
                        <Children children={this.props.children} all={this.props.all} />
                    </tbody>
                </table>
            </div>

        );
    }
}

export default SkillGroup;