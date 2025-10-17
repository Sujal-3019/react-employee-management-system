import React from 'react';
import Header from '../other/Header';
import TaskNumber from '../other/TaskNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data }) => {
    return (
        <div className='p-5 bg-gray-900 h-screen'>
            <Header data={data} />
            <TaskNumber data={data} />
            <TaskList data={data} />
        </div>
    )
}
export default EmployeeDashboard