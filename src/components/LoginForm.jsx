
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import color from "./LoginForm.module.css";

function LoginForm() {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example check (You can use real auth logic)
    if (Username === "suragoni venkat sai saketh" && Email === "venkatsaisaketh.suragoni@gmail.com" && Password === "Svss@123") {
      navigate('/Ai');
    } else {
      alert('Invalid credentials');
    }
  };

    return (
      <div className={color.loginForm}>
            <h1>AI</h1>
            <h2>Artificial Intelligence</h2>

        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            
          <div className={color.UserBlock}>
            <input 
            type="Username" 
            value={Username} 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className={color.EmailBlock}>
            <input 
            type="Email" 
            value={Email} 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={color.PasswordBlock}>
            <input 
            type="Password" 
            value={Password} 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className={color.ButtonBlock}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
}

export default LoginForm;