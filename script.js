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
