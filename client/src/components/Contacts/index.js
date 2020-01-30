import React, {useState, useEffect} from 'react';

import SingleContact from '../SingleContact';
// import AddContacts from '../AddContacts';


export default function Contacts(props){
    const [contacts, setContacts] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:8080/api/contacts')
            .then((res)=> {
                return res.json();
            })
            .then((people)=> {
                console.log(people);
                setContacts(people);
            })
            .catch((err)=> {
                console.log('err!');
                console.log(err);
            })
    }, []);

    return(
        contacts.map((person, idx)=> {
            return (
                <SingleContact key={idx} firstName={person.firstName} lastName={person.lastName} email={person.email}/>
            )
        })
    )
}