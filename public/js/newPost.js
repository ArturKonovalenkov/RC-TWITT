// const postForm = document.querySelector("#postForm");
// const oldCard = document.querySelector(".post_allPost");

// postForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   console.log("hresultlo");
//   const data = new FormData(postForm);
//   const res = Object.fromEntries(data);
//   //   console.log(res);
//   const response = await fetch("/kabinet", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(res),
//   });

//   const result = await response.json();
//   //   console.log(result);
//   if (result) {
//     const newCard = document.createElement("div");
//     newCard.className = "card";
//     newCard.innerHTML = `
//       <div key=${result.id} class='post_allPost'>
//           <div class="card w-75">
//     <div class="card-body">
//     <div class='user_login'>
//       <div clas='reiting'>
//         <div class='like'>
//           <img class='img_like' id=${
//             result.id
//           } src="/images/icon/love.png" alt="like" />
//           <div> ${result.countLike}</div>
//         </div>
//         <div class='dislike'>
//         <img class='img_dislike' id=${
//           result.id
//         } src="/images/icon/dislike.png" alt="dislike" />
//         <div>${result.countDisLike}</div>

//         </div>
//       </div>
//       <div class='login_ava'>

//       <p className='name_users_lenta'>${
//         users.find((val) => val.id === result.userId).login
//       }</p>

//         <img class='img_icon_lenta' src="/images/ava4.jpg" alt="ava" />
//         </div>
//       </div>
//       <div class='card_body'>
//       <p class="card-text">${result.body}</p>
//       </div>
//       <div class='card_btn'>
//       <a href=/edit/${
//         result.id
//       } type="submit" className="edit btn btn-primary" name=${
//       result.id
//     }>ИЗМЕНИТЬ</a>
//       <a type="button" className="dresultete btn btn-danger" name=${
//         result.id
//       }>УДАЛИТЬ</a>
//       </div>
//     </div>
//   </div>
//           </div>
//       `;

//     oldCard.prepend(newCard);
//   }
// });
