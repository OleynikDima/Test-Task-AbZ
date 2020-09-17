import React from 'react';


const ListUsers = ({users}) => {
    return (
        <ul className="list_users__list">
         {
         users.map(user => (<li key={user.id} className="list_users__item">
         <img className="list_users__images" src={user.photo} wifth='70'/> 
            <p alt={user.name} className="list_users__name"> {user.name}</p>
            <p className="list_users__position"> {user.position}</p>
            <p className="list_users__email"> {user.email}</p>
            <p className="list_users__phone"> {user.phone}</p> 
        </li>)
        )}
     </ul>
        
    )
}

export default ListUsers;