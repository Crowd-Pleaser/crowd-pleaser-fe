import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from './authHooks';
import { getUserOrders, getUpcomingUserOrders, getPreviousUserOrders, getUserFavorites } from '../selectors/userProfileSelectors';
import { setUserOrders, setUserFavorites } from '../actions/userProfileActions';
import { useEffect } from 'react';

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const allOrders = useSelector(getUserOrders);
  const upcomingOrders = useSelector(getUpcomingUserOrders);
  const previousOrders = useSelector(getPreviousUserOrders);
  const favorites = useSelector(getUserFavorites);

  useEffect(() => {
    if(user) dispatch(setUserOrders(user._id));
    if(user) dispatch(setUserFavorites());
  }, [user]);

  return {
    user,
    allOrders,
    upcomingOrders,
    previousOrders,
    favorites
  };
};
