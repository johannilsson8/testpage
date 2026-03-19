import "./style.css";
import { hero } from "./content";
import { timelineEvents, type TimelineEvent } from "./timeline";

const app = document.querySelector<HTMLDivElement>("#app");

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
                  <div
                    class="photo-frame"
                    role="img"
                    aria-label="${event.image.label}"
                    style="--photo-a: ${event.image.palette[0]}; --photo-b: ${event.image.palette[1]};"
                  >
                    <span>${event.image.label}</span>
                  </div>
                </figure>
              `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}
