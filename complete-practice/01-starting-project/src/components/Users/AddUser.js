import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModel'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:"invalid name",
            message:"msg1"
        })
        return;
    }

    if(+enteredAge < 1) {
        setError({
            title:"invalid age",
            message:"msg2"
        })
        return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    // lifting the state up

    setEnteredUsername('')
    setEnteredAge('')
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
      setError(null)
  }

  return (
    <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
              <label htmlFor="age">Age (Years)</label>
              <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
              <Button type="submit">Add User</Button>
          </form>
      </Card>
      </div>
  );
};

export default AddUser;
