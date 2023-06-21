import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Home(){
    const users = useSelector((state)=> state.users)
    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(deleteUser({id:id}))
    }
    console.log(users);
    return(
        <div className='container'>
            <h2> app</h2>
            <Link to='/create' className='btn btn-success my-3'>create</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'> Edit</Link>
                                <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Home