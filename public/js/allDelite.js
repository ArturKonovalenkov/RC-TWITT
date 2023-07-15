const deleteBtn = document.querySelector(".kabinet");

deleteBtn.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-danger")) {
    e.preventDefault();
    console.log("22");
    const data = { id: e.target.name };
    // console.log(data);
    const response = await fetch(`/kabinet/delete/${data.id}`, {
      method: "DELETE",
    });
    e.target.closest(".post_allPost").remove();
  }
});
