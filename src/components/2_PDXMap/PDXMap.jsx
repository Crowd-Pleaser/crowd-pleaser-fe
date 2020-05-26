import React, { useEffect } from 'react';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import { pdxAnchor } from '../../services/map-utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurants } from '../../actions/restaurantActions';
import { selectAllRestaurants } from '../../selectors/restaurantSelectors';
import { toast } from 'react-toastify';

export default function PDXMap() { 

  const dispatch = useDispatch();
  const restaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  return (
    <div>
      <div style={{ height: '60vh', width: '50%' }}>
        <button onClick={() => toast.error('⚠️ NOOOOO!!!!')}>HELLO</button>
        <Map center={pdxAnchor.center} zoom={pdxAnchor.zoom} markers={restaurants}/>
        <Link to={'/portland/NW'}>NW</Link>
      </div> 
    </div>
  );
}
