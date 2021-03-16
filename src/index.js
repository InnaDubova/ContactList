import React, { Fragment,Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {v4 as uuidv4 } from 'uuid';


import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";

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
    <Header />
    <Search />
    <ContactList List={List} onStatusChange={this.onStatusChange} />
    <Footer />
    </Fragment>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"));