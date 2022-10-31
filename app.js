/* Components and props */
// First way to create a React Component
function WelcomeFunc({name,children}) {
  return <React.Fragment>
      <h1>Bonjour {name}</h1>
      <h2>{children}</h2>
    </React.Fragment>
}

// second way to create a React Component
class Welcome extends React.Component {

  render (){
    return <React.Fragment>
    <h1>Bonjour {this.props.name}</h1>
    <h2>{this.props.children}</h2>
  </React.Fragment>
  }
}

// here we can combine component
function Home(){
    return <div>
      <Welcome name="Ntet">Bonjour les amis!</Welcome>
      <Welcome name="Igor"></Welcome>
    </div>
}


ReactDOM.render(<Home/>,document.getElementById('app'));