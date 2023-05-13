import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextData from '../ContextData';
import NavBar from './Nav';


const StudentTable = () => {
    const DataContext = useContext(ContextData);
    
    return (
    <>
    <NavBar />

    <div className='flex2'>
    <h1>Student Details</h1> 
    <button>Add New Student</button>
    </div>

    <table className='table'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        <tbody>
            {DataContext.entries.map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                        <Link to='editStudent' state={{data:item.id}}>Edit</Link>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>

    </>
  );
};

export default StudentTable;