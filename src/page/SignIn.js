import React, { useState } from 'react';

function SignIn() {
    const [username, setUsername] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSignIn = () => {
        alert(`สวัสดีจร้า, ${username}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>สวัสดีจร้า</h1>
            <input 
                type="text" 
                placeholder="Enter your username" 
                value={username} 
                onChange={handleInputChange}
                style={{ padding: '10px', width: '300px', fontSize: '16px' }}
            />
            <br /><br />
            <button onClick={handleSignIn} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Sign In
            </button>
        </div>
    );
}

export default SignIn;