const form = document.querySelector("#infoBtn");

form.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = { id: e.target.name };
  if (e.target.classList.contains("delete")) {
    const response = await fetch(`/delete/${data.id}`, { method: "DELETE" });
    e.target.closest(".card").remove();
  } else if (e.target.classList.contains("info")) {
    const response = await fetch(`/infouser/${data.id}`, { method: "GET" });
    const result = await response.json();
    console.log(result);
    const cards = document.querySelector("#infoBtn");
    cards.innerHTML = " ";
    const paint = document.createElement("div");
    paint.className = "container_cards";
    paint.innerHTML = `<div class="card" style="width: 18rem;" >
         <div class="card-body">
           <p class="card-text">Name: ${result.login} ${result.email}</p>
         </div>
       </div>`;
    cards.appendChild(paint);
  }
});
