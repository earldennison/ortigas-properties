import React,{ useEffect,useContext } from 'react'
import ContentProperty from '../components/ContentProperty' 
import PagesContext from '../context/pages/pagesContext'
import useWindowDimensions  from '../components/utilities/useWindowDimensions'
import PropertyCarousel from '../components/property/PropertyCarousel.js'

const Property =  ({match:{params}})=>  {
    const { getProperty,property } = useContext(PagesContext)
    useEffect(()=>getProperty(params.slug),[ ])
    const { name, estate, type, caption, amenities, update_status, image_dir} = property
    const {width, height} =useWindowDimensions()
    let dimensions = {
        width:width,
        height:height-100,
    }
    return (
        <div>
          <PropertyCarousel
            images={image_dir}
            dimensions={dimensions}
            name={name}
            slug={params.slug}
          />
          <ContentProperty
            title={name}
            estate={estate}
            type={type}
            update_status={update_status}
          >

          <p > {caption}</p>
          </ContentProperty>
        </div>
    )
}
export default Property 
