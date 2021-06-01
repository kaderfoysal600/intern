import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Create from '../Create/Create';
import { UserContext } from '../UserContext/UserContext';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useContext(UserContext)

    console.log(setUsers)
    return (
        <div>
          <div className = 'create'>
          <Create/>
          </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                     
                        <th>Name</th>
                        <th>email</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user =>
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                       
                        <td>
                        <Link to = {'/delete/'+ user.name}>
                        <Button className = 'actionBtn' variant="info">Delete</Button>
                        </Link>
                        </td>
                    </tr>
                        )
                   }
                   
                </tbody>
            </Table>
        </div>
    );
};

export default Home;