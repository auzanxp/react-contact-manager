import { Link } from 'react-router-dom';
import Api from './api/contact-api';

const ContactList = ({contacts, title, onDelete}) => {

    const handleDeleteContact = (id) => {
        Api.delete('/contacts/' + id).then(() => {
            onDelete();
        });
    }


    return ( 
        <div className="contact-list">
             <h3>{title}</h3>
            {contacts.map((contact) => (
                <div className="contact" key={contact.id}>
                    <div className="contact-info">
                        <p className="contact-name">{contact.name}</p>
                        <p>{contact.number}</p>
                    </div>
                    <div className="contact-actions">
                        <Link to={'/edit/' + contact.id}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteContact(contact.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ContactList;