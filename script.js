const siteConfig = {
  streamEmbedUrl:
    "https://www.youtube.com/embed/jfKfPfyJRdk?si=7FfP0r8vQ7IB5rYV",
  sponsors: {
    era: "https://bradhamwilder.erawilderrealty.com/",
    "five-palms": "#",
  },
};

const streamEmbed = document.querySelector("#streamEmbed");
if (streamEmbed && siteConfig.streamEmbedUrl) {
  streamEmbed.src = siteConfig.streamEmbedUrl;
}

const currentPage = document.body.dataset.page;
document.querySelectorAll("[data-page-link]").forEach((link) => {
  link.classList.toggle("active", link.dataset.pageLink === currentPage);
});

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
