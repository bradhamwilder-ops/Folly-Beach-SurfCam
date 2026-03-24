const siteConfig = {
  streamEmbedUrl:
    "https://www.youtube.com/embed/jfKfPfyJRdk?si=7FfP0r8vQ7IB5rYV",
  sponsors: {
    era: {
      name: "Bradham Wilder",
      tier: "Hero Placement",
      body:
        "ERA Wilder Realty gets premium visibility beside the livestream with room for an exact logo, a short market-focused pitch, and a direct response CTA.",
      url: "https://bradhamwilder.erawilderrealty.com/",
      cta: "Explore Listings",
      logoPath: "",
      logoAlt: "Bradham Wilder / ERA Wilder Realty logo",
      fallback: "ERA",
    },
    "five-palms": {
      name: "Five Palms Media",
      tier: "Media Partner",
      body:
        "Five Palms Media can anchor production, editing, and promotion with a clean native card that feels integrated with the stream experience.",
      url: "#",
      cta: "Visit Sponsor",
      logoPath: "",
      logoAlt: "Five Palms Media logo",
      fallback: "FPM",
    },
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

Object.entries(siteConfig.sponsors).forEach(([sponsorKey, sponsor]) => {
  document.querySelectorAll(`[data-sponsor-link="${sponsorKey}"]`).forEach((link) => {
    if (sponsor.url && sponsor.url !== "#") {
      link.href = sponsor.url;
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.href = "./advertise.html";
    }
  });

  document.querySelectorAll(`[data-sponsor-cta="${sponsorKey}"]`).forEach((node) => {
    node.textContent = sponsor.cta;
  });

  document
    .querySelectorAll(`[data-sponsor-card="${sponsorKey}"] [data-sponsor-field="name"]`)
    .forEach((node) => {
      node.textContent = sponsor.name;
    });

  document
    .querySelectorAll(`[data-sponsor-card="${sponsorKey}"] [data-sponsor-field="body"]`)
    .forEach((node) => {
      node.textContent = sponsor.body;
    });

  document
    .querySelectorAll(`[data-sponsor-card="${sponsorKey}"] [data-sponsor-field="tier"]`)
    .forEach((node) => {
      node.textContent = sponsor.tier;
    });

  document.querySelectorAll(`[data-sponsor-logo="${sponsorKey}"]`).forEach((img) => {
    if (sponsor.logoPath) {
      img.src = sponsor.logoPath;
      img.alt = sponsor.logoAlt;
      img.hidden = false;
    } else {
      img.hidden = true;
    }
  });

  document
    .querySelectorAll(`[data-sponsor-logo-fallback="${sponsorKey}"]`)
    .forEach((fallback) => {
      fallback.textContent = sponsor.fallback;
      fallback.hidden = Boolean(sponsor.logoPath);
    });
});
