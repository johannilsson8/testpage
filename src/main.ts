import "./style.css";
import { hero } from "./content";
import { timelineEvents, type TimelineEvent } from "./timeline";

const app = document.querySelector<HTMLDivElement>("#app");
const baseUrl = import.meta.env.BASE_URL;

if (!app) {
  throw new Error("App root not found");
}

app.innerHTML = `
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">${hero.eyebrow}</p>
      <h1>${hero.title}</h1>
      <p class="lede">${hero.lede}</p>
    </section>

    <section class="timeline" aria-label="Timeline">
      ${timelineEvents.map(renderEvent).join("")}
    </section>
  </main>
`;

function renderEvent(event: TimelineEvent) {
  return `
    <article class="event-card">
      <div class="event-meta">
        <span class="event-time">${event.date}</span>
      </div>
      <div class="event-body">
        <div class="dot" aria-hidden="true"></div>
        <div class="content">
          <h2>${event.title}</h2>
          <p>${event.body}</p>
          ${
            event.image
              ? `
                <figure class="photo">
                  <img
                    class="photo-frame"
                    src="${resolveAssetPath(event.image.src)}"
                    alt="${event.image.alt}"
                    loading="lazy"
                  />
                </figure>
              `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function resolveAssetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${baseUrl}${path.slice(1)}`;
}
