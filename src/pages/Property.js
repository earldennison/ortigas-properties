import React,{ useEffect,useContext } from 'react'
import ContentProperty from '../components/ContentProperty' 
import PagesContext from '../context/pages/pagesContext'

const Property =  ({match:{params}})=>  {
    const { getProperty,property } = useContext(PagesContext)
    useEffect(()=>getProperty(params.slug),[ ])
    const { name,
            estate,
            type,
            caption,
            amenities,
            update_status
          } = property
    return (
        <div>
          <ContentProperty
            title={name}
            estate={estate}
            type={type}
          >
          <p > {caption}</p>
          </ContentProperty>
        </div>
    )
}
export default Property 
