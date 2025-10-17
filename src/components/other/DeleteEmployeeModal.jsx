import React, { useState } from 'react';

const DeleteEmployeeModal = ({ employees, onClose, onDelete }) => {
    const [selectedEmpId, setSelectedEmpId] = useState(employees[0]?.id || null);

    const handleDelete = () => {
        const updatedEmployees = employees.filter(emp => emp.id !== selectedEmpId);
        localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
        if (onDelete) onDelete();
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
            <div className='bg-gray-900 rounded-xl p-8 w-[400px] shadow-lg'>
                <h2 className='text-2xl font-bold text-white mb-4'>Delete Employee</h2>
                <div className='mb-4'>
                    <label className='text-white font-semibold'>Select Employee:</label>
                    <select
                        className='rounded px-3 py-2 bg-gray-800 text-white border border-yellow-400 ml-2'
                        value={selectedEmpId}
                        onChange={e => setSelectedEmpId(Number(e.target.value))}
                    >
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>{emp.firstName} ({emp.email})</option>
                        ))}
                    </select>
                </div>
                <div className='flex gap-2 mt-2'>
                    <button
                        className='bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button
                        className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold'
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteEmployeeModal;
