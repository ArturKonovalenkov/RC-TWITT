const deleteBtn = document.querySelector(".kabinet_post");

deleteBtn.addEventListener("click", async (e) => {
  if (e.target.classList.contains("deleteFriends")) {
    e.preventDefault();
    console.log("hf");
    const data = { id: e.target.name };
    console.log("data", data);
    // console.log(data);
    const response = await fetch(`/friends/delete/${data.id}`, {
      method: "DELETE",
    });
    e.target.closest(".table").remove();
  }
});
