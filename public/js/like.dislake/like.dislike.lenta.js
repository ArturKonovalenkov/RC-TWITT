const likForm = document.querySelector(".kabinet_two");

const likeDiv = document.querySelector(".like");
const dislike = document.querySelector(".dislike");

const imgLike = document.querySelector(".img_like");
const imgDisLike = document.querySelector(".img_dislike");

likForm.addEventListener("click", async (e) => {
  if (e.target.classList.contains("img_like")) {
    e.preventDefault();
    console.log(e.target.id);
    try {
      const response = await fetch(`/lenta/like/${e.target.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e.target),
      });
      const result = await response.json();
      e.target.nextSibling.innerText = result.countLike;
      likeDiv.prepend(imgLike);
    } catch (error) {
      console.log("error", error);
    }
  } else if (e.target.classList.contains("img_dislike")) {
    e.preventDefault();
    console.log("hi");
    console.log("dsaas=>", e.target.id);
    try {
      const response = await fetch(`/lenta/dislike/${e.target.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e.target),
      });
      const result = await response.json();
      e.target.nextSibling.innerText = result.countDisLike;
      dislike.prepend(imgDisLike);
    } catch (error) {}
  }
});
