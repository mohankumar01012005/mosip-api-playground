import { useState } from "react";
import {
  getAllUsers,
  getUserById,
  getPosts,
  getComments,
} from "../services/mosipApi";

function ApiTester() {
  const [inputId, setInputId] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiFunction, param) => {
    setLoading(true);
    setResponse(null);
    const res = await apiFunction(param);
    setResponse(res);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>API Tester Panel</h2>

        <input
          type="number"
          placeholder="Enter User ID (1 - 10)"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />

        <div className="buttons">
          <button onClick={() => handleApiCall(getAllUsers)}>
            Get All Users
          </button>

          <button
            onClick={() => handleApiCall(getUserById, inputId)}
            disabled={!inputId}
          >
            Get User By ID
          </button>

          <button onClick={() => handleApiCall(getPosts)}>
            Get Posts
          </button>

          <button onClick={() => handleApiCall(getComments)}>
            Get Comments
          </button>

          <button className="clear" onClick={() => setResponse(null)}>
            Clear Response
          </button>
        </div>
      </div>

      <div className="response">
        <h3>API Response</h3>
        {loading && <p>Loading...</p>}
        <pre>{response && JSON.stringify(response, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ApiTester;
