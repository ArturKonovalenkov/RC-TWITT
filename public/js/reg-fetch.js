const form = document.querySelector("#regForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("hi");
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log(res);
  if (!res.login || !res.email || !res.password) {
    alert("Ведите данные");
  } else {
    try {
      const response = await fetch("/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      console.log("result:", result);
      if (result.err) {
        alert(result.err);
      }
      if (result.message) {
        window.location.href = "/kabinet";
      }
    } catch (error) {
      alert("Тебе конец");
    }
  }
});
// const editBtn = document.querySelector(".edit");

// editBtn.addEventListener("click", async (e) => {
//   e.preventDefault();
// const userId = e.target.name;
// const response = await fetch(`/edit/${userId}`, { method: "GET" });
// const user = await response.json();

// const form = document.querySelector("#editForm");
// const loginInput = form.querySelector("#login-input");
// const emailInput = form.querySelector("#email-input");

// loginInput.value = user.login;
// emailInput.value = user.email;

// // Обработчик события на отправку формы
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const body = {};
//   formData.forEach((value, key) => (body[key] = value));

//   const updateResponse = await fetch(`/edit/${userId}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });

//   // Обработка ответа на сохранение данных
//   if (updateResponse.ok) {
//     console.log("User data updated successfully");
//   } else {
//     console.error("Failed to update user data");
//   }
// });
//   console.log("hi");
// });
