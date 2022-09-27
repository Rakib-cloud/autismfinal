import React, { useEffect, useState } from 'react';
import Coursedetails from './Coursedetails';
const Course = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch(`https://autism60089s.herokuapp.com/course`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, []);
    console.log(courses);
    return (
<div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Courses </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    courses?.map(tool => <Coursedetails
                        key={tool._id}
                        tool={tool}

                    ></Coursedetails>)
                }
            </div>

        </div>

    );
};

export default Course;
