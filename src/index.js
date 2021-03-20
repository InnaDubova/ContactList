import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import "./index.css";

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {v4 as uuidv4 } from 'uuid';


import Header from "./Components/Header/header";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";
import AddContact from "./Components/AddContact/addContact";

class App extends Component {

state = {
  List:[
    {
      "Id": uuidv4(),
      "Avatar": "76",
      "Name": "Mila Kunis",
      "Created": "2013/08/08",
      "Role": "Admin",
      "Status": "Inactive",
      "Email": "mila@kunis.com",
      "Gender": "women"
    },
    {
      "Id": uuidv4(),
      "Avatar": "41",
      "Name": "George Clooney",
      "Created": " 2013/08/12",
      "Role": "User",
      "Status": "Active",
      "Email": "george@clooney.com",
      "Gender": "men"
    },
    {
      "Id": uuidv4(),
      "Avatar": "43",
      "Name": "Ryan Gossling",
      "Created": " 2004/01/24",
      "Role": "Moderator",
      "Status": "Pending",
      "Email": "ryan@gossling.com",
      "Gender": "men"
    },
    {
      "Id": uuidv4(),
      "Avatar": "20",
      "Name": "Emma Watson",
      "Created": " 2004/01/24",
      "Role": "User",
      "Status": "Banned",
      "Email": "emma@watcom.com",
      "Gender": "women"
    }
  ]
}

onDelete = (Id) =>{
  const index = this.state.List.findIndex((elem) => elem.Id === Id);
  const partOne = this.state.List.slice(0,index);
  const partTwo = this.state.List.slice(index + 1);
  const newList = [...partOne, ...partTwo];
  this.setState(() => {
    return {
      List: newList,
    };
  });
}

onStatusChange = (Id) => {
  const index = this.state.List.findIndex((elem) => elem.Id === Id);   
  let newList = this.state.List.slice();

  if(newList[index].Status === "Inactive") {
    newList[index].Status = "Active"
  }
  else if(newList[index].Status === "Active") {
    newList[index].Status = "Pending"
  }
  else if(newList[index].Status === "Pending") {
    newList[index].Status = "Banned"
  }
  else {
    newList[index].Status = "Inactive"
  }
  this.setState(() => {
    return{
      List: newList
    }
  })

}

render(){
  const { List } = this.state;
  return(
    <Fragment>
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact render={() =>
            <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />} />
            <Route path="/add-contact" exact render={() => <AddContact />} />
          </Switch>
          <Footer />
        </Router>
    </Fragment>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"));