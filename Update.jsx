import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
    const {id} = useParams();
    const users = useSelector((state)=> state.users)
    const existingUser =users.filter(f => f.id == id)

    const user = existingUser.length > 0 ? existingUser[0] : { name: '', email: '' };
  const { name, email } = user;
    //const {name, email} = existingUser[0]
    console.log(existingUser[0])
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email:uemail
        }))
        navigate('/')
    }
  return (
    <div>
        <div>
            <h3>Edit user</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text'name='name' className='form-control' value={uname} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email'name='email' className='form-control' value={uemail} onChange={(e) => setEmail(e.target.value)}/>
                </div><br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update