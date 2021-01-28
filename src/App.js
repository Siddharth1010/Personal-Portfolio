import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import Main from './components/'

class App extends Component {
  render() {

    // const setActiveLink = e => {

    //   const links = document.getElementsByTagName("Link"); 

    //   console.log(links);
  
    //   // Array.from(links).forEach(el => el.classList.add("inactive"));
    //   for(var i=0;i<links.length;i++){
    //     links[i].classList.remove("active");
    //     links[i].classList.add("inactive");
    //   }
    //   e.target.classList.remove("inactive");
    //   e.target.classList.add("active");
    // };

    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Welcome">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/extras">Extras</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Siddharth Nair">
            <Navigation>
            <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/extras">Extras</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    )
  }
}

export default App;
