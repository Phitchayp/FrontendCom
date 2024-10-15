import React, { useState , useEffect} from 'react';
import './page.css';
<link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
    rel="stylesheet"
></link>;

function SignIn() {
    //------------------sign in----------------------
    const [usernamesignin, setUsernamesignin] = useState('');
    const [passwordsignin, setPasswordsignin] = useState('');
    const [showPasswordsignin, setShowPasswordsignin] = useState(false); // สถานะการแสดงรหัสผ่าน

    const handleInputChange = (e) => {
        setUsernamesignin(e.target.value);
    };

    const handleInputChange2 = (e) => {
        //showpassword sign in
        setPasswordsignin(e.target.value);
    };

    const handleSignIn = () => {
        alert(`สวัสดีจร้า Sign in เรียบร้อย, ${usernamesignin}`);
    };

    //------------------sign up-----------------------
    const [usernamesignup, setUsernamesignup] = useState('');
    const [passwordsignup, setPasswordsignup] = useState('');
    const [passwordsignup2, setPasswordsignup2] = useState('');
    const [showPasswordsignup, setShowPasswordsignup] = useState(false); // สถานะการแสดงรหัสผ่าน

    const handleInputChangesignup = (e) => {
        setUsernamesignup(e.target.value);
    };

    const handleInputChangesignup2 = (e) => {
        //showpassword sign up
        setPasswordsignup(e.target.value);
    };

    const handleInputconfirmpass = (e) => {
        setPasswordsignup2(e.target.value);
    };

    const handleSignup = () => {
        alert(`สวัสดีจร้า Sing up เรียบร้อย, ${usernamesignup}`);
    };

    //----------------- handle click -----------------------
    // const [isSignIn, setIsSignIn] = useState(true); // เริ่มต้นที่หน้า Sign In

    // const handleSignUpClick = () => {
    //     setIsSignIn(false); // เปลี่ยนเป็นหน้า Sign Up
    // };

    // const handleSignInClick = () => {
    //     setIsSignIn(true); // เปลี่ยนกลับมาหน้า Sign In
    // };


    // const [isPasswordReset, setIsPasswordReset] = useState(false); //เริ่มต้นที่หน้า sign in


    //ลอง
    const [currentPage, setCurrentPage] = useState('signin');

    // เปลี่ยนหน้าตามสถานะที่ต้องการ
    const handleSignUpClick = () => setCurrentPage('signup');
    const handleSignInClick = () => setCurrentPage('signin');
    const handleForgotPasswordClick = () => setCurrentPage('resetpassword');

    // Reset ค่าเมื่อเปลี่ยนหน้า
    useEffect(() => {
        // รีเซ็ตค่าทั้งหมดเมื่อเปลี่ยนหน้า
        setUsernamesignin('');
        setPasswordsignin('');
        setUsernamesignup('');
        setPasswordsignup('');
        setPasswordsignup2('');
        setpasswordReset('');
        setShowPasswordsignin(false); // รีเซ็ตการแสดงรหัสผ่าน
    }, [currentPage]); // ทำงานทุกครั้งที่ currentPage เปลี่ยน


    //------------------ Password Reset ----------------------
    const [passwordReset, setpasswordReset] = useState('');

    const handleInputpasswordReset = (e) => {
        setpasswordReset(e.target.value);
    };

    const handlepasswordReset = () => {
        alert(`กรุณาไปยืนยันที่อีเมล, ${passwordReset}`);
    };




    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: 'url(/flowerbackground.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {currentPage === 'signin' && (
                // ------------------------- SignIn ------------------------------
                <div
                    style={{
                        transform: 'scale(0.8)',
                        transformOrigin: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)', // กรอบโปร่งแสงสำหรับเนื้อหาฟอร์ม
                            padding: '35px',
                            borderRadius: '20px',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                            position: 'relative', // เพิ่ม position relative
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 900,
                                fontSize: '28px',
                                marginTop: '0px',
                                color: '#292724',
                            }}
                        >
                            Sign In
                        </h1>
                        <h2
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '17px',
                                marginRight: '90%',
                            }}
                        >
                            Email:
                        </h2>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={usernamesignin}
                            onChange={handleInputChange}
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

                        <h2
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '17px',
                                marginRight: '90%',
                                marginTop: '20px',
                            }}
                        >
                            Password:
                        </h2>
                        <div style={{ position: 'relative', width: '450px' }}>
                            <input
                                type={showPasswordsignin ? 'text' : 'password'} // เปลี่ยนเป็น type password ตามสถานะ
                                placeholder="Enter your password"
                                value={passwordsignin}
                                onChange={handleInputChange2}
                                style={{
                                    padding: '14px',
                                    width: '100%', // ใช้ width 100% เพื่อให้พอดีกับ div
                                    fontSize: '17px',
                                    borderRadius: '12px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    backgroundColor: '#F4EEAD',
                                    border: 'none',
                                    outline: 'none',
                                }}
                            />
                            <button
                                onClick={() => setShowPasswordsignin(!showPasswordsignin)} // เปลี่ยนสถานะเมื่อคลิก
                                style={{
                                    position: 'absolute',
                                    right: '0px', // ปรับตำแหน่งปุ่มให้ไปอยู่ขวา
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: '#F4EEAD', // สีพื้นหลัง
                                    border: 'none',
                                    color: '#b8811d',
                                    cursor: 'pointer',
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: 700,
                                    fontSize: '15px', // ขนาดฟอนต์
                                    width: '50px', // ความกว้าง
                                    height: '40px', // ความสูง
                                    borderRadius: '8px', // มุมโค้ง
                                    display: 'flex', // ใช้ flexbox เพื่อจัดแนวข้อความ
                                    alignItems: 'center', // จัดแนวแนวตั้ง
                                    justifyContent: 'center', // จัดแนวนอน
                                }}
                            >
                                {showPasswordsignin ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <h3
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '17px',
                                marginRight: '60%',
                                marginTop: '35px',
                                color: '#a3181a',
                                cursor: 'pointer'
                            }}
                            onClick={handleForgotPasswordClick} // เมื่อคลิกจะเปลี่ยนกลับไปหน้า Reset password
                        >
                            Forgot your password?
                        </h3>



                        <div style={{ marginTop: '35px' }}>
                            <button
                                onClick={handleSignIn}
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
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงา
                                    transition: 'all 0.3s ease', // เพิ่มการเปลี่ยนแปลง
                                    height: '50px',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 6px 12px rgba(0, 0, 0, 0.3)'; // เพิ่มเงาเมื่อเมาส์อยู่เหนือ
                                    e.currentTarget.style.transform = 'translateY(-2px)'; // ยกปุ่มขึ้น
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 4px 8px rgba(0, 0, 0, 0.2)'; // กลับเงาเป็นปกติ
                                    e.currentTarget.style.transform = 'translateY(0)'; // กลับตำแหน่งปุ่ม
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>

                    <div
                        style={{
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
                                don't have an account?
                            </h3>
                            <h3
                                style={{ cursor: 'pointer', fontWeight: 'bold', color: '#292724' }}
                                onClick={handleSignUpClick} // เมื่อคลิกจะเปลี่ยนไปหน้า Sign Up
                            >
                                Create an account
                            </h3>
                        </div>
                    </div>
                </div>



            )}


            {currentPage === 'signup' && (
                //----------------------------- sign up ------------------------------
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
                        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '28px', marginTop: '0px', color: '#292724' }}>Sign Up</h1>
                        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%' }}>Email:</h2>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={usernamesignup}
                            onChange={handleInputChangesignup}
                            style={{
                                padding: '14px',
                                width: '450px',
                                fontSize: '17px',
                                borderRadius: '12px',
                                fontFamily: 'Montserrat, sans-serif',
                                backgroundColor: '#F4EEAD',
                                border: 'none',
                                outline: 'none'
                            }}
                        />

                        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%', marginTop: '20px' }}>Password:</h2>
                        <div style={{ position: 'relative', width: '450px' }}>
                            <input
                                type={showPasswordsignup ? 'text' : 'password'} // เปลี่ยนเป็น type password ตามสถานะ
                                placeholder="Enter your password"
                                value={passwordsignup}
                                onChange={handleInputChangesignup2}
                                style={{
                                    padding: '14px',
                                    width: '100%', // ใช้ width 100% เพื่อให้พอดีกับ div
                                    fontSize: '17px',
                                    borderRadius: '12px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    backgroundColor: '#F4EEAD',
                                    border: 'none',
                                    outline: 'none'
                                }}
                            />


                            <button
                                onClick={() => setShowPasswordsignup(!showPasswordsignup)} // เปลี่ยนสถานะเมื่อคลิก
                                style={{
                                    position: 'absolute',
                                    right: '0px', // ปรับตำแหน่งปุ่มให้ไปอยู่ขวา
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: '#F4EEAD', // สีพื้นหลัง
                                    border: 'none',
                                    color: '#b8811d',
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
                                {showPasswordsignup ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {/* confirm password */}

                        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '67%', marginTop: '20px' }}>Confirm Password:</h2>
                        <div style={{ position: 'relative', width: '450px' }}>
                            <input
                                type="password" // เปลี่ยนจาก type="text" เป็น type="password"
                                placeholder="Confirm your password"
                                value={passwordsignup2}
                                onChange={handleInputconfirmpass}
                                style={{
                                    padding: '14px',
                                    width: '450px',
                                    fontSize: '17px',
                                    borderRadius: '12px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    backgroundColor: '#F4EEAD',
                                    border: 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>


                        <div style={{ marginTop: '35px' }}>
                            <button
                                onClick={handleSignup}
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
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงา
                                    transition: 'all 0.3s ease', // เพิ่มการเปลี่ยนแปลง
                                    height: '50px'
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
                                Sign Up
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
            )}



            {currentPage === 'resetpassword' && (
                //----------------------------- Password Reset ------------------------------
                <div
                    style={{
                        transform: 'scale(0.8)',
                        transformOrigin: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 1)', // กรอบโปร่งแสงสำหรับเนื้อหาฟอร์ม
                            padding: '35px',
                            borderRadius: '20px',
                            boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                            position: 'relative', // เพิ่ม position relative
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 900,
                                fontSize: '28px',
                                marginTop: '0px',
                                color: '#292724',
                            }}
                        >
                            Password Reset
                        </h1>
                        <h2
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '17px',
                                marginRight: '90%',
                            }}
                        >
                            Email:
                        </h2>
                        <input
                            type="text"
                            placeholder="Enter your email to reset password"
                            value={passwordReset}
                            onChange={handleInputpasswordReset}
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
                                onClick={handlepasswordReset}
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
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงา
                                    transition: 'all 0.3s ease', // เพิ่มการเปลี่ยนแปลง
                                    height: '50px',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 6px 12px rgba(0, 0, 0, 0.3)'; // เพิ่มเงาเมื่อเมาส์อยู่เหนือ
                                    e.currentTarget.style.transform = 'translateY(-2px)'; // ยกปุ่มขึ้น
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 4px 8px rgba(0, 0, 0, 0.2)'; // กลับเงาเป็นปกติ
                                    e.currentTarget.style.transform = 'translateY(0)'; // กลับตำแหน่งปุ่ม
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
            )}
        </div >

    );
}

export default SignIn;
