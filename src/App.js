import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
// import Main from './components/'

class App extends Component {
  render() {
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
