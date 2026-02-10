import { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_URL = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchUsers() {

            try {
                setLoading(true);
                setError(null);

                const res = await fetch(API_URL, {signal});
                if(!res.ok) {
                    throw new Error(`Failed to fetch users`);
                }
                const data = await res.json();
                console.log(data);
                setUsers(data);
            } 
            catch(err) {
                if(err.name !== "AbortError") {
                    setError(err.message);
                }
            }
            finally {
                setLoading(false);
            }
        }
        fetchUsers();
        return () => {
            controller.abort();
        }
    },[])

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>Error: {error}</p>

    return <div>
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </div>
}

export default UsersList;