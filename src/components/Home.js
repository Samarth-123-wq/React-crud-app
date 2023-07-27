import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Home() {
    const [data,setdata] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3333/users').then(res=>setdata(res.data)).catch(err => console.log(err))
    },[])

    const handleDelete = (id)=>{
        const confirm = window.confirm('confirm Delete');
        if(confirm){
    axios.delete(`http://localhost:3333/users/${id}`).then(res=>{
        console.log(res)
        window.location.reload();
    }).catch(err=>{
        console.log(err)
    })}
    }
  return (
    <div className='flex-column d-flex justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div>
            <Link to={'/create'} className= "btn btn-success">Add</Link>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d,i)=>{
                      return(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>
                            <Link to={`/read/${d.id}`} className='btn btn-sm info me-2'>Read</Link>
                                <Link to={`/update/${d.id}`} className='btn btn-sm primary me-2'>Edit</Link>
                                <button onClick={e=>handleDelete(d.id)} className='btn btn-sm danger'>Delete</button>
                            </td>
                        </tr>
                      )
                    }
                    )
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}


export default Home
