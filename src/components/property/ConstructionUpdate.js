import React, { useContext } from 'react';
import '../../assets/css/construction-update.css';
import PagesContext from '../../context/pages/pagesContext.js';
const ConstructionUpdate = ({ update_status }) => {
  console.log(update_status);
  return (
    <div className='construction_update'>
      <div className='property_construction_update'>
        <div className='all_stages'></div>
        <div className='current_stage_value' style={{ width: '100%' }}></div>
      </div>

      <div className='row year'>
        <div className='col-sm-4 ground'>
          <div
            className={`construction_stages ${
              update_status === 1 ? 'construction_update-active' : ''
            }`}>
            <img
              alt='img'
              src='https://assets.ortigas.com.ph/data/images/ground.png'
            />
            <p></p>
            <label>Ground Breaking</label>
          </div>
        </div>
        <div className='col-sm-4 presell'>
          <div
            className={`construction_stages ${
              update_status === 2 ? 'construction_update-active' : ''
            }`}>
            <center>
              <img
                className=''
                alt='img'
                src='https://assets.ortigas.com.ph/data/images/presell.png'
              />
            </center>
            <center>
              <p></p>
            </center>
            <center>
              <label>Preselling</label>
            </center>
          </div>
        </div>
        <div className='col-sm-4 turnover'>
          <div
            className={`construction_stages ${
              update_status === 3 ? 'construction_update-active' : ''
            }`}>
            <img
              alt='img'
              className=''
              src='https://assets.ortigas.com.ph/data/images/turnover.png'
            />
            <p></p>
            <label>Turnover</label>
          </div>
        </div>
      </div>
      <div className='button_progress hide'>
        <a href='!#'>VIEW PROGRESS</a>
      </div>
    </div>
  );
};

export default ConstructionUpdate;
