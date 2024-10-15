import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function UpdatePassword() {

    //------------------sign up-----------------------
    const [usernameupdate, setUsernameupdate] = useState('');
    const [passwordupdate, setPasswordupdate] = useState('');
    const [passwordupdate2, setPasswordupdate2] = useState('');
    const [showPasswordupdate, setShowPasswordupdate] = useState(false); // สถานะการแสดงรหัสผ่าน

    const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า
    const handleSignInClick = () => navigate('/signin'); // ไปหน้า Sign In


    const handleInputChangeupdate = (e) => {
        setUsernameupdate(e.target.value);
    };

    const handleInputChangepasswordupdate = (e) => {
        //showpassword sign up
        setPasswordupdate(e.target.value);
    };

    const handleInputpasswordupdateconfirmpass = (e) => {
        setPasswordupdate2(e.target.value);
    };

    

    //----------------- sweet alert update ----------------

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    const handleSignupsweet = () => {
        // ตรวจสอบรบ
        if (!usernameupdate || !passwordupdate || !passwordupdate2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all the fields!',
            });
            return;
        }


        if (!validateEmail(usernameupdate)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email format!',
            });
            return;
        }

        // ตรวจสอบว่ารหัสผ่านตรงกันมั้ย
        if (passwordupdate !== passwordupdate2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            });
            return;
        }


        Swal.fire({
            title: 'Signed up successfully!',
            icon: 'success',
        });
    };

    return (
        <BaseLayout>
            < div style={{
                transform: 'scale(0.8)',
                transformOrigin: 'center'
            }
            }>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)', // กรอบโปร่งแสงสำหรับเนื้อหาฟอร์ม
                    padding: '35px',
                    borderRadius: '20px',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                    position: 'relative' // เพิ่ม position relative
                }}>
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '28px', marginTop: '0px', color: '#292724' }}>Update Password</h1>
                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%' }}>Email:</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={usernameupdate}
                        onChange={handleInputChangeupdate}
                        style={{
                            padding: '14px',
                            width: '450px',
                            fontSize: '17px',
                            borderRadius: '12px',
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: '#adb9f4',
                            border: 'none',
                            outline: 'none'
                        }}
                    />

                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%', marginTop: '20px' }}>Password:</h2>
                    <div style={{ position: 'relative', width: '450px' }}>
                        <input
                            type={showPasswordupdate ? 'text' : 'password'} // เปลี่ยนเป็น type password ตามสถานะ
                            placeholder="Enter your new password"
                            value={passwordupdate}
                            onChange={handleInputChangepasswordupdate}
                            style={{
                                padding: '14px',
                                width: '100%', // ใช้ width 100% เพื่อให้พอดีกับ div
                                fontSize: '17px',
                                borderRadius: '12px',
                                fontFamily: 'Montserrat, sans-serif',
                                backgroundColor: '#adb9f4',
                                border: 'none',
                                outline: 'none'
                            }}
                        />


                        <button
                            onClick={() => setShowPasswordupdate(!showPasswordupdate)} // เปลี่ยนสถานะเมื่อคลิก
                            style={{
                                position: 'absolute',
                                right: '0px', // ปรับตำแหน่งปุ่มให้ไปอยู่ขวา
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: '#adb9f4', // สีพื้นหลัง
                                border: 'none',
                                color: '#5e3a91',
                                cursor: 'pointer',
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '15px', // ขนาดฟอนต์
                                width: '50px', // ความกว้าง
                                height: '40px', // ความสูง
                                borderRadius: '8px', // มุมโค้ง
                                display: 'flex', // ใช้ flexbox เพื่อจัดแนวข้อความ
                                alignItems: 'center', // จัดแนวแนวตั้ง
                                justifyContent: 'center' // จัดแนวนอน
                            }}
                        >
                            {showPasswordupdate ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    {/* confirm password */}

                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '67%', marginTop: '20px' }}>Confirm Password:</h2>
                    <div style={{ position: 'relative', width: '450px' }}>
                        <input
                            type="password" // เปลี่ยนจาก type="text" เป็น type="password"
                            placeholder="Confirm your password"
                            value={passwordupdate2}
                            onChange={handleInputpasswordupdateconfirmpass}
                            style={{
                                padding: '14px',
                                width: '450px',
                                fontSize: '17px',
                                borderRadius: '12px',
                                fontFamily: 'Montserrat, sans-serif',
                                backgroundColor: '#adb9f4',
                                border: 'none',
                                outline: 'none'
                            }}
                        />
                    </div>


                    <div style={{ marginTop: '35px' }}>
                        <button
                            onClick={handleSignupsweet}
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 900,
                                padding: '10px 20px',
                                fontSize: '20px',
                                borderRadius: '12px',
                                width: '350px',
                                background: '#fae37d',
                                color: '#292724',
                                marginTop: '-30px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงา
                                transition: 'all 0.3s ease', // เพิ่มการเปลี่ยนแปลง
                                height: '50px',
                                border: 'none',
                                outline: 'none'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // เพิ่มเงาเมื่อเมาส์อยู่เหนือ
                                e.currentTarget.style.transform = 'translateY(-2px)'; // ยกปุ่มขึ้น
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // กลับเงาเป็นปกติ
                                e.currentTarget.style.transform = 'translateY(0)'; // กลับตำแหน่งปุ่ม
                            }}
                        >
                            Update Password
                        </button>
                    </div>
                </div>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)', // กรอบโปร่งแสงสำหรับเนื้อหาฟอร์ม
                    padding: '35px',
                    borderRadius: '20px',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                    position: 'relative', // เพิ่ม position relative
                    marginTop: '50px', // เพิ่มระยะห่างจากกล่องข้างบน
                    width: '480px',
                    height: '25px', // ปรับความสูงให้เหมาะสม
                    display: 'flex', // ใช้ flexbox
                    alignItems: 'center', // จัดแนวกลางในแนวตั้ง
                    justifyContent: 'center', // จัดแนวกลางในแนวนอน
                    textAlign: 'center' // จัดการจัดแนวข้อความ
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '10px', color: '#a3181a' }}>
                            Already had an account?
                        </h3>
                        <h3
                            style={{ cursor: 'pointer', fontWeight: 'bold', color: '#292724' }}
                            onClick={handleSignInClick} // เมื่อคลิกจะเปลี่ยนกลับไปหน้า Sign In
                        >
                            Sign in
                        </h3>
                    </div>
                </div>
            </div >

        </BaseLayout>

    );

}

export default UpdatePassword;