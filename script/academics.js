
const SUPABASE_URL = "https://hjbhrwsxsxngdilyxdnv.supabase.co";
const SUPABASE_KEY = "sb_publishable_-jaTVdrK5ohi1d0Zt5J-Qg_Le--BMFf";

async function loadAcademicGiants() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/academics?select=*`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      }
    }
  );

  const data = await response.json();
  const grid = document.getElementById("giantsGrid");

  grid.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "giant-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="giant-content">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <span>${new Date(item.time).toDateString()}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

loadAcademicGiants();
