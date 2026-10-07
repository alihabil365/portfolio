(() => {
  const items = [
    ["about", "About Me", "profile"],
    ["experience", "Experience", "case"],
    ["projects", "My Projects", "board"],
    ["skills", "My Toolkit", "chip"],
    ["beyond-work", "Other Work", "camera"],
    ["contact", "Contact Me", "mail"]
  ];
  const drawings = {
    profile:'<circle cx="32" cy="23" r="10" fill="url(#paper)"/><path d="M13 53c0-15 8-21 19-21s19 6 19 21" fill="url(#paper)"/><path d="M29 37l-4 7 7 6 7-6-4-7" fill="#556a47"/>',
    case:'<path d="M23 18v-7h18v7" fill="none" stroke="#e1e5d7" stroke-width="5"/><rect x="6" y="18" width="52" height="37" rx="4" fill="url(#paper)"/><path d="M7 30h50v7H7" fill="#637953"/><rect x="28" y="30" width="8" height="11" rx="2" fill="#c4d89b"/>',
    board:'<rect x="6" y="10" width="52" height="45" rx="4" fill="url(#green)"/><g fill="none" stroke="#d7e3bc" stroke-width="2"><path d="M7 22h12l7 7h10l7-7h14M7 44h13l7-7h10l8 8h13M20 11v8m24-8v8M19 55V45m25 10v-8"/></g><rect x="25" y="23" width="15" height="17" fill="#293d28" stroke="#bdd292"/><circle cx="13" cy="17" r="2" fill="#e2e6d9"/><circle cx="51" cy="48" r="2" fill="#e2e6d9"/>',
    chip:'<g stroke="#cbd4b7" stroke-width="4"><path d="M20 7v10m12-10v10M44 7v10M20 47v10m12-10v10m12-10v10M7 20h10M7 32h10M7 44h10m30-24h10M47 32h10M47 44h10"/></g><rect x="15" y="15" width="34" height="34" rx="4" fill="url(#green)" stroke="#e6e9dc" stroke-width="2"/><path d="M24 32h16m-8-8v16" stroke="#edf1dd" stroke-width="3"/>',
    camera:'<path d="M21 17l4-7h15l4 7" fill="#b9c5a6"/><rect x="5" y="17" width="54" height="36" rx="5" fill="url(#paper)"/><circle cx="32" cy="35" r="14" fill="#3c4d37"/><circle cx="32" cy="35" r="9" fill="url(#green)"/><circle cx="29" cy="32" r="3" fill="#dfe9cf"/><rect x="47" y="22" width="7" height="4" fill="#6e805d"/>',
    mail:'<rect x="5" y="14" width="54" height="37" rx="4" fill="url(#paper)"/><path d="M6 16l26 20 26-20M6 50l19-18m33 18L39 32" fill="none" stroke="#8d9c7b" stroke-width="2"/><path d="M40 6h16v16m0-16L39 23" fill="none" stroke="#bddc88" stroke-width="5"/>'
  };
  const icon = type => '<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="paper" x2=".3" y2="1"><stop stop-color="#fffdf1"/><stop offset="1" stop-color="#b8c2a7"/></linearGradient><linearGradient id="green" x2=".5" y2="1"><stop stop-color="#91ab71"/><stop offset="1" stop-color="#455d3a"/></linearGradient></defs>'+drawings[type]+'</svg>';
  const nav = document.createElement("nav");
  nav.className = "desktop-icons";
  nav.setAttribute("aria-label", "Desktop shortcuts");
  nav.innerHTML = items.map(([id,label,type]) => '<a class="desktop-shortcut" href="#'+id+'">'+icon(type)+'<span>'+label+'</span></a>').join("");
  document.querySelector(".desktop-bg").prepend(nav);
  document.body.classList.add("desktop-mode");
  const windows = [...document.querySelectorAll("main > .section-window")];
  const home = document.querySelector(".top-window");
  windows.forEach(win => {
    const controls = win.querySelector(".window-controls");
    controls.removeAttribute("aria-hidden");
    controls.innerHTML = '<button type="button" class="desktop-close" aria-label="Close '+win.querySelector("h2").textContent+' window">×</button>';
    controls.querySelector("button").addEventListener("click", () => { location.hash = "top"; });
  });
  function showWindow(focus) {
    const id = location.hash.slice(1);
    const selected = windows.find(win => win.id === id);
    windows.forEach(win => { win.hidden = win !== selected; });
    home.hidden = Boolean(selected);
    nav.querySelectorAll("a").forEach(a => {
      if (a.hash === "#"+id) a.setAttribute("aria-current","page");
      else a.removeAttribute("aria-current");
    });
    document.querySelector(".task-pill").textContent = selected ? selected.querySelector("h2").textContent : "Ali Habil / Desktop";
    if (focus && selected) {
      const heading = selected.querySelector("h2");
      heading.tabIndex = -1;
      heading.focus({preventScroll:true});
    } else if (focus) {
      nav.querySelector('a[href="#'+(showWindow.previous || "about")+'"]')?.focus({preventScroll:true});
    }
    if (selected) showWindow.previous = selected.id;
    window.scrollTo(0,0);
  }
  window.addEventListener("hashchange", () => showWindow(true));
  document.addEventListener("keydown", event => {
    if (!event.defaultPrevented && event.key === "Escape" && !document.getElementById("modalBackdrop").classList.contains("open") && windows.some(win=>!win.hidden)) location.hash="top";
  });
  document.querySelector(".start-button").textContent = "⌘ Start";
  document.querySelector(".skip-link").href = "#about";
  showWindow(false);
})();

