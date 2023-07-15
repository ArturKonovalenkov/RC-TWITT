const container = document.querySelector(".kabinet_two");

// const card = document.querySelector(".card");

container.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete")) {
    e.preventDefault();
    console.log("delete", 1);
    const data = { id: e.target.name };
    // console.log(data);
    const response = await fetch(`/kabinet/delete/${data.id}`, {
      method: "DELETE",
    });
    e.target.closest(".post_allPost").remove();
  } else if (e.target.classList.contains("success")) {
    e.preventDefault();

    const data = { id: e.target.name };
    console.log(data);
    if (e.target.classList.contains("success")) {
      try {
        const response = await fetch(`/lenta/create/${data.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log("result=>", result);
        if (result.err) {
          alert(result.err);
        } else {
          alert(result.msg);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    // } else if (e.target.classList.contains("edit")) {
    //   e.preventDefault();
    //   console.log("edit");
    //   const data = { id: e.target.name };
    //   console.log("data", data);
    //   const response = await fetch(`/lenta/edit/${data.id}`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    //   const result = await response.json();
    //   console.log("response", result);
    // }
    // card.innerHTML = " ";
    // const newCard = `
    // <div class="card-body">
    // <div class='user_login'>
    //     <p class='name_users_lenta'>{users.find((val) => val.id === el.userId)?.login}</p>
    //     <img class='img_icon_lenta' src="/images/ava4.jpg" alt="ava" />
    //   </div>
    //   <div class='card_body'>
    //   <p class="card-text">{el.body}</p>
    //   </div>
    //   <div class='card_btn'>
    //   <a href={/edit/${result.id}} type="submit" class="edit btn btn-primary" name={${result.id}}>ИЗМЕНИТЬ</a>
    //   <a type="button" className="delete btn btn-danger" name={${result.id}}>УДАЛИТЬ</a>
    //   </div>
    // </div>
    // `;
    // card.insertAdjacentHTML("beforeend", newCard);
  }
});
