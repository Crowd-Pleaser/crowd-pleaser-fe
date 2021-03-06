import React from 'react';
import { useLogIn } from '../../../hooks/authHooks';
import styles from '../../../assets/Styling.css';

export default function LogIn() {
  const {
    loading,
    email,
    password,
    handleChange,
    handleLogIn
  } = useLogIn();

  return (
    <div className={styles.Form}>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <input 
          type="text" 
          value={email} 
          name="email" 
          onChange={handleChange} 
          placeholder="Email address" 
        />
        <input 
          type="password" 
          value={password} 
          name="password" 
          onChange={handleChange} 
          placeholder="Password" 
        />
        <button disabled={loading}>Log In</button>
      </form>
    </div>
  );
}
