const form = document.querySelector("#logForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log(res);
  if (!res.login || !res.password) {
    alert("ведите данные");
  } else {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      console.log("response:", result);
      if (result.err) {
        alert(result.err);
      } else {
        window.location.href = "/kabinet";
      }
    } catch (error) {
      alert("Тебе конец");
    }
  }
});
