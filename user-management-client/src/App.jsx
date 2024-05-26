// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
  }, [])

  const handleform = event => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const banglish = form.get("banglish");
    const user = { name, banglish };
    // console.log(name, banglish, user);

    // post form to the server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        event.target.reset();
      })
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>User Management System FrontEnd</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* form section for adding information */}
      <form onSubmit={handleform}>
        <input type="text" name="name" id="" placeholder='name' />
        <input type="text" name="banglish" id="" placeholder='banglish' />
        <input type="submit" value="Add" />
      </form>

      <h2>{`Users: ${users.length}`}</h2>

      <section>
        {
          users.map(user => <div key={user.id}>
            <p>{`user id: ${user.id} : name: ${user.name} : banglish: ${user.banglish}`}</p>
          </div>)
        }
      </section>
    </>
  )
}

export default App
