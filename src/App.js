import './App.css';
import Home from './Components/Home';
import GetOnApi from './Services/Getonapi'
import NavBar1 from './Components/NavBar';
import PageTwo from './Components/Pagetwo/index'
import React from 'react'
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {};
    this.hasData= false;
  }
  
  componentDidMount(props) {
    GetOnApi.getGameList().then((fulfilled) => { 
      const gameList = fulfilled.data
      this.setState({gameList})
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
        <Route exact path="/" render={(routeProps)=>  <Home {... routeProps} gameList= {this.state.gameList}/> } />
      </Switch>
      {/* <PageTwo gameList={this.state.gameList}/> */}
      </div>
      )
    }
  }
};

export default App;
