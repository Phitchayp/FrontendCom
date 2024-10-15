import './User.css';

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
  return (
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
  );
}

export default UserPage;
