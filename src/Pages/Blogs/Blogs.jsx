import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Share/Loader';

const Blogs = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            });
    }, [setLoading]);
    if(loading){
        return <Loader/>
    }

    return (
        <div className='md:m-20 m-5 grid md:grid-cols-2 md:gap-10'>
                {
                    blogs.map(blog=> <div key={blog._id} className='md:p-8 p-4 bg-gradient-to-r from-[#eeaeca] to-[#94bbe9]'>
                        <h2 className='text-2xl  my-5'>{blog?.question}</h2>
                        <p className='text-slate-500'>{blog.answer.slice(0,300)}</p>
                    </div>)
                }
        </div>
    );
};

export default Blogs;