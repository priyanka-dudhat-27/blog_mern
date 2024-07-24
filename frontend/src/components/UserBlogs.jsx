/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const UserBlogs = () => {
  const id=localStorage.getItem('userId')
  const [blogs,setBlogs]=useState([])

  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost:8001/api/v1/blog/getByUserId/${id}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    }).catch((err)=>console.log(err))
    const data=await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data))
  },[])

  return (
    <div>
       {blogs && blogs.map((blog, index) => (
        <Blog key={index} {...blog} />
      ))}
    </div>
  )
}

export default UserBlogs