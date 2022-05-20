import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: "12333",
  name: "Agus",
};
export const User = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = () => {
    setUser({
      uid: "43533",
      name: "Tina",
    });
  };

  return (
    <div className="my-5">
      <h3>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      <div className="card bg-black p-2 mt-2">
        {!user ? (
          <pre> No hay usuario</pre>
        ) : (
          <pre> {JSON.stringify(user)}</pre>
        )}
      </div>
    </div>
  );
};
