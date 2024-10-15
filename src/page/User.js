import './User.css';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
        // ฟังก์ชัน Logout
        const handleLogout = () => {
            // ลบ token หรือข้อมูลใน localStorage / sessionStorage
            localStorage.removeItem('token'); // สมมติว่าคุณเก็บ token ไว้ใน localStorage
            // นำทางกลับไปยังหน้า login
            navigate('/SignIn'); // สมมติว่าคุณมีเส้นทางหน้า login ชื่อ '/login'
          };
  return (
    <div>
     <button onClick={handleLogout} className="logout-button">Logout</button>
    <div className="user">
      <div className="header">
      </div>
      <div className="user-container">
        <center>Welcome to florist's ❀♡</center>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <p>{product.name}</p>
              <p>    Price: ฿{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserPage;
