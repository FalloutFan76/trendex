
/* ========================================
   TRENDEX — LÓGICA CORREGIDA
   Compatible con el HTML actual
======================================== */

const common = [
  ["📐", "Gran angular ×0,5", "Haz una foto amplia que muestre el tren y su entorno."],
  ["🚉", "Frontal o perfil completo", "Encuadra el tren desde una zona pública y segura."],
  ["🌙", "Ambiente especial", "Fotografía el tren de noche, con reflejos o iluminación interesante."]
];

const trains = [
  {
    id: "fgc-ut112",
    name: "FGC UT112",
    series: "Serie 112",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut112.jpg",
    color: "#e63946",
    description: "Unidad eléctrica de Ferrocarrils de la Generalitat de Catalunya.",
    specific: [
      ["🚆", "Vista lateral", "Fotografía la unidad completa desde un lugar seguro."],
      ["🔢", "Identificación", "Captura los números de la unidad." ]
    ]
  },
  {
    id: "fgc-ut113",
    name: "FGC UT113",
    series: "Serie 113",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut113.jpg",
    color: "#e63946",
    description: "Unidad de la flota de FGC.",
    specific: [
      ["🚆", "Vista lateral", "Fotografía la unidad completa."],
      ["🔢", "Identificación", "Fotografía el número identificativo."]
    ]
  },
  {
    id: "fgc-ut115",
    name: "FGC UT115",
    series: "Serie 115",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut115.jpg",
    color: "#e63946",
    description: "Unidad de la flota de FGC, la más nueva para viajeros.",
    specific: [
      ["🚆", "Vista lateral", "Fotografía la unidad completa."],
      ["🔢", "Señales luminosas", "Fotografía las luces del aviso sonoro de las puertas."]
    ]
  },
  {
    id: "fgc-ut211",
    name: "FGC UT211",
    series: "Serie 211",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut211.jpg",
    color: "#457b9d",
    description: "Unidad de la flota de FGC.",
    specific: [
      ["🚉", "Vista frontal", "Captura el frontal desde una zona pública."],
      ["🔢", "Cabina", "Foto dentro de la cabina."]
    ]
  },
  {
    id: "fgc-ut213",
    name: "FGC UT213",
    series: "Serie 213",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut213.jpg",
    color: "#457b9d",
    description: "Unidad eléctrica de FGC.",
    specific: [
      ["🚆", "Vista lateral", "Muestra la unidad completa en la foto."],
      ["🛤️", "En el taller", "Incluye el taller de Martorell Enllaç."]
    ]
  },
  {
    id: "fgc-ut400",
    name: "FGC UT400",
    series: "Serie 400",
    operator: "FGC",
    category: "Tren eléctrico",
    glyph: "🚆",
    image: "fgc-ut400.jpg",
    color: "#6a4c93",
    description: "Es el tren Granota, ya lo conoces",
    specific: [
      ["🚆", "Vista lateral", "Fotografía el tren completo."],
      ["🔢", "Granota", "Captura los los faros superores, le dan su apodo."]
    ]
  },
  {
    id: "renfe-447",
    name: "Renfe 447",
    series: "Serie 447",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe-447.jpg",
    color: "#f4a261",
    description: "Unidad eléctrica de la serie 447 de Renfe.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal del tren."],
      ["🔢", "Identificación", "Captura el número de la unidad."]
    ]
  },
 {
    id: "renfe-448",
    name: "Renfe 448",
    series: "Serie 448",
    operator: "Rodalies",
    category: "Media Distancia",
    glyph: "🚆",
    image: "renfe-448.jpg",
    color: "#f4a261",
    description: "Unidad eléctrica de la serie 448 de Renfe.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal del tren."],
      ["🔢", "Identificación", "Captura el número de la unidad."]
    ]
  },
    {
    id: "renfe-449",
    name: "Renfe 449",
    series: "Serie 449",
    operator: "Rodalies",
    category: "Media Distancia",
    glyph: "🚆",
    image: "renfe-449.jpg",
    color: "#f4a261",
    description: "Unidad eléctrica de la serie 449 de Renfe.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal del tren."],
      ["🔢", "Identificación", "Captura el número de la unidad."]
    ]
  },
  {
    id: "renfe-450",
    name: "Renfe 450",
    series: "Serie 450",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe-450.jpg",
    color: "#f4a261",
    description: "Tren de dos pisos de la serie 450.",
    specific: [
      ["🏢", "Dos pisos", "Intenta mostrar la altura de los coches."],
      ["🚆", "Vista lateral", "Fotografía el tren completo."]
    ]
  },
  {
    id: "renfe-451",
    name: "Renfe 451",
    series: "Serie 451",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe-451.jpg",
    color: "#f4a261",
    description: "Unidad de dos pisos de la serie 451.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal."],
      ["🚆", "Vista lateral", "Intenta mostrar varios coches."]
    ]
  },
  {
    id: "renfe-465",
    name: "Renfe 465",
    series: "Serie 465",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe-465.jpg",
    color: "#2a9d8f",
    description: "Unidad eléctrica de la serie 465.",
    specific: [
      ["🚆", "Vista lateral", "Muestra la unidad completa."],
      ["🔢", "Identificación", "Captura el número de la unidad."]
    ]
  },
  {
    id: "renfe-470",
    name: "Renfe 470",
    series: "Serie 470",
    operator: "Rodalies",
    category: "Media Distancia",
    glyph: "🚆",
    image: "renfe-470.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 470 de Renfe.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde las vias."],
      ["🛤️", "En ruta", "Incluye el entorno ferroviario en la captura."]
    ]
  },
  {
    id: "renfe-100",
    name: "Renfe s100",
    series: "Serie s100",
    operator: "Renfe",
    category: "Alta Velocidad",
    glyph: "🚆",
    image: "renfe-100.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 100 del Ave, esta basado en el TGV Francés y es el primer Ave de España.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "Sobre puente", "Haz la foto desde un puente."]
    ]
  },
   {
    id: "renfe-102",
    name: "Renfe s102",
    series: "Serie s102",
    operator: "Renfe",
    category: "Alta Velocidad",
    glyph: "🚆",
    image: "renfe-112.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 102 (Pato) del Ave.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el pico del pato desde un lugar seguro."],
      ["🌁", "Sobre puente", "Haz la foto desde un puente."]
    ]
  },
   {
    id: "renfe-103",
    name: "Renfe s103",
    series: "Serie s103",
    operator: "Renfe",
    category: "Alta Velocidad",
    glyph: "🚆",
    image: "renfe-103.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 103 (Velaro) del Ave, esta basado en el Ice 3 de Alemania.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "Sobre puente", "Haz la foto desde un puente."]
    ]
  },
  {
    id: "renfe-120",
    name: "Renfe s120",
    series: "Serie s120",
    operator: "Renfe",
    category: "Alvia",
    glyph: "🚆",
    image: "renfe-120.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 120 de Alvia, para largas distancias.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "Sobre puente", "Haz la foto desde un puente."]
    ]
  },
   {
    id: "renfe-130",
    name: "Renfe s130",
    series: "Serie s130",
    operator: "Renfe",
    category: "Alta Velocidad",
    glyph: "🚆",
    image: "renfe-130.jpg",
    color: "#2a9d8f",
    description: "Unidad de la serie 130 (Patito) del Ave.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "Sobre puente", "Haz la foto desde un puente."]
    ]
  },
 {
    id: "renfe-252",
    name: "Renfe 252",
    series: "Serie 252",
    operator: "Renfe",
    category: "Locomotora",
    glyph: "🚆",
    image: "renfe-252.jpg",
    color: "#2a9d8f",
    description: "Locomotora de la serie 252 de Renfe, aún carga el Talgo.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "En el andén", "Haz la foto desde el andén."]
    ]
  },
  {
    id: "renfe-333",
    name: "Renfe 333",
    series: "Serie 333",
    operator: "Renfe",
    category: "Locomotora",
    glyph: "🚆",
    image: "renfe-333.jpg",
    color: "#2a9d8f",
    description: "Locomotora de la serie 333 de Renfe, recuerdos del tren de la Fresa.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "En su camino", "Haz la foto desde las vias."]
    ]
  },
{
  id: "metro-500",
  name: "Metro serie 500",
  series: "Serie 500",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-500.jpg",
  color: "#0072bc",
  description: "Tren de la serie 500 del metro de Barcelona, utilizado en la línea L11.",
  specific: [
    ["🚇", "Vista lateral", "Fotografía el tren completo desde una zona pública y segura."],
    ["🔢", "Identificación", "Captura el número identificativo del tren."]
  ]
},
{
  id: "metro-2100",
  name: "Metro serie 2100",
  series: "Serie 2100",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-2100.jpg",
  color: "#0072bc",
  description: "Tren de la serie 2100, asociado a la línea L4 del metro de Barcelona.",
  specific: [
    ["🚇", "Vista lateral", "Fotografía el tren completo desde el andén."],
    ["🔢", "Identificación", "Captura el número identificativo del tren."]
  ]
},
{
  id: "metro-5000",
  name: "Metro serie 5000",
  series: "Serie 5000",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-5000.jpg",
  color: "#0072bc",
  description: "Tren de la serie 5000, lo puedes ver en la L5 y a veces en la L3.",
  specific: [
    ["🚇", "Vista lateral", "Fotografía el tren completo desde un lugar seguro."],
    ["🚪", "Puertas", "Captura una imagen de las puertas y el exterior del tren."]
  ]
},
{
  id: "metro-6000",
  name: "Metro serie 6000",
  series: "Serie 6000",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-6000.jpg",
  color: "#0072bc",
  description: "Tren de la serie 6000, el de la línea L1 del metro de Barcelona.",
  specific: [
    ["🚇", "Vista lateral", "Fotografía el tren completo desde el andén."],
    ["🔢", "Identificación", "Captura el número identificativo del tren."]
  ]
},
{
  id: "metro-7000 / 8000",
  name: "Metro serie 7000 / 8000",
  series: "Serie 7000 / 8000",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-8000.jpg",
  color: "#0072bc",
  description: "Las unidades mas modernas del metro de Barcelona.",
  specific: [
    ["🚇", "Vista frontal", "Fotografía el frontal del tren desde una zona autorizada."],
    ["🔢", "Identificación", "Captura el número identificativo del tren."]
  ]
},
{
  id: "metro-9000",
  name: "Metro serie 9000",
  series: "Serie 9000",
  operator: "TMB",
  category: "Metro",
  glyph: "🚇",
  image: "metro-9000.jpg",
  color: "#0072bc",
  description: "El tren automatico del metro de Barcelona.",
  specific: [
    ["🚇", "Vista frontal", "Fotografía el frontal del tren desde una zona segura."],
    ["🛤️", "Terminal", "Consigue una foto del tren con el nombre de la estación de Can Zam."]
  ]
},
  {
    id: "tram-302",
    name: "Tram Citadis",
    series: "Serie 302",
    operator: "Tram",
    category: "Tanvia",
    glyph: "🚆",
    image: "tram-citadis.jpg",
    color: "#2a9d8f",
    description: "El iconico tranvia de la ciudad de Barcelona.",
    specific: [
      ["🚉", "Vista frontal", "Fotografía el frontal desde un lugar seguro."],
      ["🌁", "En tu camino y el suyo", "Haz la foto desde las vias."]
    ]
  },
];

const $ = id => document.getElementById(id);

const state = {
  filter: "Todos",
  query: "",
  selected: null,
  mission: null,
  stream: null,
  photos: loadPhotos()
};

function loadPhotos() {
  try {
    return JSON.parse(localStorage.getItem("trendexPhotos") || "{}");
  } catch {
    return {};
  }
}

function savePhotos() {
  try {
    localStorage.setItem("trendexPhotos", JSON.stringify(state.photos));
  } catch {
    notify("No hay espacio suficiente para guardar la colección.");
  }
}

function notify(message) {
  const toast = $("toast");
  if (!toast) {
    console.info("TrenDéx:", message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function allMissions(train) {
  return [...common, ...(train.specific || [])].map((m, i) => ({
    id: `${train.id}-${i}`,
    icon: m[0],
    title: m[1],
    description: m[2],
    type: i < 3 ? "Común" : "Específica"
  }));
}

function completedCount() {
  return Object.keys(state.photos).length;
}

function updateProgress() {
  const count = completedCount();
  const total = trains.reduce(
    (sum, train) => sum + allMissions(train).length,
    0
  );
  const percent = total ? Math.round(count / total * 100) : 0;

  if ($("discovered-count")) {
    $("discovered-count").textContent = trains.length;
  }
  if ($("captured-count")) {
    $("captured-count").textContent = count;
  }
  if ($("completion-count")) {
    $("completion-count").textContent = `${percent}%`;
  }
  if ($("collection-progress")) {
    $("collection-progress").setAttribute("aria-valuenow", percent);
  }
  if ($("collection-progress-bar")) {
    $("collection-progress-bar").style.width = `${percent}%`;
  }
  if ($("collection-summary-text")) {
    $("collection-summary-text").textContent =
      `${count} de ${total} misiones completadas`;
  }
}

function safeImagePath(filename) {
  return `images/${encodeURIComponent(filename || "")}`;
}

function applyImageFallback(container) {
  container.querySelectorAll("img[data-fallback]").forEach(img => {
    const fallback = img.parentElement.querySelector(".train-glyph, .detail-glyph");

    const showFallback = () => {
      img.hidden = true;
      if (fallback) fallback.hidden = false;
    };

    img.addEventListener("error", showFallback, { once: true });

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  });
}

function renderTrains() {
  const grid = $("train-grid");
  if (!grid) {
    console.error('TrenDéx: no existe el elemento con id="train-grid".');
    return;
  }

  const query = state.query.trim().toLocaleLowerCase("es");

  const list = trains.filter(train => {
    const filterMatch =
      state.filter === "Todos" || train.operator === state.filter;

    const searchable = [
      train.name,
      train.series,
      train.operator,
      train.category
    ].join(" ").toLocaleLowerCase("es");

    return filterMatch && searchable.includes(query);
  });

  const visibleCount = $("visible-count");
  if (visibleCount) {
    visibleCount.textContent = `${list.length} tren${list.length === 1 ? "" : "es"}`;
  }

  const emptyState = $("empty-state");
  if (emptyState) emptyState.hidden = list.length !== 0;

  grid.innerHTML = list.map((train, i) => {
    const missions = allMissions(train);
    const done = missions.filter(m => state.photos[m.id]).length;
    const index = String(trains.indexOf(train) + 1).padStart(3, "0");

    return `
      <button
        type="button"
        class="train-card"
        data-train="${train.id}"
        style="animation-delay:${Math.min(i, 8) * 35}ms"
        aria-label="Ver ficha de ${train.name}"
      >
        <div class="train-art" style="--soft:${train.color || "#f72585"}18">
          <img
            class="train-photo"
            data-fallback
            src="${safeImagePath(train.image)}"
            alt="${train.name}"
            loading="lazy"
          >
          <span class="train-glyph" hidden aria-hidden="true">${train.glyph || "🚆"}</span>
          <span class="train-index">#${index}</span>
          <span class="train-state">${done === missions.length ? "✓ Completo" : `${done}/${missions.length}`}</span>
        </div>
        <div class="train-info">
          <p class="operator">${train.operator} · ${train.category}</p>
          <h3>${train.name}</h3>
          <p>${train.series}</p>
          <div class="mini-progress">
            <i style="width:${missions.length ? done / missions.length * 100 : 0}%;background:${train.color || "#f72585"}"></i>
          </div>
        </div>
      </button>
    `;
  }).join("");

  applyImageFallback(grid);

  grid.querySelectorAll("[data-train]").forEach(button => {
    button.addEventListener("click", () => openTrain(button.dataset.train));
  });
}

function setActiveNavigation(view) {
  $("nav-catalog")?.classList.toggle("active", view !== "collection-view");
  $("nav-collection")?.classList.toggle("active", view === "collection-view");
}

function showView(view) {
  const catalog = $("catalog-view");
  const detail = $("detail-view");
  const collection = $("collection-view");

  if (catalog) catalog.hidden = view !== "catalog-view";
  if (detail) detail.hidden = view !== "detail-view";
  if (collection) collection.hidden = view !== "collection-view";

  catalog?.classList.toggle("active", view === "catalog-view");
  detail?.classList.toggle("active", view === "detail-view");
  collection?.classList.toggle("active", view === "collection-view");

  if (view === "catalog-view") {
    state.selected = null;
    renderTrains();
  }

  if (view === "collection-view") {
    renderGallery();
    renderMissions();
  }

  setActiveNavigation(view);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTrain(id) {
  const train = trains.find(item => String(item.id) === String(id));
  if (!train) return;

  state.selected = train;
  renderDetail();
  showView("detail-view");
}

function renderDetail() {
  const train = state.selected;
  const container = $("train-detail");
  if (!train || !container) return;

  const missions = allMissions(train);
  const done = missions.filter(m => state.photos[m.id]).length;

  container.innerHTML = `
    <div class="detail-hero">
      <div class="detail-art" style="--soft:${train.color || "#f72585"}18">
        <img
          class="detail-photo"
          data-fallback
          src="${safeImagePath(train.image)}"
          alt="${train.name}"
        >
        <span class="detail-glyph" hidden aria-hidden="true">${train.glyph || "🚆"}</span>
      </div>
      <div class="detail-copy">
        <p class="operator">${train.operator} · ${train.category}</p>
        <h1>${train.name}</h1>
        <p><strong>Serie:</strong> ${train.series}</p>
        <p>${train.description || ""}</p>
        <div class="mini-progress">
          <i style="width:${missions.length ? done / missions.length * 100 : 0}%;background:${train.color || "#f72585"}"></i>
        </div>
        <p>${done} de ${missions.length} misiones completadas</p>
      </div>
    </div>
    <div class="mission-header">
      <h2>Misiones fotográficas</h2>
      <span class="muted">${done}/${missions.length}</span>
    </div>
    <div class="missions-list">
      ${missions.map(mission => {
        const photo = state.photos[mission.id];
        return `
          <article class="mission ${photo ? "completed" : ""}">
            <div class="mission-icon">${photo ? "✓" : mission.icon}</div>
            <div class="mission-copy">
              <strong>${mission.title}</strong>
              <p>${photo ? "Foto guardada en tu colección." : mission.description}</p>
              <small>${mission.type}</small>
            </div>
            <button type="button" class="primary-button" data-mission="${mission.id}">
              ${photo ? "Ver foto" : "Capturar"}
            </button>
          </article>
        `;
      }).join("")}
    </div>
  `;

  applyImageFallback(container);

  container.querySelectorAll("[data-mission]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.mission;
      if (state.photos[id]) showExistingPhoto(id);
      else openCapture(id);
    });
  });
}

function renderMissions() {
  const container = $("missions-list");
  if (!container) return;

  container.innerHTML = trains.map(train => {
    const missions = allMissions(train);
    const done = missions.filter(m => state.photos[m.id]).length;

    return `
      <article class="mission-summary">
        <strong>${train.glyph || "🚆"} ${train.name}</strong>
        <p>${done} de ${missions.length} misiones completadas</p>
        <button type="button" class="secondary-button" data-open-train="${train.id}">
          Ver misiones
        </button>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-open-train]").forEach(button => {
    button.addEventListener("click", () => openTrain(button.dataset.openTrain));
  });
}

function openCapture(missionId) {
  const dialog = $("capture-dialog");
  if (!dialog || !state.selected) return;

  const mission = allMissions(state.selected).find(m => m.id === missionId);
  if (!mission) return;

  state.mission = missionId;

  const title = dialog.querySelector(".dialog-header h2");
  const description = dialog.querySelector(".dialog-description");
  const message = $("capture-message");

  if (title) title.textContent = mission.title;
  if (description) description.textContent = mission.description;
  if (message) {
    message.textContent = "";
    message.className = "capture-message";
  }

  $("camera-placeholder")?.classList.remove("hidden");
  if (!dialog.open) dialog.showModal();
}

function stopCamera() {
  if (state.stream) {
    state.stream.getTracks().forEach(track => track.stop());
    state.stream = null;
  }

  const video = $("camera-video");
  if (video) video.srcObject = null;

  $("take-photo")?.setAttribute("disabled", "");
}

async function openCamera() {
  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("La cámara necesita HTTPS y un navegador compatible.");
    }

    stopCamera();

    state.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    const video = $("camera-video");
    if (!video) throw new Error("No se encuentra la cámara en el HTML.");

    video.srcObject = state.stream;
    await video.play();

    $("camera-placeholder")?.classList.add("hidden");
    $("take-photo")?.removeAttribute("disabled");
    showMessage("Cámara lista. Puedes hacer la captura.", "success");
  } catch (error) {
    showMessage(error.message || "No se pudo abrir la cámara.", "error");
  }
}

function showMessage(text, type = "") {
  const message = $("capture-message");
  if (!message) {
    notify(text);
    return;
  }

  message.textContent = text;
  message.className = `capture-message ${type}`;
}

function captureNow() {
  const video = $("camera-video");
  const canvas = $("capture-canvas");

  if (!video || !canvas || !video.videoWidth) {
    showMessage("La cámara aún se está iniciando. Espera un momento.", "error");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);

  canvas.toBlob(blob => {
    if (blob) storePhoto(blob, new Date().toISOString(), "camera");
    else showMessage("No se pudo procesar la fotografía.", "error");
  }, "image/jpeg", 0.88);
}

function storePhoto(blob, iso, source) {
  const capturedAt = new Date(iso);
  const now = new Date();

  if (
    !iso ||
    Number.isNaN(capturedAt.getTime()) ||
    capturedAt > now ||
    now - capturedAt >= 12 * 60 * 60 * 1000
  ) {
    showMessage("La foto debe tener una fecha válida de las últimas 12 horas.", "error");
    return;
  }

  const train = state.selected;
  const mission = train && allMissions(train).find(m => m.id === state.mission);

  if (!train || !mission) {
    showMessage("No se ha encontrado la misión seleccionada.", "error");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    state.photos[state.mission] = {
      missionId: state.mission,
      trainId: train.id,
      trainName: train.name,
      missionName: mission.title,
      capturedAt: capturedAt.toISOString(),
      source,
      data: reader.result
    };

    savePhotos();
    updateProgress();
    renderDetail();
    renderGallery();
    showMessage("¡Misión completada! Foto guardada en este navegador.", "success");

    setTimeout(() => {
      const dialog = $("capture-dialog");
      if (dialog?.open) dialog.close();
    }, 900);
  };

  reader.onerror = () => showMessage("No se pudo guardar la imagen.", "error");
  reader.readAsDataURL(blob);
}

function showExistingPhoto(id) {
  const item = state.photos[id];
  const dialog = $("capture-dialog");
  const message = $("capture-message");
  if (!item || !dialog || !message) return;

  const title = dialog.querySelector(".dialog-header h2");
  const description = dialog.querySelector(".dialog-description");

  if (title) title.textContent = item.missionName;
  if (description) description.textContent = item.trainName;

  message.replaceChildren();
  const img = document.createElement("img");
  img.src = item.data;
  img.alt = item.missionName;
  img.style.cssText = "display:block;width:100%;border-radius:14px;margin-top:12px";
  message.appendChild(img);

  if (!dialog.open) dialog.showModal();
}

function renderGallery() {
  const gallery = $("photo-gallery");
  if (!gallery) return;

  const items = Object.values(state.photos)
    .sort((a, b) => new Date(b.capturedAt) - new Date(a.capturedAt));

  gallery.innerHTML = items.map(item => `
    <article class="gallery-item">
      <img src="${item.data}" alt="${item.missionName}" loading="lazy">
      <div>
        <strong>${item.missionName}</strong>
        <p>${item.trainName} · ${new Date(item.capturedAt).toLocaleString("es-ES")}</p>
      </div>
    </article>
  `).join("");

  const empty = $("gallery-empty");
  if (empty) empty.hidden = items.length > 0;

  const count = $("gallery-count");
  if (count) count.textContent = `${items.length} fotos`;
}

async function readExifDate(file) {
  const buffer = await file.slice(0, Math.min(file.size, 2 * 1024 * 1024)).arrayBuffer();
  const view = new DataView(buffer);

  if (view.byteLength < 4 || view.getUint16(0) !== 0xFFD8) return null;

  let p = 2;

  while (p + 4 < view.byteLength) {
    if (view.getUint8(p) !== 0xFF) break;

    const marker = view.getUint8(p + 1);
    const length = view.getUint16(p + 2);
    if (length < 2) break;

    if (marker === 0xE1 && p + length + 2 <= view.byteLength) {
      const start = p + 4;
      if (start + 14 > view.byteLength || view.getUint32(start) !== 0x45786966) return null;

      const tiff = start + 6;
      const byteOrder = view.getUint16(tiff);
      const little = byteOrder === 0x4949;
      if (!little && byteOrder !== 0x4D4D) return null;

      const read16 = offset =>
        offset >= 0 && offset + 2 <= view.byteLength ? view.getUint16(offset, little) : null;
      const read32 = offset =>
        offset >= 0 && offset + 4 <= view.byteLength ? view.getUint32(offset, little) : null;

      const ifdOffset = read32(tiff + 4);
      if (ifdOffset === null) return null;

      const ifd = tiff + ifdOffset;
      const count = read16(ifd);
      if (count === null) return null;

      for (let i = 0; i < count; i++) {
        const entry = ifd + 2 + i * 12;
        if (entry + 12 > view.byteLength) break;
        if (read16(entry) !== 0x8769) continue;

        const exifOffset = read32(entry + 8);
        if (exifOffset === null) return null;

        const exifIfd = tiff + exifOffset;
        const exifCount = read16(exifIfd);
        if (exifCount === null) return null;

        for (let j = 0; j < exifCount; j++) {
          const q = exifIfd + 2 + j * 12;
          if (q + 12 > view.byteLength) break;

          if (![0x9003, 0x9004].includes(read16(q))) continue;
          if (read16(q + 2) !== 2) continue;

          const size = read32(q + 4);
          const offset = read32(q + 8);
          if (!size || offset === null) continue;

          const pos = tiff + offset;
          if (pos < 0 || pos + Math.min(size, 32) > view.byteLength) continue;

          let value = "";
          for (let k = 0; k < Math.min(size, 32); k++) {
            const char = view.getUint8(pos + k);
            if (!char) break;
            value += String.fromCharCode(char);
          }

          const match = value.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
          if (match) {
            const [, y, mo, d, h, mi, s] = match;
            return new Date(+y, +mo - 1, +d, +h, +mi, +s);
          }
        }
      }
      return null;
    }

    p += 2 + length;
  }

  return null;
}

/* ========================================
   EVENTOS Y ARRANQUE
======================================== */

$("search-input")?.addEventListener("input", event => {
  state.query = event.target.value;
  if ($("clear-search")) $("clear-search").hidden = !state.query;
  renderTrains();
});

$("filter-chips")?.addEventListener("click", event => {
  const button = event.target.closest(".filter-chip");
  if (!button) return;

  state.filter = button.dataset.filter || "Todos";

  $("filter-chips").querySelectorAll(".filter-chip").forEach(chip => {
    const active = chip === button;
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });

  renderTrains();
});

$("clear-search")?.addEventListener("click", () => {
  if ($("search-input")) $("search-input").value = "";
  state.query = "";
  $("clear-search").hidden = true;
  renderTrains();
});

$("nav-catalog")?.addEventListener("click", () => showView("catalog-view"));
$("nav-collection")?.addEventListener("click", () => showView("collection-view"));
$("back-to-catalog")?.addEventListener("click", () => showView("catalog-view"));
$("gallery-go-catalog")?.addEventListener("click", () => showView("catalog-view"));

$("theme-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  $("theme-toggle").textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

$("start-camera")?.addEventListener("click", openCamera);
$("take-photo")?.addEventListener("click", captureNow);

$("photo-input")?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;

  showMessage("Comprobando la fecha de la fotografía…");

  try {
    const exifDate = await readExifDate(file);
    if (!exifDate || Number.isNaN(exifDate.getTime())) {
      showMessage("No encontramos una fecha EXIF válida. Prueba con el JPEG original.", "error");
      return;
    }

    const age = Date.now() - exifDate.getTime();
    if (age < 0 || age >= 12 * 60 * 60 * 1000) {
      showMessage("La foto debe haberse tomado hace menos de 12 horas.", "error");
      return;
    }

    storePhoto(file, exifDate.toISOString(), "gallery");
  } catch {
    showMessage("No se pudo verificar la fecha de la fotografía.", "error");
  } finally {
    event.target.value = "";
  }
});

$("close-capture")?.addEventListener("click", () => $("capture-dialog")?.close());
$("capture-dialog")?.addEventListener("close", stopCamera);

updateProgress();
renderTrains();
renderGallery();

console.info(`TrenDéx iniciado: ${trains.length} trenes cargados.`);
