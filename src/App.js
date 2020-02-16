import React, { Component } from 'react';
import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      Subject:{title:'WEB', sub:'World Wide Web'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      Content:[
        {id:1, title:"html", dec:"HTML is HyperText Markup Language"},
        {id:2, title:"CSS", dec:"CSS is Cascading Style Sheet"},
        {id:1, title:"Javascript", dec:"Javascript will be my saver."}
      ]
    }
  }

  render(){
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.Content[0].title;
      _desc = this.state.Content[0].dec;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.Subject.title} 
        sub={this.state.Subject.sub}>
        </Subject> */}
        <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              //this.state.mode = 'welcome';
              this.setState({
                mode:'welcome'
              })
            }.bind(this)}>{this.state.Subject.title}</a></h1>
            {this.state.Subject.sub}
        </header>
        <Toc
        data={this.state.Content}
        ></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  } 
}

export default App;
