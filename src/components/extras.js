import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import utapdf from './documents/uta.pdf';
import icrtacpdf from './documents/icrtac.pdf';
import stcpdf from './documents/stc.pdf';
import gcloudpdf from './documents/gcloud.pdf';
import mlpdf from './documents/ml.pdf';
class Extras extends Component{
    
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
                    <CardTitle className="temp1" style={{color: '#fff', height: '176px'}} ></CardTitle>
                <CardText>
                <strong>University Teaching Assistant: Operating Systems</strong> 
                </CardText>
                <CardActions border>
                <a href={utapdf} target="_blank" rel="noopener noreferrer">
                <Button colored>View</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle className="temp2" style={{color: '#fff', height: '176px'}} ></CardTitle>
                <CardText>
                <strong>International Conference on Recent Trends in Advanced Computing, 2020</strong> 
                </CardText>
                <CardActions border>
                <a href={icrtacpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>View</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle className="temp3" style={{color: '#fff', height: '176px'}} ></CardTitle>
                <CardText>
                <strong>Student Coordinator: Faculty development program (Python, Keras, TensorFlow)</strong> 
                </CardText>
                <CardActions border>
                <a href={stcpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>View</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                </div>

                <div className="projects-grid2">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle className="temp4" style={{color: '#fff', height: '176px'}} ></CardTitle>
                <CardText>
                <strong>Google Cloud: Building Scalable Java Microservices with Spring Boot and Cloud</strong> 
                </CardText>
                <CardActions border>
                <a href={gcloudpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>View</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle className="temp5" style={{color: '#fff', height: '176px'}} ></CardTitle>
                <CardText>
                <strong>IBM: Machine Learning with Python</strong> 
                </CardText>
                <CardActions border>
                <a href={mlpdf} target="_blank" rel="noopener noreferrer">
                <Button colored>View</Button></a>
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
            return(

                <div className="yettoadd">
                    <center>
                    <h1>Publications under review. Will be added soon. </h1>
                    </center>
                    
                </div>
            )
        }

    }
    
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="tab1">Certifications</Tab>
                    <Tab className="tab2">Publications</Tab>
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

export default Extras;