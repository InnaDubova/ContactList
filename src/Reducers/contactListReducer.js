const initialState = {
    List: [],
    currentList: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                List:action.payload,
                currentList:action.payload
            }
        case "ADD_NEW_CONTACT":
            return {
                List:action.payload,
                currentList:action.payload
            }
        case "DELETE_CONTACT":
            return {
                List:action.payload,
                currentList:action.payload
            }
        default:
            return state;
    }
}

export default ContactListReducer; 