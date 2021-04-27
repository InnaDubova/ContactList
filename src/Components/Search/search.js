import React, {Fragment} from "react";
import {connect} from "react-redux";
import {searchContact} from "../../Actions/contactListActions"
import "../Search/search.css";

const Search = ({searchContact}) => {
  const onSearch = (event) => {
    searchContact(event.target.value)
  }
    return(
      <Fragment>
          <div className="input-group">
            <input onChange={onSearch} type="search" className="form-control" placeholder="Search" name="search"/>
          </div>
        </Fragment>    
      )
}


const mapDispatchToProps = {
  searchContact
}

export default connect(null,mapDispatchToProps) (Search);