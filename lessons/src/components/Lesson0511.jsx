import React, { useEffect, useState } from 'react'
import axios from 'axios';

// const Lesson0511 = () => {
    
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         async function load() {
//                 try {
//                     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//                     const data = await res.json();
//                     setPosts(data);
//                 } catch (error) {
//                     console.error(error);
//                 }
//             }
//             load();
//         }, []);

        
//         return (
//             <div>
//         <h2>Posts fetch</h2>
//         {posts.slice(-5).map(post => (
//             <div key={post.id} >
//                 <h2>{post.userId}</h2>
//                 <h3>{post.title}</h3>
//                 <p>{post.body}</p>
//             </div>
//         ))}
//     </div>
//   )
// }



function Lesson0511() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get("https://admin.kolkhisea.ge/api/gallery");
        console.log(response.data);
        setPhotos(response.data.content);
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setError("ვერ მოხერხდა გალერეის ჩატვირთვა.");
      }
    };

    fetchGallery();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>გალერეა</h2>
      {photos.length > 0 ? (
        photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo.image_url}
            alt={photo.text?.ka || photo.text?.en || `Photo ${idx + 1}`}
            style={{ width: "700px", margin: "10px" }}
          />
        ))
      ) : (
        <p>Loading photos...</p>
      )}
    </div>
  );
}




export default Lesson0511


// fetch-ის გაუმჯობესებული ვერსია axios
// axios არის promise-ზე დაფუძნებული ბიბლიოთეკა HTTP მოთხოვნების გასაკეთებლად
// axios-ის გამოყენებით შეგიძლიათ მარტივად გაუშვათ GET, POST, PUT, DELETE და სხვა ტიპის მოთხოვნები
// axios ავტომატურად გარდაქმნის JSON მონაცემებს JavaScript ობიექტებად
// axios-ის ინსტალაცია: npm install axios
// axios-ის გამოყენების მაგალითი:
/*
import axios from 'axios';  
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); 
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
*/