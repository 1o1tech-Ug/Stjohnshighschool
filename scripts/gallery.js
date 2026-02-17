const SUPABASE_URL = "https://hjbhrwsxsxngdilyxdnv.supabase.co";
const SUPABASE_KEY = "sb_publishable_-jaTVdrK5ohi1d0Zt5J-Qg_Le--BMFf";

let aLevel = [];
let oLevel = [];
let aIndex = 0;
let oIndex = 0;

async function loadGallery() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/gallery?select=*`,
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      }
    }
  );

  const data = await response.json();

  // Clear arrays
  aLevel = [];
  oLevel = [];

  // Categorize
  data.forEach(item => {
    if (item.title === "A'level") aLevel.push(item);
    if (item.title === "O'level") oLevel.push(item);
  });

  if (aLevel.length) showALevel();
  if (oLevel.length) showOLevel();
}

function showALevel() {
  document.getElementById("a-image").src = aLevel[aIndex].images;
  document.getElementById("a-caption").textContent = aLevel[aIndex].body;
}

function showOLevel() {
  document.getElementById("o-image").src = oLevel[oIndex].images;
  document.getElementById("o-caption").textContent = oLevel[oIndex].body;
}

// Navigation
document.getElementById("a-next").onclick = () => {
  aIndex = (aIndex + 1) % aLevel.length;
  showALevel();
};

document.getElementById("a-prev").onclick = () => {
  aIndex = (aIndex - 1 + aLevel.length) % aLevel.length;
  showALevel();
};

document.getElementById("o-next").onclick = () => {
  oIndex = (oIndex + 1) % oLevel.length;
  showOLevel();
};

document.getElementById("o-prev").onclick = () => {
  oIndex = (oIndex - 1 + oLevel.length) % oLevel.length;
  showOLevel();
};

loadGallery();