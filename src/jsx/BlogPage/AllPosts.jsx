import React, { useState, useEffect } from "react";
import Post1 from "../../images/pexels-divinetechygirl-1181533.jpg";
import Post2 from "../../images/pexels-fauxels-3183197.jpg";
import Post3 from "../../images/pexels-fauxels-3183173.jpg";
import Post4 from "../../images/pexels-fauxels-3182811.jpg";
import Post5 from "../../images/pexels-fauxels-3184585.jpg";
import "../../static/Blog.css";

function AllPosts() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Массив с картинками
  const images = [Post1, Post2, Post3, Post4, Post5];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Не удалось загрузить данные. Проверьте подключение к интернету.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <section className="blog-all-posts">
      <h2>All posts</h2>
      <hr />
      <div className="blog-post-list">
        {users.map((user, index) => {
          // Выбираем картинку по индексу (повторяем для 10 пользователей)
          const imageIndex = index % images.length;
          const image = images[imageIndex];

          return (
            <article key={user.id} className="blog-post-item">
              <img src={image} alt={`Post ${imageIndex + 1}`} crossOrigin="anonymous" />
              <div className="blog-post-text">
                <span className="blog-tag">{user.name}</span>
                <h3>
                  {user.username} | {user.email} | {user.phone}
                </h3>
                <p>
                  {user.name}. {user.company.name}. {user.company.catchPhrase}. {user.company.bs}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AllPosts;