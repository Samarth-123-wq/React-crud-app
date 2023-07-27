import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
function Update() {
  const {id} = useParams();
  const [values,setvalues] = useState({
    name : '',
    email : '',
    phone : '',
  })
  const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3333/users/${id}`).then(res=>setvalues(res.data)).catch(err => console.log(err))
    },[id])
    const handleUpdate = (e) =>{
             e.preventDefault();
             axios.put(`http://localhost:3333/users/${id}`,values)
        .then(res=> {
          console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
   <h1>Update a User</h1>
   <form onSubmit={handleUpdate}>
    <div className='mb-2'>
    <label htmlFor='name'>Name:</label>
    <input type = 'text' placeholder='Enter Name' name='name' className='form-control' 
    value={values.name}  onChange={(e)=>setvalues({...values,name : e.target.value})}
    />
    </div>
    <div className='mb-2'>
    <label htmlFor='email'>Email:</label>
    <input type = 'email' placeholder='Enter Email' name='email' className='form-control'
    value={values.email}  onChange={(e)=>setvalues({...values,email : e.target.value})}
     />
    </div>
    <div className='mb-3'>
    <label htmlFor='email'>Phone:</label>
    <input type = 'text' placeholder='Enter Phone' name='phone' className='form-control'
    value={values.phone}  onChange={(e)=>setvalues({...values,phone : e.target.value})}
    />
    </div>
    <button className='btn btn-success'>Submit</button>
    <Link to={'/'} className='btn btn-primary ms-3'>Back</Link>
   </form>
     </div>
    </div>
  )
}

export default Update
