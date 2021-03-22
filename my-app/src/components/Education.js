import React, {Component} from "react";

import Typing from 'react-typing-animation';
import EducationItem from "./EducationItem";

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.props = {
            schoolSkills: '',
            technicalSkills: ''
        };
    }

    render() {
        return (
            <div className="dp-section-education">
                {/*schulisch*/}
                <div className="dp-school">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                    >
                        <div className="dp-title"> {this.props.schoolSkills}</div>
                    </Typing>

                    <div className="code code-css dp-work-experience-list">
                        <div className="code-content">
                            <code>
                                <EducationItem
                                    duration="2017-2021"
                                    school="BTech"
                                    schoolName="GHRCEM Pune, IN"
                                    graduation="Computer Engineering"
                                    note="8.04"
                                />

                                <EducationItem
                                    duration="2015-2017"
                                    school="HSC"
                                    schoolName="Nowrosjee Wadia College"
                                    graduation="HSC 12th"
                                    note="55.23"
                                />

                                {/*Freiherr-vom-Stein Berufskolleg*/}
                                <EducationItem
                                    duration="2015"
                                    school="SSC"
                                    schoolName="RCPIT Instituate"
                                    graduation="SSC 10th"
                                    note="86.20"
                                />

                                {/* Berufskolleg Senne
                                <EducationItem
                                    duration="2011-2013"
                                    school="Berufskolleg"
                                    schoolName="Senne"
                                    graduation="Mediengestalterin für Digital- und Printmedien"
                                    note="2.1"
                                /> */}
                            </code>
                        </div>
                    </div>
                </div>

                {/*Technical Skills*/}
                <div className="dp-technical-skills">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                        startDelay={1500}
                    >
                        <div className="dp-title">{this.props.technicalSkills}</div>
                    </Typing>

                    <div className="code code-js dp-technical-skills-list">
                        <div className="code-content">
                            <code>
                                <span className="c-y">const </span><span className="c-b">Frontend</span> = [<span className="c-g">“HTML”</span>, <span className="c-g">“CSS”</span>, <span className="c-g">“sass/scss”</span>, <span className="c-g">“JavaScript/es6+”</span>, <span className="c-g">“Bootstrap”</span>, <span className="c-g">“UI-kit”</span>, <span className="c-g">“ReactJS / Redux”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Backend </span> = [<span className="c-g">“php”</span>, <span className="c-g">“nodeJS”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Database</span> = [<span className="c-g">“MySQL”</span>, <span className="c-g">“MongoDB”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Cloud</span> = [<span className="c-g">“Netlify”</span>, <span className="c-g">“Firebase”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Version Control</span> = [<span className="c-g">“Git”</span>, <span className="c-g">“Github”</span>];<br/>
                                
                                <br/>
                            </code>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
