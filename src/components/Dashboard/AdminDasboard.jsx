import React, { useState, useContext } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import { AuthContext } from '../../context/AuthProvider';
import CreateEmployeeModal from '../other/CreateEmployeeModal';
import DeleteTaskModal from '../other/DeleteTaskModal';
import DeleteEmployeeModal from '../other/DeleteEmployeeModal';

const AdminDashboard = () => {
    const [showCreateEmployee, setShowCreateEmployee] = useState(false);
    const [showDeleteTask, setShowDeleteTask] = useState(false);
    const [showDeleteEmployee, setShowDeleteEmployee] = useState(false);
    const { Employees, refreshEmployees } = useContext(AuthContext);

    return (
        <div className='h-screen w-full p-5 bg-gray-800'>
            <Header />
            <div className='flex gap-4 mt-4'>
                <button
                    className='bg-emerald-400 hover:bg-emerald-600 text-white px-5 py-2 rounded font-semibold'
                    onClick={() => setShowCreateEmployee(true)}
                >
                    Create Employee
                </button>
                <button
                    className='bg-red-400 hover:bg-red-600 text-white px-5 py-2 rounded font-semibold'
                    onClick={() => setShowDeleteTask(true)}
                >
                    Delete Task
                </button>
                <button
                    className='bg-yellow-400 hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold'
                    onClick={() => setShowDeleteEmployee(true)}
                >
                    Delete Employee
                </button>
            </div>
            <CreateTask />
            <AllTask />
            {showCreateEmployee &&
                <CreateEmployeeModal
                    onClose={() => setShowCreateEmployee(false)}
                    onCreated={refreshEmployees}
                />
            }
            {showDeleteTask &&
                <DeleteTaskModal
                    employees={Employees}
                    onClose={() => setShowDeleteTask(false)}
                    onDelete={refreshEmployees}
                />
            }
            {showDeleteEmployee &&
                <DeleteEmployeeModal
                    employees={Employees}
                    onClose={() => setShowDeleteEmployee(false)}
                    onDelete={refreshEmployees}
                />
            }
        </div>
    )
}
export default AdminDashboard