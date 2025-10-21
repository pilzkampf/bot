/**
 * Dynamische Sprachumschaltung für Material for MkDocs
 * ----------------------------------------------------
 * Beispiel:
 * /de/battle/  -> /en/battle/
 * /en/profile/ -> /de/profile/
 * 
 * Falls die Zielseite in der anderen Sprache nicht existiert,
 * wird automatisch auf die Startseite der jeweiligen Sprache weitergeleitet.
 */

document.addEventListener("DOMContentLoaded", () => {
  const langLinks = document.querySelectorAll('a[hreflang]');
  const currentPath = window.location.pathname;

  langLinks.forEach(link => {
    const lang = link.getAttribute('hreflang');

    // Ermittle das Ziel basierend auf der aktuellen Sprache
    let targetPath = currentPath;
    if (currentPath.startsWith("/de/") && lang === "en") {
      targetPath = currentPath.replace(/^\/de\//, "/en/");
    } else if (currentPath.startsWith("/en/") && lang === "de") {
      targetPath = currentPath.replace(/^\/en\//, "/de/");
    } else {
      // Wenn der Nutzer sich außerhalb eines Sprachpfads befindet → einfach Link lassen
      return;
    }

    // Teste, ob die Zielseite existiert (HEAD-Anfrage)
    fetch(targetPath, { method: "HEAD" })
      .then(res => {
        if (res.ok) {
          // Seite existiert → Link anpassen
          link.href = targetPath;
        } else {
          // Seite existiert nicht → Fallback zur Sprachstartseite
          link.href = "/" + lang + "/";
        }
      })
      .catch(() => {
        // Fallback bei Netzwerkfehler oder lokalem mkdocs serve
        link.href = "/" + lang + "/";
      });
  });
});
