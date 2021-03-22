import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div className="dp-contact">
                <ul className="dp-contacts">
                    <li>
                        <a href="https://github.com/pavandeore" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://dev.to/pawandeore" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'dev']} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pawan-deore-0bb60b1a4/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </li>
                   
                </ul>
            </div>
        );
    }
}
