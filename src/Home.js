import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Api from './api/contact-api';

const Home = () => {
    const [contacts, setContacts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchContact = () => {
        Api.get('/contacts')
            .then(res => {
                setContacts(res.data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchContact();
    }, []);

    return ( 
        <div className="home">
            {loading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
          {contacts && <ContactList contacts={contacts} title="All Contacts" onDelete={fetchContact} />}
        </div>
     );
}
 
export default Home;