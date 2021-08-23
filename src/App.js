import './App.css';
import Home from './Components/Home';
import './App.css';
import GetOnApi from './Services/Getonapi'
import NavBar1 from './Components/NavBar';
import PageTwo from './Components/Pagetwo/index'
import React from 'react'


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
      <Home gameList={this.state.gameList}/>
      {/* <PageTwo gameList={this.state.gameList}/> */}
      </div>
      )
    }
  }
};

export default App;