fetch("http://localhost:3000/api/skins")
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("skin-gallery");
    gallery.innerHTML = data.map(skin => `
      <div>
        <a href="skin.html?name=${encodeURIComponent(skin.name)}&image=${encodeURIComponent(skin.image)}">
          <img src="${skin.image}" alt="${skin.name}" style="width:100%">
          <p>${skin.name}</p>
        </a>
      </div>`).join("");
  });