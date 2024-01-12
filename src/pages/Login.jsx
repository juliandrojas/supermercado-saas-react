import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(import.meta.REACT_APP_SUPABASE_URL);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Correo</label>
        <input type="email" name="email" placeholder="youremail@site.com" onChange={(e) => {setEmail(e.target.value)}} />
        <label htmlFor="">Contraseña</label>
        <input type="password" name="password" placeholder="yourpassword" onChange={(e) => {setPassword(e.target.value)}} />
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}

export default Login