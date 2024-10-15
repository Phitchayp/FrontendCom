import './Admin.css'; // นำเข้าไฟล์ CSS
import axios from 'axios';
import { useEffect, useState } from 'react';

function AdminPage() {
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/logs");
      const logs = await res.data;

      setData(logs);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className='scale-0-8'>
      <div className="admin-logs" >
        <div className="header">
          <h1>Admin Logs</h1>
        </div>
        <div className="logs-table-container">
          {data.length > 0 ? (
            <table className="logs-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Timestamp</th>
                  <th>Status</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data.map((log) => (
                  <tr key={log.id}>
                    <td>{log.user_email}</td>
                    <td>{new Date(log.timestamp).toLocaleString()}</td>
                    <td>{log.success ? 'Success' : 'Failure'}</td>
                    <td>{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <center>No logs available</center>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;


