import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [admin, setAdmin] = useState([]);

    const refreshEmployees = () => {
        const { Employees, Admin } = getLocalStorage();
        setEmployees(Employees || []);
        setAdmin(Admin || []);
    };

    useEffect(() => {
        refreshEmployees();
    }, []);

    return (
        <AuthContext.Provider value={{ Employees: employees, Admin: admin, refreshEmployees }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;