const form = document.getElementById("addForm");
const galleryDiv = document.getElementById("admin-gallery");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  await fetch("http://localhost:3000/api/skins", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, image })
  });
  alert("Adicionada!");
});
