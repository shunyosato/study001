import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {theTitle: 'hoge'};
  // }
  //
  // changeTitleInterface(title) {
  //   this.setState({theTitle: title})
  // }
  //
  render() {
  //   setTimeout(() => {
  //     this.setState({theTitle: "Welcome Will"});
  //   }, 3000);

    return (
      <div>
        <h1>Layout</h1>

        {this.props.children}

        <Link to="/"> Show Page1/</Link>
        <Link to="page2"> Show Page2/</Link>
        <Link to="page3"> Show Page3</Link>
      </div>
    );
  }
}
