import React, { useEffect, useState } from "react";

function PaginatedUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LIMIT = 3;
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${API_URL}?_page=${page}&_limit=${LIMIT}`,
          { signal }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } 
      catch (err) {
        if (!err.message !== "AbortError") {
          setError(err.message);
        }
      } 
      finally {
        setLoading(false);
      }
    }

    fetchUsers()

    return () => {
      controller.abort();
    };
  }, [page]);

  function nextPage() {
    setPage(prev => prev + 1);
  }

  function prevPage() {
    setPage(prev => Math.max(prev - 1, 1));
  }

  return (
    <div>
      <h2>Users (Page {page} / {LIMIT})</h2>

      <div style={{ minHeight: "120px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
            <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        )}
      </div>
      
      <div style={{ marginTop: "10px" }}>
        <button onClick={prevPage} disabled={page === 1 || loading}
            style={{
                marginRight: "10px"
            }}
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={loading || users.length < LIMIT}
          style={{
            marginLeft: "10px"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedUsers;
