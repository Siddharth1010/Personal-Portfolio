import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component{
    render(){
        return(
                    <div className="landing-grid2">
                        {/* <img
                        src= {personalimg} alt="avatar"
                        className="avatar-img"
                        /> */}
                        <div className="banner-text1">
                            <h1>About Me</h1>
                            <hr/>
                            <p>Inquisitive, energetic Computer science student skilled in leadership with a strong foundation in
                             Mathematics, Logic and cross platform coding. Seeking to leverage solid skills in collaboration, communication and development as a programmer. My interests lie in the domains of 
                             Machine Learning, Deep Learning, Natural Language Processing and Web / App Development</p>
                        </div>

                        <div className="banner-text2">
                            <h1>Education</h1>
                            <hr/>
                            <div class="education">
                            <table>
                            <tr>
                            <th>School / University</th>
                            <th>Year</th>
                            <th>Course</th>
                            <th>CGPA / Percentage</th>
                            </tr>
                            <tr>
                            <td>Vellore Institute of Technology</td>
                            <td>2018-Present</td>
                            <td>BTech Computer Science</td>
                            <td>CGPA: 8.56 / 10</td>
                            </tr>
                            <tr>
                            <td>DAV Senior Secondary School</td>
                            <td>2016-2018</td>
                            <td>Higher Secondary Education</td>
                            <td>95.4 %</td>
                            </tr>
                            <tr>
                            <td>Bhavans Rajaji Vidyashram</td>
                            <td>2004-2016</td>
                            <td>Secondary Education</td>
                            <td>CGPA: 10 / 10</td>
                            </tr>
                            </table>
                            </div>
                        </div>

                        <div className="banner-text2">
                        <h1>Contact</h1>
                            <hr/>
                            <div className="contact-icons">
                            <table className="contact">
                                <tr>
                                    <td><i className="fa fa-phone-square" aria-hidden="true" /></td>
                                    <td className="pad">(+91) 9790943558</td>
                                </tr>
                                <tr>
                                <td><i className="fa fa-envelope" aria-hidden="true" /></td>
                                    <td className="pad">siddharthmani2000@gmail.com</td>
                                </tr>
                            </table>

                            </div>

                        </div>

                        </div>




        
        )

    }
}

export default About;