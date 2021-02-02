import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import infosys from './images/infosys.jpg'
class Projects extends Component{
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
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/560/1*56uYVs9StWGN18CbXl7H2w.jpeg) center / cover'}} ></CardTitle>
                <CardText>
                <strong>COVID Smart Assistant:</strong> Deep Face Mask and social distance detection over AWS linked with responsive Amazon Alexa. Initiated through switch interfaced with RaspberryPi (Using Python, OpenCV, Keras, Boto3) 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/Amazon-AWS-ALEXA-Smart-Covid19-Assistant" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://newcodalab.lri.fr/prod-public/logos/vqa_logo_67.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>VQA: </strong>Convolutional Neural Network based Flask application which inputs an image and renders a response to any text question directed at the corresponding image (Using Python, Keras, Flask) 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/Visual-Question-Answering" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554-100739367-large.jpg) center / cover'}} ></CardTitle>
                <CardText>
                <strong>GreenBin: </strong>An IOT based Cloud Application to provide a innovative and feasable solution to promote Swachh Bharat Campaign and create environment awareness to manage waste effectively.(Using Arduino, LoRa, Android)
                </CardText>
                <CardActions border>
                <Button colored>Github</Button>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>

                </div>

                <div className="projects-grid2">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://icon-library.com/images/discussion-forum-icon/discussion-forum-icon-8.jpg) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Eclipse: </strong>A discussion forum for employees to interact with each other and solve problems internal to the company. Including E-mail notifications on response (Using HTML, CSS, JS, PHP, SQL, JQuery) 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/Eclipse-Discussion-Forum" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.verdict.co.uk/wp-content/uploads/2019/09/home-automation-interest.jpg) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Smart Home: </strong>A Voice and SMS controlled home automation using HC05 Bluetooth module interfaced with Node-Red for real time device status display. (Using Arduino, Android, Node-Red, MIT App Inventor) 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/Home-Automation" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Translator: </strong>A two-way translator between English and French using data structures - Trie, Queue, Stack, Linked List. Data is stored in a file which contains English words and their corresponding French words.(Using C++) 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/Bi-Translator" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
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
                <div className="opensource-grid" style={{width: '100%', height: '100%'}}>

                    <center>
                    <img src="https://github-readme-stats.vercel.app/api?username=Siddharth1010&&show_icons=true&title_color=ffffff&icon_color=bb2acf&text_color=daf7dc&bg_color=b00415"></img>
                    </center>

                    <div className="projects-grid2">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.g2crowd.com/uploads/vendor/image/5097/large_detail_1547562128.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Eclipse Open VSX: </strong> Open VSX is a vendor-neutral open-source alternative to the Visual Studio Marketplace. It provides a server application that manages VS Code extensions in a database, and a command-line tool for publishing extensions. 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/openvsx" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.drupal.org/files/Backdrop-Logo-Vertical.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>Backdrop CMS: </strong>Backdrop is a full-featured content management system that allows non-technical users to manage a wide variety of content. It can be used to create all kinds of websites including blogs, image galleries, social networks, intranets, and more. 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/backdrop" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://appinventor.mit.edu/explore/sites/explore.appinventor.mit.edu/files/ai-bee-logo.png) center / cover'}} ></CardTitle>
                <CardText>
                <strong>MIT App Inventor: </strong> MIT App Inventor is an intuitive, visual programming environment that allows everyone to build fully functional apps for smartphones and tablets. Those new to MIT App Inventor can have a simple first app up and running in less than 30 minutes. 
                </CardText>
                <CardActions border>
                <a href="https://github.com/Siddharth1010/appinventor-sources" target="_blank" rel="noopener noreferrer">
                <Button colored>Github</Button></a>
                </CardActions>
                {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu> */}
                </Card>

                    </div>
                </div>
            )
        }

    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="tab1">Individual</Tab>
                    <Tab className="tab2">Open-Source</Tab>
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

export default Projects;