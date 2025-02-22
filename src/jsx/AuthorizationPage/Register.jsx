import React, { useState } from 'react';
import '../../static/Auth.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Функция обработки отправки формы
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Пользователь Зарегестрирован");
      console.log(`Имя: ${name}\nEmail: ${email}\nПароль: ${password}`);
    };

    return (
        // Register
        <div className="registration-container">
            <form onSubmit={handleSubmit} className="registration-form">
                <h2>Регистрация</h2>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" value={name} placeholder="Введите имя" onChange={(e) => setName(e.target.value)} required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} placeholder="Введите email" onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" value={password} placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)} required/>

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Register;