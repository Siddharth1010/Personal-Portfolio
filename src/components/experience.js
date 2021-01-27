import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import ongilpdf from './documents/ongil.pdf';
import verginpdf from './documents/verginlor.pdf';
class Experience extends Component{
    constructor(props) {
        super(props);
        this.state={activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <div className="projects-grid1">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/592/1*BnfYRbZr6LRxPBHMzlY4Yg.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>MITACS Globalink Research Intern (GRI) Scholarship - University of Alberta, Canada:</strong> Applying Machine Learning to the Mining Discipline.
                <br></br>
                <br></br>
                <strong>Supervisor: </strong> Dr. Wei Liu
                <br></br>
                <br></br>
                <strong>Duration: </strong> June - September 2021.
                </CardText>
                <CardActions border>
                <a href="https://www.mitacs.ca/en/programs/globalink/globalink-research-internship" target="_blank" rel="noopener noreferrer">
                <Button colored>WebSite</Button></a>
                <Button colored>Certificate</Button>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C510BAQE6lIEaxqXv7Q/company-logo_200_200/0/1519865656023?e=2159024400&v=beta&t=tvRa08OpmHXRHEKCJZ2UIahRoHs2oxe9VqC1GqmwYqU) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Ongil Pvt Ltd - Data Science / Web Developer Intern: </strong>Worked on Web Scraping and report generation using Python, Excel and an interactive world map using Javascript and D3.
                <br></br>
                <br></br>
                <strong>Supervisor: </strong> Srikanth Gopalakrishnan
                <br></br>
                <br></br>
                <strong>Duration: </strong> March - May 2020.
                </CardText>
                <CardActions border>
                <a href="https://ongil.io/" target="_blank" rel="noopener noreferrer">
                <Button colored>WebSite</Button></a>
                <a href={ongilpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>Certificate</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://img.collegedekhocdn.com/media/img/institute/logo/VIT_Chennai_logo.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>VIT University - Research Intern:</strong> Worked under professors below and published research papers pertaining to the domains of Time Series Forecasting, Deep Learning and Machine Learning.
                <br></br>
                <br></br>
                <strong>Supervisor: </strong> Dr. Vergin M
                <br></br>
                <br></br>
                <strong>Duration: </strong> 2018 - Present.
                </CardText>
                <CardActions border>
                <a href="https://chennai.vit.ac.in/" target="_blank" rel="noopener noreferrer">
                <Button colored>WebSite</Button></a>
                <a href={verginpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>Certificate</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                </div>

                </div>
                )
            }

            else if(this.state.activeTab === 1){
                return <ImageSlider slides={SliderData}/>;
            }
        }
    
    render(){
        return(
            <div className="category-tabs2">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="tab1">Internships</Tab>
                    <Tab className="tab2">Hackathons</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )

    }
}

export default Experience;