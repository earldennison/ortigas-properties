import React from 'react';
import Banner from '../components/listing_list/Banner';
import PropertyListDetails from '../components/listing_list/PropertyListDetails';
import PropertyListDisplay from '../components/listing_list/PropertyListDisplay.js';

const ListingList = ({ pre_title, title, description, banner, dataList }) => {
  return (
    <>
      <Banner banner_dir={banner} />
      <PropertyListDetails
        pre_title={pre_title}
        title={title}
        description={description}
      />
      <PropertyListDisplay list={dataList} />
    </>
  );
};

export default ListingList;
