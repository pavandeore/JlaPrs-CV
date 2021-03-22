import React, {Component} from "react";
import Typing from 'react-typing-animation';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div>
                <Typing
                    speed={20}
                    cursorClassName="dp-cursor"
                    className="dp-introduction"
                >
                    <h3>Name: <strong>Pawan Deore</strong>, <br/>
                        Age: <strong>21</strong> Years old,
                        <Typing.Delay ms={750} />
                        <Typing.Backspace count={4}/>
                         Old,
                    </h3>
                    <Typing.Delay ms={750} />
                    <h1>Frontend Developer</h1>
                    <Typing.Delay ms={750} />
                    <p>Location: <strong>Pune / IN</strong></p>
                </Typing>

            </div>
        );
    }
}
