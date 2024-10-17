import './User.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const products = [
  {
    id: 0,
    name: "Bouquet of Roses",
    price: 4990,
    img: "https://i.pinimg.com/originals/3f/84/96/3f84964e7bf25f8728faec47311054be.jpg",
  },
  {
    id: 1,
    name: "Sunflower Bouquet",
    price: 2990,
    img: "https://i.pinimg.com/originals/28/24/62/2824626af2b6a6f95a3776765ccff286.jpg",
  },
  {
    id: 2,
    name: "Tulip Bouquet",
    price: 3990,
    img: "https://i.pinimg.com/originals/b5/6c/29/b56c299709199e7f693aeec4ac3b6315.jpg",
  },
  {
    id: 3,
    name: "Mixed Flower Bouquet",
    price: 6990,
    img: "https://i.pinimg.com/originals/a9/a9/ec/a9a9ec9561b2ba1097804853331c6138.jpg",
  },

];

function UserPage() { 
  const [isAuthenticated, setIsAuthenticated] = useState(false); // state สำหรับจัดการการตรวจสอบ token
  const navigate = useNavigate();

  const callVerifyToken = async () => {
    try {
      const storedUserData = localStorage.getItem('user');
      const user = JSON.parse(storedUserData);
      const token = user.token;
      if (!token) {
        // ถ้าไม่มี token ให้เปลี่ยนเส้นทางไปยังหน้า login
        navigate('/SignIn');
        return;
      }

      // ตรวจสอบ token กับเซิร์ฟเวอร์
      const res = await axios.post("http://localhost:3001/api/verify-jwt-token", {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // ถ้า token ถูกต้อง ให้อนุญาตให้เข้าถึงหน้า
      setIsAuthenticated(true);
      
    } catch (e) {
      //console.log(e);
      if (e.response) {
        // ตรวจสอบสถานะและแสดงข้อความที่เหมาะสม
        switch (e.response.status) {
          case 401:
          case 403:
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: e.response.data.message || 'Error occurred.',
            });
            navigate('/SignIn'); // นำทางไปยังหน้า login
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'An unexpected error occurred. Please try again later.',
            });
        }
      } else {
        if(e instanceof TypeError) {
          Swal.fire({
            icon: 'error',
            title: 'Authentication Error',
            text: 'Failed to authenticate your session. Please log in again to continue.',
          });
        }else{
          // กรณีไม่มีการตอบสนองจากเซิร์ฟเวอร์
          Swal.fire({
            icon: 'error',
            title: 'Network Error',
            text: 'Could not connect to the server. Please check your internet connection.',
          });
        }

        
      }
      navigate('/SignIn'); // นำทางไปยังหน้า login
    }
  };

  useEffect(() => {
    callVerifyToken();
  }, []);

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // ลบ token ออกจาก localStorage
    navigate('/SignIn'); // นำทางกลับไปยังหน้า login
  };

  // แสดงหน้าเว็บเฉพาะเมื่อผู้ใช้ถูกยืนยันว่าเข้าสู่ระบบ
  if (!isAuthenticated) {
    return null; // หรือแสดง loading indicator
  }

  return (
    <div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <div className="user">
        <div className="header"></div>
        <div className="user-container">
          <center>Welcome to florist's ❀♡</center>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} className="product-image" />
                <p>{product.name}</p>
                <p>Price: ฿{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
