import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          'https://mern-project1-j9pi.onrender.com/api/blogs/allblogs',
          {
            withCredentials: true,
          }
        );
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
    <div className='flex text-center justify-center my-4'>
    <h1 className='font-bold text-3xl'>All blogs</h1>

    </div>
      {blogs.map((blog) => (
        <div key={blog._id} className="card lg:card-side bg-base-100 shadow-xl shadow-slate-500 my-4 ">
          <figure>
            <img
              src={blog.imageUrl}
              alt={`Image for ${blog.title}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
