import React, { useState } from 'react';

const CreateEmployeeModal = ({ onClose, onCreated }) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const employees = JSON.parse(localStorage.getItem('Employees')) || [];
        const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
        const newEmployee = {
            id: newId,
            firstName,
            email,
            password,
            taskCount: { active: 0, newTask: 0, completed: 0, failed: 0 },
            tasks: []
        };
        employees.push(newEmployee);
        localStorage.setItem('Employees', JSON.stringify(employees));
        if (onCreated) onCreated();
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
            <div className='bg-gray-900 rounded-xl p-8 w-[400px] shadow-lg'>
                <h2 className='text-2xl font-bold text-white mb-4'>Create Employee</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <input
                        id="firstName"
                        name="firstName"
                        className='rounded px-3 py-2 bg-gray-800 text-white border border-emerald-400'
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        id="email"
                        name="email"
                        className='rounded px-3 py-2 bg-gray-800 text-white border border-emerald-400'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        id="password"
                        name="password"
                        className='rounded px-3 py-2 bg-gray-800 text-white border border-emerald-400'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <div className='flex gap-2 mt-2'>
                        <button type='submit' className='bg-emerald-400 hover:bg-emerald-600 text-white px-4 py-2 rounded font-semibold'>Create</button>
                        <button type='button' className='bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold' onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeModal;
