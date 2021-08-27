import './App.css';
import Home from './Components/Home';
import GetOnApi from './Services/Getonapi'
import NavBar1 from './Components/NavBar';
import PageTwo from './Components/Pagetwo/index';
import PageTree from './Components/PageTree/index';
import Footer from './Components/Footer/index';
import React from 'react';
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
    this.hasData= false;
  }
  
  componentDidMount(props) {
    GetOnApi.getGameList().then((fulfilled) => { 
      const gameList = fulfilled.data;
      this.setState({gameList});
      this.hasData= true;
      this.forceUpdate();
    }).catch((err)=> {console.error(err)})
  }

  render () {
    if(!this.hasData){
      return(null)
    } else {
      return (
      <div className="appstyles">
      <NavBar1/>
      <Switch>
        <Route exact path="/" render={(routeProps) =>  <Home {... routeProps} gameList= {this.state.gameList}/> } />
        <Route exact path="/game-list" render={(routeProps) =>  <PageTwo {... routeProps} gameList= {this.state.gameList}/> } />
        <Route exact path="/game-list/description" render={(routeProps) =>  <PageTree {... routeProps} gameList= {this.state.gameList}/> } />
      </Switch>
      <Footer/>
      </div>
      )
    }
  }
};

export default App;
