
import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import './Create.css'

const Create = () => {
    const [users, setUsers] = useContext(UserContext)
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
   
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { name: name, email:email }])
    }
    return (
        <div>
            <Form className='form' onSubmit={addUser}>
                
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={email}
                        onChange={updateEmail}
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Button className="action_btn" variant="primary" type="submit">
                    Create User
                 </Button>
            </Form>
        </div>
    );
};

export default Create;