import React from 'react';


const UsersList = (props) => {
    return (
    <ul>
        {props.users.map((user) => (
        <li key={user.id}> {/* make key unique */}
            {user.name} ({user.age} years old)
        </li>
        ))}
    </ul>
    );
};

export default UsersList;