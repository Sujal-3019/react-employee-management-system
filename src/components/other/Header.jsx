import React from 'react';

const Header = ({ data }) => {
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        window.location.reload();
    };

    const displayName = data && data.firstName ? data.firstName : "Admin";

    return (
        <div className='flex items-end justify-between text-amber-50'>
            <h1 className='text-xl font-xl'>
                Hello <br />
                <span className='text-3xl font-semibold'>{displayName}👋🏻</span>
            </h1>
            <button onClick={logOutUser} className='bg-red-600  text-white px-5 py-2 rounded  font-semibold'>Log Out</button>
        </div>
    );
}
export default Header;