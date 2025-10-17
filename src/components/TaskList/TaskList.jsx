import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompletedTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    const [refresh, setRefresh] = useState(0);
    const { refreshEmployees } = useContext(AuthContext);

    const updateTaskStatus = (taskNumber, action) => {
        // Get employees from localStorage
        const employees = JSON.parse(localStorage.getItem('Employees'));
        const employeeIdx = employees.findIndex(emp => emp.id === data.id);
        if (employeeIdx === -1) return;

        const employee = employees[employeeIdx];
        const taskIdx = employee.tasks.findIndex(t => t.taskNumber === taskNumber);
        if (taskIdx === -1) return;

        // Update task status based on action
        if (action === 'accept') {
            employee.tasks[taskIdx].active = true;
            employee.tasks[taskIdx].newTask = false;
            employee.tasks[taskIdx].completed = false;
            employee.tasks[taskIdx].failed = false;
        } else if (action === 'complete') {
            employee.tasks[taskIdx].completed = true;
            employee.tasks[taskIdx].active = false;
            employee.tasks[taskIdx].newTask = false;
            employee.tasks[taskIdx].failed = false;
        } else if (action === 'fail') {
            employee.tasks[taskIdx].failed = true;
            employee.tasks[taskIdx].active = false;
            employee.tasks[taskIdx].newTask = false;
            employee.tasks[taskIdx].completed = false;
        }

        // Update taskCount
        employee.taskCount.newTask = employee.tasks.filter(t => t.newTask).length;
        employee.taskCount.active = employee.tasks.filter(t => t.active).length;
        employee.taskCount.completed = employee.tasks.filter(t => t.completed).length;
        employee.taskCount.failed = employee.tasks.filter(t => t.failed).length;

        // Save back to localStorage
        employees[employeeIdx] = employee;
        localStorage.setItem('Employees', JSON.stringify(employees));

        // Force re-render locally
        setRefresh(r => r + 1);

        // Refresh Employees globally
        if (refreshEmployees) refreshEmployees();
    };

    return (
        <div id='tasklist' className='flex items-center overflow-x-auto justify-start h-[40%] w-full mt-10 gap-5 rounded-xl py-5 flex-nowrap'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onAction={action => updateTaskStatus(elem.taskNumber, action)} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onAction={action => updateTaskStatus(elem.taskNumber, action)} />;
                }
                if (elem.completed) {
                    return <CompletedTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
                return null;
            })}
        </div>
    );
}
export default TaskList