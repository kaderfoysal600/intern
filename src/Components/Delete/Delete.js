import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Delete = () => {
    const [users, setUsers] = useContext(UserContext)
    const { name } = useParams()
    
    const deleteUser = (id) =>{
        const user = users.filter(user => user.name != name)
        setUsers(user)
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Link to = '/'>
                <Modal.Footer>
                    <Button variant="secondary">Cancel</Button>
                    <Button onClick = {() => deleteUser(name)} variant="primary">Delete</Button>
                </Modal.Footer>
                </Link>
            </Modal.Dialog>
           
        </div>
    );
};

export default Delete;