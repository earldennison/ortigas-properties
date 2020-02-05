import React, { useReducer,useContext } from 'react'
import pagesData from '../../data/pagesData'
import propertiesData from '../../data/propertyData'
import PagesContext from './pagesContext'
import pagesReducer from './pagesReducer'
import { GET_PAGE_LIST, GET_PROPERTY_LIST,GET_SINGLE_PROPERTY } from '../actions'

const PagesState = props => {

    const initialState = {
        page:{},
        properties:[],
        property:{}
    }


    const pageLoader = (type)=> {
        switch(type){
        case "estates": return pagesData.estates
        case "offices": return pagesData.offices
        case "residences": return pagesData.residences
        }
    }

    const [state,dispatch] = useReducer(pagesReducer, initialState)

    const getProperties = () =>  dispatch({
        type: GET_PROPERTY_LIST,
        payload: propertiesData
    })
    const getProperty = url => {
        propertiesData.map((property) => {
            console.log(property.slug,url)
            if (url === property.slug){
                dispatch({
                    type:GET_SINGLE_PROPERTY,
                    payload:property
                })
            }
        })
    }

    return <PagesContext.Provider
    value={{
        property:state.property,
        properties:state.properties,
        page:state.page,
        getProperties,
        getProperty,
    }}
        >
        {props.children}
        </PagesContext.Provider>
}
export default PagesState
