import { GET_PAGE_LIST, GET_PROPERTY_LIST,GET_SINGLE_PROPERTY } from '../actions'

export default ( state, action) => {
    switch(action.type){
    case GET_PROPERTY_LIST:
        return {
            ...state,
            properties: action.payload,


        }

    case GET_SINGLE_PROPERTY:
        return {
            ...state,

            property: action.payload,
        }
    default: return state
    }
}
