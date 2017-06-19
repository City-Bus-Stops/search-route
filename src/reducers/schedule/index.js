import { combineReducers } from 'redux';

import buses from './buses';
import busRoutes from './busRoutes';
import routeBusStop from './routeBusStop';

export default combineReducers({
  buses,
  busRoutes,
  routeBusStop,
});
