import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: " 4815162342",
      name: "Jacob",
    });
  };

  return (
    <div className="mb-5">
      <h4>User</h4>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      <div className="card bg-black p-3 mt-2">
        {!user ? (
          <pre> No hay usuario</pre>
        ) : (
          <pre> {JSON.stringify(user)}</pre>
        )}
      </div>
    </div>
  );
};
