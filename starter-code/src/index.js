import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      <div className="main">
      <Card src="/images/icon1.png" title="Declarative"> 
      React makes it painless to create interactive UIs
      </Card>
      <Card src="images/icon2.png" title="Components">
       Build encaspulated conponents that manage their state
     </Card>
      <Card src="images/icon3.png" title="Single Way">
       Build encaspulated conponents that manage their state
     </Card>
      <Card src="images/icon4.png" title="JSX" >
      Statically-typed, designed to run on morder browsers
      </Card>
      </div>
      </div>
    );
  }
}

class Header extends React.Component{
render(){
  return(
    <div className="header">
      <div className="images">
      <img src="ironhack-logo.svg" alt="logo"/>
      <img src="menu-top.svg" alt="logo"/>
      </div>
     <div className="greeting">
       <h1>Say Hello To ReactJs</h1>
       <h3>You will learn a Fronend <br/> framework form scratch,  to  <br/> become a Ninka Developer</h3>
       <button>Awesome</button>
     </div>
    </div>
  )
}
}

class Card extends React.Component {
render(){
  return(
    <div class="content">
     <img src={this.props.src} alt=""/>
     <div className="text">
     <h3>{this.props.title} </h3>
     <p>{this.props.children}</p>
     </div>
    </div>
  )
}

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);