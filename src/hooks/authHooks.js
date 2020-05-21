import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup, login } from '../actions/authActions';
import { getAuthError, getAuthLoading, getAuthUser } from '../selectors/authSelectors';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);
  const user = useSelector(getAuthUser);

  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');

  useEffect(() => {
    if(user) history.push('/');
  }, [user]);

  const handleChange = ({ target }) => {
    if(target.name === 'firstName') setFirstName(target.value);
    if(target.name === 'lastName') setLastName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'role') setRole(target.value);
  }

  const handleSignUp = event => {
    event.preventDefault();
    dispatch(signup(firstName, lastName, email, password, role))
  };

  return {
    error,
    loading,
    firstName,
    lastName,
    email,
    password,
    role,
    handleChange,
    handleSignUp
  };
};

export const useLogIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const loading = useSelector(getAuthLoading);
  const user = useSelector(getAuthUser);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(user) history.push('/');
  }, [user]);

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  }

  const handleLogIn = event => {
    event.preventDefault();
    dispatch(login(email, password))
  };

  return {
    error,
    loading,
    email,
    password,
    handleChange,
    handleLogIn
  };
};

export const useCurrentUser = () => {
  const user = useSelector(getAuthUser);

  useEffect(() => {
    if(!user) {
      
    }
  }, [user]);

  return user
}