
const SUPABASE_URL = "https://hjbhrwsxsxngdilyxdnv.supabase.co";
const SUPABASE_KEY = "sb_publishable_-jaTVdrK5ohi1d0Zt5J-Qg_Le--BMFf";

async function loadNewsEvents() {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/news?select=*`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );

    console.log("STATUS:", response.status);

    const data = await response.json();
    console.log("DATA:", data);

    if (!response.ok) {
      console.error("Supabase error:", data);
      return;
    }

    const container = document.getElementById("newsContainer");

    if (!container) {
      console.error("newsContainer not found in DOM");
      return;
    }

    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No news available.</p>";
      return;
    }

    data.forEach(item => {
      const card = document.createElement("article");
      card.className = "news-card";

card.innerHTML = `
  <img src="${item.images}" alt="${item.title}">
  <div class="news-content">
    <div class="news-meta">
      <span><i class="fa-solid fa-user-pen"></i> ${item.author}</span>
      <span><i class="fa-regular fa-calendar-days"></i> 
        ${new Date(item.created_at).toDateString()}
      </span>
    </div>
    <p class="news-body">${item.body}</p>
  </div>
`;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

loadNewsEvents();
