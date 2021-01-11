// ===================================================

// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const data = {
    
        "name": "Jacques Gluke",
        "tag": "jgluke",
        "location": "Ocho Rios, Jamaica",
        "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
        "stats": {
          "followers": 5603,
          "views": 4827,
          "likes": 1308
        }
};

const painting = (
<div class="profile">
  <div class="description">
    <img
      src={data.avatar}
      alt={data.name}
      class="avatar"
    />
    <p class="name">{data.name}</p>
    <p class="tag">@{data.tag}</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{data.stats.likes}</span>
    </li>
  </ul>
</div>
);

ReactDOM.render(painting, document.querySelector("#root"))
