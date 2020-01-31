import React from 'react'

const TitleLine = (props) => (
    <div className="featprop-container container featprop-label-container">
    <div className="featprop row row">
      <div className="featprop-label-line fp-line col-md-3">
        <span></span>
      </div>
      <div className="featprop-label col-md-6">
        {props.first} <span>{props.second}</span>
      </div>
      <div className="featprop-label-line fp-line col-md-3">
        <span></span>
      </div>
    </div>
    </div>

)
export default TitleLine
