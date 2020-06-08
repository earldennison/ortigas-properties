import React from 'react';
import { Route } from 'react-router-dom';
import propertyData, { pages } from './data/propertyData';
import ListingList from './pages/ListingList';

const ListingListRoutes = ({ path }) => (
  <>
    {pages.map(
      ({ path: routePath, pre_title, title, description, banner }, i) => {
        const dataList = propertyData.filter(({ name, estate, type }) => {
          switch (routePath) {
            case `/residences`:
              return type === 'Residential';
            case `/offices`:
              return type === 'Office';
            case `/ortigas-east`:
              return estate === 'Ortigas East';
            case `/ortigas-center`:
              return estate === 'Ortigas Center';
            case `/circulo-verde`:
              return estate === 'Circulo Verde';
            case `/greenhills-center`:
              return estate === 'Greenhills Center';
            case `/capitol-commons`:
              return estate === 'Capitol Commons';
            case `/greenhills-center`:
              return estate === 'Greenhills Center';
          }
        });
        return (
          <Route
            key={i}
            path={`${path}${routePath}`}
            component={(props) => (
              <ListingList
                {...props}
                pre_title={pre_title}
                title={title}
                description={description}
                banner={banner}
                dataList={dataList}
              />
            )}
          />
        );
      }
    )}
  </>
);

export default ListingListRoutes;
