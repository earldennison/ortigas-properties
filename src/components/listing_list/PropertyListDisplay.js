import React from 'react';
import '../../assets/css/property-list.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Canvas = styled.canvas`
  background-image: url(${({ img }) => img});
`;

const SinglePropertyDisplay = ({
  id,
  name,
  estate,
  type,
  caption,
  amenities,
  image_dir,
  update_status,
  slug,
}) => {
  const image = image_dir ? image_dir[0] : undefined;
  return (
    <div className='col-md-4 col-12 p-md-4 py-5 fp'>
      <Link
        className='dbl-tap-mob'
        to={{
          pathname: `/properties/${slug}`,
          state: {
            id,
            name,
            estate,
            caption,
            amenities,
            image_dir,
            update_status,
          },
        }}>
        <div className='fp-img' style={{ maxHeight: '400px' }}>
          <Canvas height='497px' width='708px' img={image} />
        </div>
        <div className='fp-details'>
          <div className='fp-details-wrapper'>
            <div className='fp-details-inside'>
              <div className='fp-address'>{name}</div>
            </div>
            <div className='fp-ammenities'>
              {type}
              <span>|</span> {estate}
            </div>
          </div>
          <div className='fp-btn btn-a'>
            <span>View More Details</span>
          </div>
        </div>
        <div className='fp-statuses'>
          <div className='fp-statuses-holder'>
            <div className='fp-statuses-btn-holder'>
              <div className='fp-statuses-btn'>
                {(() => {
                  switch (update_status) {
                    case 1:
                      return 'Ground Breaking';
                    case 2:
                      return 'Pre Selling';
                    case 3:
                      return 'Turn Over';
                    default:
                      return 'active';
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const PropertyListDisplay = ({ list }) => {
  return (
    <div className='ip-prop-section ip-prop-section-2'>
      <div className='row justify-content-md-center ip-prop-list'>
        {list.map(
          ({
            id,
            name,
            estate,
            type,
            caption,
            amenities,
            image_dir,
            update_status,
            slug,
          }) => (
            <SinglePropertyDisplay
              key={id}
              id={id}
              name={name}
              estate={estate}
              type={type}
              caption={caption}
              amenities={amenities}
              image_dir={image_dir}
              update_status={update_status}
              slug={slug}
            />
          )
        )}
      </div>
    </div>
  );
};
export default PropertyListDisplay;
