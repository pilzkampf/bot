/**
 * Schriftgrößenumschalter für Material for MkDocs (robuste Version)
 */

function initFontToggle() {
  const levels = ["font-normal", "font-large", "font-xlarge"];
  const storageKey = "fontSizeMode";

  // Aktuelle Einstellung laden
  const current = localStorage.getItem(storageKey) || "font-normal";
  document.documentElement.classList.add(current);

  // Stelle sicher, dass der Header existiert
  const header = document.querySelector(".md-header__option");
  if (!header) {
    console.warn("⚠️ Font toggle: Header not found yet, retrying...");
    setTimeout(initFontToggle, 300); // Retry später
    return;
  }

  // Button erzeugen
  const button = document.createElement("button");
  button.className = "md-header__button md-icon font-toggle";
  button.title = "Schriftgröße ändern";

  // Verwende Material Icon
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 4v3h5v12h3V7h5V4H9zM4 8v12h3v-5h3v-3H7V8H4z"/>
    </svg>
  `;

  header.parentNode.insertBefore(button, header);

  // Klickverhalten
  button.addEventListener("click", () => {
    const currentClass = document.documentElement.classList.value.match(/font-\w+/)?.[0] || "font-normal";
    let next = levels[(levels.indexOf(currentClass) + 1) % levels.length];

    levels.forEach(l => document.documentElement.classList.remove(l));
    document.documentElement.classList.add(next);
    localStorage.setItem(storageKey, next);
  });
}

// Warten bis Material for MkDocs fertig gerendert ist
document.addEventListener("DOMContentLoaded", () => {
  // Versuche nach kleinem Delay, da Material async rendert
  setTimeout(initFontToggle, 500);
});
