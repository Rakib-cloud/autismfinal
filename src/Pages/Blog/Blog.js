import React from 'react';
import { blog } from "../../dummydata"
import Blogdetails from './Blogdetails';

const Blog = () => {
    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Recent Post </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blog?.map(tool => <Blogdetails  key={tool._id}
                        tool={tool}></Blogdetails>)
                }
            </div>

        </div>
    );
};

export default Blog;
