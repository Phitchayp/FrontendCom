import React, { useState } from 'react';
import './page.css';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // สถานะการแสดงรหัสผ่าน

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        alert(`สวัสดีจร้า, ${username}`);
    };

    return (
        <div style={{
            height: '100vh',
            backgroundImage: 'url(/flowerbackground.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 1)', // กรอบโปร่งแสงสำหรับเนื้อหาฟอร์ม
                padding: '35px',
                borderRadius: '20px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                position: 'relative' // เพิ่ม position relative
            }}>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '28px', marginTop: '0px', color:'#292724'}}>Sign In</h1>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '90%' }}>Email:</h2>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={username}
                    onChange={handleInputChange}
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
                        type={showPassword ? 'text' : 'password'} // เปลี่ยนเป็น type password ตามสถานะ
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleInputChange2}
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
                        onClick={() => setShowPassword(!showPassword)} // เปลี่ยนสถานะเมื่อคลิก
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
                        {showPassword ? 'Hide' : 'Show'} {/* เปลี่ยนข้อความตามสถานะ */}
                    </button>
                </div>

                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '17px', marginRight: '60%', marginTop: '35px', color: '#a3181a' }}>Forgot your password?</h3>



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
                        Sign In
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
                        don't have an account?
                    </h3>
                    <h3 style={{ margin: 35, fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '17px', marginRight: '10px', color: '#292724'  }}>create an account</h3> {/* ใช้ margin: 0 เพื่อไม่ให้มีช่องว่างจากการจัดตำแหน่ง */}
                </div>
            </div>


        </div>

    );
}

export default SignIn;
