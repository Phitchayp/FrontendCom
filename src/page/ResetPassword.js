import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'; // import useParams
import BaseLayout from './BaseLayout';

import axios from 'axios'

function ResetPassword() {
    const { token } = useParams(); // ดึงค่า token จาก URL

    //------------------ Password Reset ----------------------
    const [email, setEmail] = useState('');

    const callRequestPassword = async()=>{
        try{
            const res = await axios.post("http://localhost:3001/api/request-password-reset",{email: email})
            const data = await res.data
            console.log(data)
        } catch (e){
            console.log(e)
        }
        
    }

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า
    const handleSignInClick = () => navigate('/signin'); // ไปหน้า Sign In

    //------------------ sweet alert password reset --------------
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailsweet = () => {
        if (!validateEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email format!',
            });
            return;
        }
        // ทำสิ่งที่ต้องการเมื่อ valid email
        callRequestPassword();
        console.log("Reset password for token:", token);
    };

    

    return (
        <BaseLayout>
            <div
                style={{
                    transform: 'scale(0.8)',
                    transformOrigin: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        padding: '35px',
                        borderRadius: '20px',
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                    }}
                >
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '28px', marginTop: '0px', color: '#292724' }}>
                        Password Reset
                    </h1>
                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%' }}>
                        Email:
                    </h2>
                    <input
                        type="email"
                        placeholder="Enter your email to reset password"
                        value={email}
                        onChange={handleInputEmail}
                        style={{
                            padding: '14px',
                            width: '450px',
                            fontSize: '17px',
                            borderRadius: '12px',
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: '#F4EEAD',
                            border: 'none',
                            outline: 'none',
                        }}
                    />
                    <div style={{ marginTop: '35px' }}>
                        <button
                            onClick={handleEmailsweet}
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 900,
                                padding: '10px 20px',
                                fontSize: '20px',
                                borderRadius: '12px',
                                width: '350px',
                                background: '#E8B774',
                                color: '#292724',
                                marginTop: '-30px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease',
                                height: '50px',
                                border: 'none',
                                outline: 'none',
                            }}
                        >
                            Reset password
                        </button>
                    </div>

                    <h3
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 900,
                            fontSize: '19px',
                            marginTop: '20px',
                            marginBottom: '-3%',
                            color: '#a3181a',
                            cursor: 'pointer'
                        }}
                        onClick={handleSignInClick} // เมื่อคลิกจะเปลี่ยนกลับไปหน้า Sign In
                    >
                        back to sign in
                    </h3>
                </div>
            </div>
        </BaseLayout>
    );
}

export default ResetPassword;
