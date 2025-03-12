// import './App.css';
// import '../src/static/Main.css';
// import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
// import Home from './jsx/HomePage/Home';
// import Blog from './jsx/BlogPage/Blog';
// import About from './jsx/AboutPage/AboutUs';
// import Contact from './jsx/ContactPage/ContactUs';
// import Authorization from './jsx/AuthorizationPage/Authorization';

// function App() {
//   return (
//     <BrowserRouter>
//         {/* Navbar */}
//         <nav class="navbar">
//             <div class="logo"><Link to="#">&#123; Finsweet</Link></div>
//             <div class="nav-links">
//                 <Link to="/">Home</Link>
//                 <Link to="/Blog">Blog</Link>
//                 <Link to="/AboutUs">About Us</Link>
//                 <Link to="/ContactUs">Contact us</Link>
//                 <Link to="/Authorization"><button class="register-btn">Register</button></Link>
//             </div>
//         </nav>

//         <Routes>
//             <Route path='/' element={<Home />}/>
//             <Route path='/Blog' element={<Blog />}/>
//             <Route path='/AboutUs' element={<About />}/>
//             <Route path='/ContactUs' element={<Contact />}/>
//             <Route path='/PrivacyPolicy' element={<Home />}/>
//             <Route path='/Authorization' element={<Authorization />}/>
//         </Routes>

//         {/* Footer */}
//         <footer class="footer">
//             <div class="footer-content">
//                 <div class="footer-header">
//                     <div class="footer-logo"><a href="#">&#123; Finsweet</a></div>
                
//                     <div class="footer-links">
//                         <a href="/">Home</a>
//                         <a href="/Blog">Blog</a>
//                         <a href="/AboutUs">About Us</a>
//                         <a href="/ContactUs">Contact us</a>
//                         <a href="/PrivacyPolicy">Privacy Policy</a>
//                     </div>
//                 </div>
            
//                 <div class="newsletter">
//                     <h3>Subscribe to our newsletter to get latest updates and news</h3>
//                     <form class="newsletter-form">
//                         <input type="email" placeholder="Enter Your Email" required />
//                         <button type="submit">Subscribe</button>
//                     </form>
//                 </div>
            
//                 <div class="footer-footer">
//                     <div class="contact-info">
//                         <p>Finstreet 118 2561 Fintown</p>
//                         <p>Hello@finsweet.com  020 7993 2905</p>
//                     </div>
        
//                     <div class="footer-icons">
//                         <a href="#"><i class="fa-brands fa-facebook"></i></a>
//                         <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
//                         <a href="#"><i class="fa-brands fa-instagram"></i></a>
//                         <a href="#"><i class="fa-brands fa-linkedin"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </footer>

//         <script src="https://kit.fontawesome.com/73ac4e980c.js" crossorigin="anonymous"></script>
//     </BrowserRouter>
//   );
// }

// export default App;
// document.getElementById('root')



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  // Получить всех пользователей
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Добавить нового пользователя
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', { name, lastname, email })
      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setLastname('');
        setEmail('');
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}, {user.lastname} - {user.email}</li>
        ))}
      </ul>

      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;