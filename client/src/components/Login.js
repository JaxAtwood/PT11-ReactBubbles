import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [form, setForm] = React.useState({ username: "", password: "" }); 

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/login", form) 
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(error => {
                console.log(error.response)
                alert("Incorrect Log In Information")
                setForm({ username: "", password: "" }); 
         });
    };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
          <input 
            type="text" 
            placeholder="username"
            name="username" 
            onChange={handleChanges}
            value={form.username}
          />
          <input 
            type="password"
            placeholder="password"
            name="password" 
            onChange={handleChanges}
            value={form.password}
          />
          <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;