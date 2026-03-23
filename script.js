const siteConfig = {
  streamEmbedUrl:
    "https://www.youtube.com/embed/jfKfPfyJRdk?si=7FfP0r8vQ7IB5rYV",
  sponsors: {
    era: "#",
    "five-palms": "#",
  },
};

const streamEmbed = document.querySelector("#streamEmbed");
if (streamEmbed && siteConfig.streamEmbedUrl) {
  streamEmbed.src = siteConfig.streamEmbedUrl;
}

document.querySelectorAll("[data-sponsor-link]").forEach((link) => {
  const sponsorKey = link.getAttribute("data-sponsor-link");
  const sponsorUrl = siteConfig.sponsors[sponsorKey];

  if (sponsorUrl && sponsorUrl !== "#") {
    link.href = sponsorUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Visit Sponsor";
  }
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

function setActiveTab(tabId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tabId);
  });

  window.location.hash = tabId;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

const initialTab = window.location.hash.replace("#", "");
if (initialTab && document.querySelector(`[data-panel="${initialTab}"]`)) {
  setActiveTab(initialTab);
}

let currentBanner = 0;
const bannerTrack = document.querySelector("#adTrack");
const bannerDots = document.querySelectorAll("[data-banner-dot]");

function setBanner(index) {
  if (!bannerTrack || !bannerDots.length) {
    return;
  }

  currentBanner = (index + bannerDots.length) % bannerDots.length;
  bannerTrack.style.transform = `translateX(-${currentBanner * 100}%)`;

  bannerDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentBanner);
  });
}

bannerDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setBanner(Number(dot.dataset.bannerDot));
  });
});

if (bannerTrack && bannerDots.length) {
  setInterval(() => {
    setBanner(currentBanner + 1);
  }, 5000);
}
