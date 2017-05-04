import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SearchRoute from '../src/components/SearchRoute/SearchRoute';

storiesOf('SearchRoute', module)
  .add('Default searchRoute', () => (
    <SearchRoute
      from="From"
      to="To"
      routes={[]}
      errors={{}}
      routeInfo={{}}
      actions={{
        setFormField: action('Set form filed'),
        findUserAddress: action('Find user Location'),
        searchRoute: action('Search routes'),
        formSubmitFailed: action('Form submit failed'),
        getRouteInfo: action('Get route info'),
        clearRouteInfo: action('Clear route info'),
        getRouteGeoData: action('Get route geo data'),
      }}
    />
  ))
  .add('with errors', () => (
    <SearchRoute
      from="From"
      to=""
      routes={[]}
      errors={{
        from: ['From must be at least 8 characters'],
        to: ['Can not be blank'],
      }}
      routeInfo={{}}
      actions={{
        setFormField: action('Set form filed'),
        findUserAddress: action('Find user Location'),
        searchRoute: action('Search routes'),
        formSubmitFailed: action('Form submit failed'),
        getRouteInfo: action('Get route info'),
        clearRouteInfo: action('Clear route info'),
        getRouteGeoData: action('Get route geo data'),
      }}
    />
  ));
