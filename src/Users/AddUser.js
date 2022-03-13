import React, {useState} from 'react'
import Card from '../UI/Card';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(''); 

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) { //ENTEREDAGE IS STRING, NOT INTEGER (TO BE SECURE, ADD '+' SO NEGATIVE NUMBER DOES NOT GO THROUGH THE VALIDATION)
            return;
        }
        console.log(enteredUsername, enteredAge)
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    return (
    <Card>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
    </form>
    </Card>
    )
};

export default AddUser;