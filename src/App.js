import React, { Component } from 'react';
import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Subject:{title:'WEB', sub:'World Wide Web'}
    
    }
  }

  render(){
    return (
      <div className="App">
        <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}>
        </Subject>
        <Toc></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  } 
}

export default App;
