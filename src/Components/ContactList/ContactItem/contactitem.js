import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "../ContactItem/contactItem.css";

import {deleteContact} from "../../../Actions/contactListActions";
import { saveData } from "../../../Services/api-services";

    class ContactItem extends React.Component {

        // state = {
        //     "Avatar": this.props.Avatar,
        //     "Name": this.props.Name,
        //     "Created": this.props.Created,
        //     "Role": this.props.Role,
        //     "Status": this.props.Status,
        //     "Email": this.props.Email,
        //     "Gender": this.props.Gender
        // }

        // onStatusChange = () => {
        //     if (this.state.Status === "Inactive") {
        //         this.setState({
        //             "Status": "Active"
        //         })
        //     }
        //     else if (this.state.Status === "Active") {
        //         this.setState({
        //             "Status": "Pending"
        //         })
        //     }
        //     else if (this.state.Status === "Pending") {
        //         this.setState({
        //             "Status": "Banned"
        //         })
        //     }
        //     else {
        //         this.setState({
        //             "Status": "Inactive"
        //         })
        //     }
        // }

onDelete = () =>{
    const {List} = this.props;
    const index = List.findIndex((elem) => elem.Id === this.props.Id);
    const partOne = List.slice(0,index);
    const partTwo = List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    const {deleteContact} = this.props;
    saveData(newList).then(() => {
        deleteContact(newList);
    })
}

        render(){ 
            const { onStatusChange, onDelete,onEdit } = this.props;
            const { Avatar, Name, Created, Role, Status, Email, Gender} = this.props;
            const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
            
            let statusStyle = "badge bg-secondary status";
            // if(Status === "Active") {
            //     statusStyle = "badge bg-success";
            // }s
            // else if(Status === "Banned") {
            //     statusStyle = "badge bg-danger";
            // }
            // else if(Status === "Pending") {
            //     statusStyle = "badge bg-warning";
            // }

            switch(Status) {
                case 'Active': statusStyle = "badge bg-success status";break;
                case 'Banned': statusStyle = "badge bg-danger status";break;
                case 'Pending': statusStyle = "badge bg-warning status";break;
                case 'Inactive': statusStyle = "badge bg-secondary status ";break;
            }
            
            return(
            <tr>
                <td>
                    <img src={URL} alt="" />
                    <a href="#" className="user-link">{Name}</a>
                    <span className="user-subhead">{Role}</span>
                </td>
                <td>
                   {Created}
                </td>
                <td className="text-center">
                    <span className={statusStyle} onClick={onStatusChange}>{Status}</span>
                </td>
                <td>
                    <a href="#">{Email}</a>
                </td>
                <td>
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <Link to="/editContact" onClick={onEdit} className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
                    <a href="#" className="table-link danger">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={this.onDelete}></i>
                        </span>
                    </a>
                </td>
            </tr>
            )
        }
}

const mapStateToProps = ({ContactListReducer}) => {
    const {List} = ContactListReducer;
    return{List}
}
const mapDispatchToProps = {
    deleteContact
}

export default connect(mapStateToProps,mapDispatchToProps) (ContactItem);