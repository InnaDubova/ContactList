import React,{ Fragment, useEffect } from "react";
import {connect} from "react-redux";
import {updateDatabase} from "../../Services/api-services";
import {getAllContacts} from "../../Actions/contactListActions";

import "../ContactList/contactList.css";
import ContactItem from "./ContactItem/contactItem";



const ContactList = ({List,currentContact, getAllContacts, currentList}) => {

useEffect(() => {
    updateDatabase().then(data => {
        getAllContacts(data);
    } )
},[])

    // if(currentContact.length === 0) {
    //     const item = List.map(contact => {
    //         return (
    //             <ContactItem key={contact.Id} Id={contact.Id} Avatar={contact.Avatar} Name={contact.Name} 
    //             Created={contact.Created} Role={contact.Role} Status={contact.Status} Gender={contact.Gender} Email={contact.Email} />
    //             //  onStatusChange={() => onStatusChange(contact.Id)}
    //             // onDelete={() => onDelete(contact.Id)}
    //             // onEdit={() => onEdit(contact.Id)} />
    //         )
    //     })
    // }
    
    return(<Fragment>
            <div className="container content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                    <thead>
                                        <tr>
                                            <th><span>User</span></th>
                                            <th><span>Created</span></th>
                                            <th className="text-center"><span>Status</span></th>
                                            <th><span>Email</span></th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {item.length > 0 ? item: <h2 className="mess">Contact list is empty</h2>} */}
                                        {currentContact.length === 0 ? List.map(contact => {
                                            return (
                                                <ContactItem key={contact.Id} {...contact} />
                                            )
                                        }) : currentContact.map(contact => {
                                            return (
                                                <ContactItem key={contact.Id} {...contact} />
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>)
}

const mapStateToProps = ({ContactListReducer}) => {
    const {List,currentContact} = ContactListReducer;
    return{List,currentContact}
}
const mapDispatchToProps = {
    getAllContacts
}
export default connect(mapStateToProps,mapDispatchToProps) (ContactList);