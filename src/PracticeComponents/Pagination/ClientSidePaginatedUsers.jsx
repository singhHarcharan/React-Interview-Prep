import React, { useEffect, useMemo, useState } from "react";

function ClientSidePaginatedUsers() {
    const [allUsers, setAllUsers] = useState([]);
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

                const res = await fetch(API_URL, { signal });

                if (!res.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await res.json();
                setAllUsers(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();

        return () => controller.abort();
    }, []);

    const totalPages = Math.ceil(allUsers.length / LIMIT);

    const paginatedUsers = useMemo(() => {
        const start = (page - 1) * LIMIT;
        const end = start + LIMIT;
        return allUsers.slice(start, end);
    }, [allUsers, page]);

    function nextPage() {
        setPage(prev => Math.min(prev + 1, totalPages));
    }

    function prevPage() {
        setPage(prev => Math.max(prev - 1, 1));
    }

    return (
        <div>
            <h2>
                Users (Page {page} / {totalPages || 1})
            </h2>

            {/* Reserved space */}
            <div style={{ minHeight: "120px" }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!loading && !error && (
                    <ul>
                        {paginatedUsers.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ marginTop: "10px" }}>
                <button
                    onClick={prevPage}
                    disabled={page === 1 || loading}
                    style={{ marginRight: "10px" }}
                >
                    Previous
                </button>

                <button
                    onClick={nextPage}
                    disabled={page === totalPages || loading}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ClientSidePaginatedUsers;
