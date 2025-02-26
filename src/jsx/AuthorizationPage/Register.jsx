import React, { useState } from 'react';
import '../../static/Auth.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({ name: 'None', email: 'None' });
    const [isUserVisible, setIsUserVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ name, email });
        setIsUserVisible(true);
        alert("Пользователь Зарегистрирован");
        console.log(`Имя: ${name}\nEmail: ${email}\nПароль: ${password}`);
    };

    return (
        // Register
        <div>
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

            <div className='users-list'>
                <div className='user'>
                    <h3>UserName</h3>
                    <p>example@gmail.com</p>
                    <button><a href="#">Посмотреть</a></button>
                </div>
                <div className={`user ${isUserVisible ? 'user-visible' : ''}`}>
                    <h3 className='user-name'>{userData.name}</h3>
                    <p className='user-email'>{userData.email}</p>
                    <button className='user-button'><a href="#">Посмотреть</a></button>
                </div>
                <div className='user'>
                    <h3>UserName</h3>
                    <p>example@gmail.com</p>
                    <button><a href="#">Посмотреть</a></button>
                </div>
            </div>
        </div>
    );
}

export default Register;