const btn = document.querySelector(".kabinet_post");
const card = document.querySelector(".post_allPost");
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("hi");
  try {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");

    const { message } = await data.json();
    const newCard = `

    <img class="dog_img" src="${message}" alt="dog"/>
    

    `;
    card.innerHTML = newCard;
    console.log(message);
  } catch (error) {
    console.log("error", error);
  }
});
