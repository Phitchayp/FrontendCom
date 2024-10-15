
import './Admin.css'; // นำเข้าไฟล์ CSS
function AdminPage() { 
    return (
    <div className="admin-logs">
        <div className="header">
          <h1>Admin logs</h1>
        </div>
        <div className="logs-container">
          {/* คุณสามารถเพิ่มเนื้อหาของ Logs ที่นี่ */}
          <center>No logs available</center>
        </div>
    </div>
    );
}

export default AdminPage;


