import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const { refreshEmployees } = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        // Get employees from localStorage
        const employees = JSON.parse(localStorage.getItem('Employees'));

        // Find the employee to assign the task to
        const employee = employees.find(emp => emp.firstName === assignTo);

        if (!employee) {
            alert('Employee not found!');
            return;
        }

        // Generate a unique task number
        const taskNumber = employee.tasks.length > 0
            ? Math.max(...employee.tasks.map(t => t.taskNumber || 0)) + 1
            : 1;

        // Create the new task object
        const newTask = {
            taskNumber,
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        // Push the new task to the employee's tasks
        employee.tasks.push(newTask);

        // Update taskCount
        employee.taskCount.newTask = employee.tasks.filter(t => t.newTask).length;

        // Save the updated employees array back to localStorage
        localStorage.setItem('Employees', JSON.stringify(employees));

        // Trigger context update for admin dashboard
        if (refreshEmployees) refreshEmployees();

        // Reset form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');

        alert('Task created and assigned!');
    };

    return (
        <div className='p-5 mt-7 rounded'>
            <form onSubmit={submitHandler}
                className='text-white flex w-full flex-wrap bg-gray-900 items-start justify-between font-semibold p-3 rounded '
            >
                <div className='w-1/2'>
                    <div className='mb-3'>
                        <h3>Task Title </h3>
                        <input
                            id="taskTitle"
                            name="taskTitle"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-1 border-white'
                            type='text'
                            placeholder='Enter the Task' />
                    </div>
                    <div className='mb-3'>
                        <h3>Date</h3>
                        <input
                            id="taskDate"
                            name="taskDate"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-1 border-white'
                            type="date" />
                    </div >
                    <div className='mb-3'>
                        <h3>Assign To</h3>
                        <input
                            id="assignTo"
                            name="assignTo"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-1 border-white'
                            type="text" placeholder='Enter the Name' />
                    </div >
                    <div>
                        <h3>Category</h3>
                        <input
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-1 border-white'
                            type="text" placeholder='Design , Dev , etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start '>
                    <h3 className='text-sm mb-0.5'>Description </h3>
                    <textarea
                        id="taskDescription"
                        name="taskDescription"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='bg-transparent w-full h-50 py-2 px-4 rounded outline-none border-[1px] border-white  text-white'></textarea>
                    <button className='bg-emerald-300 py-3  hover:bg-emerald-600 px-5 rounded  text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;