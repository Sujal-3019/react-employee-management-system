import React, { useState } from 'react';

const DeleteTaskModal = ({ employees, onClose, onDelete }) => {
    const [selectedEmpId, setSelectedEmpId] = useState(employees[0]?.id || null);

    const handleDelete = (empId, taskNumber) => {
        const updatedEmployees = employees.map(emp => {
            if (emp.id === empId) {
                const newTasks = emp.tasks.filter(task => task.taskNumber !== taskNumber);
                // Update taskCount
                return {
                    ...emp,
                    tasks: newTasks,
                    taskCount: {
                        newTask: newTasks.filter(t => t.newTask).length,
                        active: newTasks.filter(t => t.active).length,
                        completed: newTasks.filter(t => t.completed).length,
                        failed: newTasks.filter(t => t.failed).length,
                    }
                };
            }
            return emp;
        });
        localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
        if (onDelete) onDelete();
    };

    const selectedEmployee = employees.find(emp => emp.id === selectedEmpId);

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
            <div className='bg-gray-900 rounded-xl p-8 w-[500px] shadow-lg'>
                <h2 className='text-2xl font-bold text-white mb-4'>Delete Task</h2>
                <div className='mb-4'>
                    <label className='text-white font-semibold'>Select Employee:</label>
                    <select
                        className='rounded px-3 py-2 bg-gray-800 text-white border border-emerald-400 ml-2'
                        value={selectedEmpId}
                        onChange={e => setSelectedEmpId(Number(e.target.value))}
                    >
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>{emp.firstName}</option>
                        ))}
                    </select>
                </div>
                <div className='max-h-60 overflow-auto'>
                    {selectedEmployee && selectedEmployee.tasks.length > 0 ? (
                        selectedEmployee.tasks.map(task => (
                            <div key={task.taskNumber} className='flex justify-between items-center bg-gray-800 rounded p-3 mb-2'>
                                <div>
                                    <span className='text-white font-semibold'>{task.title}</span>
                                    <span className='text-sm text-gray-400 ml-2'>({task.category})</span>
                                </div>
                                <button
                                    className='bg-red-400 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold'
                                    onClick={() => handleDelete(selectedEmpId, task.taskNumber)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='text-gray-400'>No tasks for this employee.</div>
                    )}
                </div>
                <button className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold mt-4' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default DeleteTaskModal;
