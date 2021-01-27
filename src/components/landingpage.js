import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import personalimg from './img.JPG';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img
                        src= {personalimg} alt="avatar"
                        className="avatar-img"
                        /> */}
                        <div className="banner-text">
                            <h1>Siddharth Nair</h1>
                            <hr/>
                            <p>Python | Java | Scala | Swift | Flutter | HTML/CSS | JavaScript | PHP | React | NodeJS | SQL</p>
                            <a className="cv-link" href="/Siddharth-CV.pdf" target="_blank" rel="noopener noreferrer" > View Resume</a>
                            <div className="social-links">
                            <a href="https://github.com/Siddharth1010" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square github" aria-hidden="true" />
                                </a>
                                
                                <a href="https://www.linkedin.com/in/siddharth-nair-555961173/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square linkedin" aria-hidden="true" />
                                </a>

                                <a href="https://twitter.com/sidnair07" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter-square twitter" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>

                </Grid>

            </div>
        )

    }
}

export default Landing;