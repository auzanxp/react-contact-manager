import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './api/contact-api';

const Create = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            Api.get('/contacts/' + id).then((response) => {
                const { data } = response;
                setName(data.name);
                setNumber(data.number);
            })
        }

    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name, number };

        setLoading(true);
        if (id) {
            updateContact(contact);
        } else {
            createContact(contact);
        }
    }

    const createContact = (contact) => {
        Api.post('/contacts', contact).then(() => {
            setLoading(false);
            navigate(-1);
        });
    }

    const updateContact = (contact) => {
        Api.put('/contacts/' + id, contact).then(() => {
            setLoading(false);
            navigate(-1);
        });
    }

    return (
        <div className="contact-form">
            <h3>{id ? 'Update' : 'Add'} Contact</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label">Contact name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Contact number</label>
                    <input
                        type="number"
                        className="form-control"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Create;