
const trains = [
  {
    id: "fgc-112",
    name: "Serie 112 FGC",
    series: "UT 112",
    operator: "FGC",
    category: "Barcelona-Vallès",
    glyph: "🚆",
    image: "fgc_ut112.jpg",
    color: "#8f1d63",
    description: "Unidad de cuatro coches característica de la línea Barcelona-Vallès.",
    specific: [
      ["♿", "Coche accesible PMR", "Encuadra la zona accesible y su señalización."],
      ["🔤", "Indicador de línea", "Fotografía el indicador de destino encendido."]
    ]
  },
  {
    id: "fgc-113",
    name: "Serie 113",
    series: "UT 113",
    operator: "FGC",
    category: "Barcelona-Vallès",
    glyph: "🚆",
    image: "fgc_ut113.jpg",
    color: "#8f1d63",
    description: "Unidad moderna de FGC para servicios metropolitanos.",
    specific: [
      ["🪟", "Ventanas y puertas", "Busca una composición geométrica de ventanas y puertas."],
      ["🔢", "Número de unidad", "Captura el número identificativo de la unidad."]
    ]
  },
  {
    id: "fgc-213",
    name: "Serie 213",
    series: "UT 213",
    operator: "FGC",
    category: "Llobregat-Anoia",
    glyph: "🚈",
    image: "fgc_ut213.jpg",
    color: "#8f1d63",
    description: "Tren eléctrico de la línea Llobregat-Anoia.",
    specific: [
      ["🛤️", "Entorno de vía métrica", "Incluye el tren y parte de la infraestructura de vía."],
      ["🔗", "Enganche frontal", "Encuadra el enganche desde una posición segura."]
    ]
  },
  {
    id: "fgc-211",
    name: "Serie 211 FGC",
    series: "UT 211",
    operator: "FGC",
    category: "Histórico",
    glyph: "🚆",
    image: "fgc_ut211.jpg",
    color: "#8f1d63",
    description: "Unidad ferroviaria histórica de FGC.",
    specific: [
      ["🛤️", "Entorno ferroviario", "Fotografía el tren y parte de su entorno."],
      ["🔢", "Número de unidad", "Captura su identificación."]
    ]
  },
  {
    id: "fgc-400",
    name: "Serie 400 / 600",
    series: "Granota",
    operator: "FGC",
    category: "Histórico",
    glyph: "🚋",
    image: "fgc_ut400.jpg",
    color: "#8f1d63",
    description: "Material histórico ligado a la memoria ferroviaria catalana.",
    specific: [
      ["🕰️", "Detalle histórico", "Busca una placa, faro o detalle original."],
      ["🎨", "Librea clásica", "Fotografía el lateral mostrando su decoración."]
    ]
  },
  {
    id: "rod-civia",
    name: "Civia",
    series: "Civia",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe_civia.jpg",
    color: "#e87827",
    description: "Familia de unidades de cercanías presente en distintas líneas.",
    specific: [
      ["🟡", "Puertas de acceso", "Captura el contraste de las puertas y el lateral."],
      ["🪧", "Destino del tren", "Fotografía el panel de destino legible."]
    ]
  },
  {
    id: "renfe-447",
    name: "Serie 447",
    series: "447",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe_447.jpg",
    color: "#e87827",
    description: "Unidad clásica de cercanías con presencia habitual en Cataluña.",
    specific: [
      ["🪟", "Frontal característico", "Encuadra el frontal y sus ventanas."],
      ["🧩", "Detalle de la librea", "Busca una zona donde se vea bien la decoración."]
    ]
  },
  {
    id: "renfe-450",
    name: "Serie 450",
    series: "450",
    operator: "Rodalies",
    category: "Cercanías de dos pisos",
    glyph: "🚆",
    image: "renfe_450.jpg",
    color: "#e87827",
    description: "Tren de dos pisos reconocible por su gran capacidad.",
    specific: [
      ["🏢", "Dos pisos en una foto", "Encuadra una zona donde se aprecie la altura del tren."],
      ["🚪", "Acceso de viajeros", "Captura la zona de puertas y distribución de pisos."]
    ]
  },
  {
    id: "metro-s",
    name: "Metro serie 5000",
    series: "5000",
    operator: "Metro",
    category: "Metro de Barcelona",
    glyph: "🚇",
    image: "metro_5000.jpg",
    color: "#168b70",
    description: "Una de las familias de trenes del metro barcelonés.",
    specific: [
      ["💡", "Luces del frontal", "Captura las luces del tren en estación."],
      ["🚇", "Tren y andén", "Compón una imagen con el tren y el andén."]
    ]
  },
  {
    id: "tram-1",
    name: "Trambaix / Trambesòs",
    series: "Citadis",
    operator: "Tram",
    category: "Tranvía",
    glyph: "🚊",
    image: "tram_citadis.jpg",
    color: "#368a9d",
    description: "Tranvías modernos de la red metropolitana de Barcelona.",
    specific: [
      ["🌿", "Tranvía en la calle", "Incluye el tranvía y el entorno urbano."],
      ["〰️", "Curva de vía", "Fotografía el tranvía siguiendo una curva desde un lugar seguro."]
    ]
  },
  {
    id: "turistic-llacs",
    name: "Tren dels Llacs",
    series: "Tren turístico",
    operator: "Turístico",
    category: "Lleida–La Pobla",
    glyph: "🚂",
    image: "tren_dels_llacs.jpg",
    color: "#aa6b32",
    description: "Servicio turístico con paisajes y material ferroviario singular.",
    specific: [
      ["🏞️", "Tren y paisaje", "Incluye el paisaje sin perder el tren como protagonista."],
      ["🧳", "Detalle del coche", "Busca un detalle distintivo del material turístico."]
    ]
  },
  {
    id: "renfe-451",
    name: "Serie 451",
    series: "451",
    operator: "Rodalies",
    category: "Cercanías de dos pisos",
    glyph: "🚆",
    image: "renfe_451.jpg",
    color: "#e87827",
    description: "Unidad de dos pisos utilizada en servicios de cercanías.",
    specific: [
      ["🏢", "Perfil de dos pisos", "Muestra la distribución de las ventanas."],
      ["🔢", "Identificación", "Fotografía el número de la unidad."]
    ]
  },
  {
    id: "renfe-465",
    name: "Serie 465",
    series: "Civia",
    operator: "Rodalies",
    category: "Cercanías",
    glyph: "🚆",
    image: "renfe_465.jpg",
    color: "#e87827",
    description: "Unidad eléctrica de cinco coches de la familia Civia.",
    specific: [
      ["🚪", "Puertas y lateral", "Encuadra varias puertas y ventanas."],
      ["🪧", "Panel de destino", "Captura el indicador de destino."]
    ]
  },
  {
    id: "renfe-470",
    name: "Serie 470",
    series: "470",
    operator: "Rodalies",
    category: "Regional",
    glyph: "🚆",
    image: "renfe_470.jpg",
    color: "#e87827",
    description: "Unidad eléctrica de servicios regionales.",
    specific: [
      ["🪟", "Ventanas del coche", "Encuadra las ventanas del lateral."],
      ["🚉", "Tren en estación", "Fotografía el tren en una estación."]
    ]
  }
];

const common = [
  ["📐", "Gran angular ×0,5", "Haz una foto amplia que muestre el tren y su entorno."],
  ["🚉", "Frontal o perfil completo", "Encuadra la mayor parte posible del tren desde una zona pública y segura."],
  ["🌙", "Ambiente especial", "Fotografía el tren de noche, con reflejos o una iluminación interesante."]
];

const state = {
  filter: "Todos",
  query: "",
  selected: null,
  mission: null,
  stream: null,
  photos: loadPhotos()
};

const $ = id => document.getElementById(id);
const totalMissions = trains.length * 5;

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
    message("No hay espacio suficiente para guardar la colección en este navegador.", "error");
  }
}

function allMissions(train) {
  return [...common, ...train.specific].map((m, i) => ({
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
  const percent = Math.round(count / totalMissions * 100);

  $("caughtCount").textContent = count;
  $("totalCount").textContent = totalMissions;
  $("progressBar").style.width = percent + "%";
  $("progressLabel").textContent = percent + "% completado";
  $("collectionProgress").textContent = percent + "%";
  $("collectionBar").style.width = percent + "%";
}

function renderTrains() {
  const list = trains.filter(t =>
    (state.filter === "Todos" || t.operator === state.filter) &&
    `${t.name} ${t.series} ${t.operator} ${t.category}`
      .toLowerCase()
      .includes(state.query.toLowerCase())
  );

  $("resultCount").textContent = `${list.length} trenes`;

  $("trainGrid").innerHTML = list.length
    ? list.map((t, i) => {
        const done = allMissions(t).filter(m => state.photos[m.id]).length;

        return `
          <button class="train-card" data-train="${t.id}"
            style="animation-delay:${Math.min(i, 8) * 35}ms">
            <div class="train-art" style="--soft:${t.color}18">
              <img class="train-photo"
                src="images/${t.image}"
                alt="${t.name}"
                loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <span class="train-glyph" style="display:none">${t.glyph}</span>
              <span class="train-index">#${String(trains.indexOf(t) + 1).padStart(3, "0")}</span>
              <span class="train-state">${done === 5 ? "✓ Completado" : `${done}/5`}</span>
            </div>
            <div class="train-info">
              <p class="operator">${t.operator} · ${t.category}</p>
              <h3>${t.name}</h3>
              <p>${t.series}</p>
              <div class="mini-progress">
                <i style="width:${done * 20}%;background:${t.color}"></i>
              </div>
            </div>
          </button>`;
      }).join("")
    : `<div class="empty-results">No encontramos trenes con esa búsqueda.</div>`;

  $("trainGrid").querySelectorAll("[data-train]").forEach(b =>
    b.addEventListener("click", () => openTrain(b.dataset.train))
  );
}

function openTrain(id) {
  state.selected = trains.find(t => t.id === id);
  if (!state.selected) return;

  $("homeView").classList.add("hidden");
  $("collectionView").classList.add("hidden");
  $("detailView").classList.remove("hidden");

  renderDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.querySelectorAll(".nav-item").forEach(n =>
    n.classList.toggle("active", n.dataset.view === "homeView")
  );
}

function renderDetail() {
  const t = state.selected;
  const missions = allMissions(t);
  const done = missions.filter(m => state.photos[m.id]).length;

  $("trainDetail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-art" style="--soft:${t.color}18">
        <img class="detail-photo"
          src="images/${t.image}"
          alt="${t.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="detail-glyph" style="display:none">${t.glyph}</span>
      </div>
      <div class="detail-copy">
        <p class="operator">${t.operator} · ${t.category}</p>
        <h1>${t.name}</h1>
        <p><strong>Serie:</strong> ${t.series}</p>
        <p>${t.description}</p>
        <div class="mini-progress">
          <i style="width:${done * 20}%;background:${t.color}"></i>
        </div>
        <p>${done}/5 misiones completadas</p>
      </div>
    </div>
    <div class="mission-header">
      <h2>Misiones fotográficas</h2>
      <span class="muted">${done}/5</span>
    </div>
    <div class="mission-list">
      ${missions.map(m => {
        const photo = state.photos[m.id];
        return `
          <article class="mission ${photo ? "completed" : ""}">
            <div class="mission-icon">${photo ? "✓" : m.icon}</div>
            <div class="mission-copy">
              <strong>${m.title}</strong>
              <p>${photo ? "Captura guardada en este navegador." : m.description}</p>
              <small>${m.type}</small>
            </div>
            <button class="primary-button" data-mission="${m.id}">
              ${photo ? "Ver foto" : "Capturar"}
            </button>
          </article>`;
      }).join("")}
    </div>`;

  $("trainDetail").querySelectorAll("[data-mission]").forEach(b =>
    b.addEventListener("click", () => {
      const id = b.dataset.mission;
      if (state.photos[id]) {
        showExistingPhoto(id);
      } else {
        openCapture(id);
      }
    })
  );
}

function showView(view) {
  $("homeView").classList.toggle("hidden", view !== "homeView");
  $("detailView").classList.add("hidden");
  $("collectionView").classList.toggle("hidden", view !== "collectionView");

  document.querySelectorAll(".nav-item").forEach(n =>
    n.classList.toggle("active", n.dataset.view === view)
  );

  if (view === "homeView") renderTrains();
  if (view === "collectionView") renderGallery();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCapture(missionId) {
  const mission = allMissions(state.selected).find(m => m.id === missionId);
  if (!mission) return;

  state.mission = missionId;
  $("captureTitle").textContent = mission.title;
  $("captureDescription").textContent = mission.description;
  $("captureMessage").textContent = "";
  $("captureMessage").className = "message";
  $("cameraArea").classList.add("hidden");
  $("galleryInput").value = "";
  $("captureDialog").showModal();
}

async function openCamera() {
  $("captureMessage").textContent = "";

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("Necesitas HTTPS para utilizar la cámara desde esta web.");
    }

    stopCamera();

    state.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    $("cameraVideo").srcObject = state.stream;
    $("cameraArea").classList.remove("hidden");
  } catch (e) {
    message(e.message || "No se pudo abrir la cámara. Comprueba los permisos.", "error");
  }
}

function stopCamera() {
  if (state.stream) {
    state.stream.getTracks().forEach(t => t.stop());
    state.stream = null;
  }

  $("cameraVideo").srcObject = null;
}

function message(text, type = "") {
  $("captureMessage").textContent = text;
  $("captureMessage").className = `message ${type}`;
}

function captureNow() {
  const video = $("cameraVideo");

  if (!video.videoWidth) {
    message("La cámara aún se está iniciando. Espera un momento.", "error");
    return;
  }

  const canvas = $("photoCanvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);

  const capturedAt = new Date().toISOString();

  canvas.toBlob(blob => {
    if (!blob) {
      message("No se pudo procesar la foto.", "error");
      return;
    }

    storePhoto(blob, capturedAt, "camera");
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
    message("Foto rechazada: debe tener una fecha verificable inferior a 12 horas.", "error");
    return;
  }

  const train = state.selected;
  const mission = train && allMissions(train).find(m => m.id === state.mission);

  if (!train || !mission) {
    message("No se ha encontrado la misión seleccionada.", "error");
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
    message("¡Misión completada! La foto se ha guardado en este navegador.", "success");

    setTimeout(() => {
      if ($("captureDialog").open) $("captureDialog").close();
    }, 850);
  };

  reader.onerror = () => {
    message("No se pudo guardar la imagen.", "error");
  };

  reader.readAsDataURL(blob);
}

function showExistingPhoto(id) {
  const item = state.photos[id];
  if (!item) return;

  $("captureTitle").textContent = item.missionName;
  $("captureDescription").textContent = item.trainName;
  $("captureMessage").replaceChildren();
  $("captureMessage").className = "message";

  const img = document.createElement("img");
  img.src = item.data;
  img.alt = item.missionName;
  img.style.cssText = "width:100%;border-radius:14px;margin-top:12px";

  $("captureMessage").appendChild(img);
  $("captureDialog").showModal();
}

function renderGallery() {
  const items = Object.values(state.photos)
    .sort((a, b) => new Date(b.capturedAt) - new Date(a.capturedAt));

  $("gallery").innerHTML = items.map(item => `
    <article class="gallery-item">
      <img src="${item.data}" alt="${item.missionName}">
      <div>
        <strong>${item.missionName}</strong>
        <p>${item.trainName} · ${new Date(item.capturedAt).toLocaleString("es-ES", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        })}</p>
      </div>
    </article>
  `).join("");

  $("emptyGallery").classList.toggle("hidden", items.length > 0);
}

$("searchInput").addEventListener("input", e => {
  state.query = e.target.value;
  renderTrains();
});

$("filterChips").addEventListener("click", e => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;

  state.filter = b.dataset.filter;

  document.querySelectorAll(".chip").forEach(c =>
    c.classList.toggle("active", c === b)
  );

  renderTrains();
});

document.querySelectorAll(".nav-item").forEach(b =>
  b.addEventListener("click", () => showView(b.dataset.view))
);

$("backButton").addEventListener("click", () => showView("homeView"));

$("themeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  $("themeButton").textContent =
    document.body.classList.contains("dark") ? "☀" : "☾";
});

$("cameraButton").addEventListener("click", openCamera);
$("takePhotoButton").addEventListener("click", captureNow);

$("galleryInput").addEventListener("change", async e => {
  const file = e.target.files?.[0];
  if (!file) return;

  message("Comprobando fecha de captura…");

  try {
    const exifDate = await readExifDate(file);

    if (!exifDate) {
      message("Foto rechazada: no encontramos una fecha EXIF verificable. Prueba con el archivo JPEG original.", "error");
      return;
    }

    const age = Date.now() - exifDate.getTime();

    if (age < 0 || age >= 12 * 60 * 60 * 1000) {
      message("Foto rechazada: debe haberse hecho hace menos de 12 horas.", "error");
      return;
    }

    storePhoto(file, exifDate.toISOString(), "gallery");
  } catch {
    message("No pudimos verificar la fecha EXIF. Esta foto no se acepta.", "error");
  } finally {
    e.target.value = "";
  }
});

async function readExifDate(file) {
  const buf = await file.slice(0, Math.min(file.size, 2 * 1024 * 1024)).arrayBuffer();
  const v = new DataView(buf);

  if (v.byteLength < 4 || v.getUint16(0) !== 0xFFD8) return null;

  let p = 2;

  while (p + 4 < v.byteLength) {
    if (v.getUint8(p) !== 0xFF) break;

    const marker = v.getUint8(p + 1);
    const len = v.getUint16(p + 2);

    if (len < 2) break;

    if (marker === 0xE1 && p + len + 2 <= v.byteLength) {
      const start = p + 4;

      if (start + 14 > v.byteLength || v.getUint32(start) !== 0x45786966) {
        return null;
      }

      const t = start + 6;
      const little = v.getUint16(t) === 0x4949;

      if (!little && v.getUint16(t) !== 0x4D4D) return null;

      const read16 = o =>
        o >= 0 && o + 2 <= v.byteLength ? v.getUint16(o, little) : null;

      const read32 = o =>
        o >= 0 && o + 4 <= v.byteLength ? v.getUint32(o, little) : null;

      const ifdOffset = read32(t + 4);
      if (ifdOffset === null) return null;

      const ifd = t + ifdOffset;
      const n = read16(ifd);

      if (n === null) return null;

      for (let i = 0; i < n; i++) {
        const entry = ifd + 2 + i * 12;
        if (entry + 12 > v.byteLength) break;

        if (read16(entry) !== 0x8769) continue;

        const exifOffset = read32(entry + 8);
        if (exifOffset === null) return null;

        const exifIfd = t + exifOffset;
        const count = read16(exifIfd);

        if (count === null) return null;

        for (let j = 0; j < count; j++) {
          const q = exifIfd + 2 + j * 12;
          if (q + 12 > v.byteLength) break;

          const tag = read16(q);

          if (tag !== 0x9003 && tag !== 0x9004) continue;

          const type = read16(q + 2);
          const size = read32(q + 4);
          const offset = read32(q + 8);

          if (type !== 2 || !size || offset === null) continue;

          const strOffset = t + offset;
          if (strOffset < 0 || strOffset + Math.min(size, 32) > v.byteLength) continue;

          let s = "";

          for (let k = 0; k < Math.min(size, 32); k++) {
            const c = v.getUint8(strOffset + k);
            if (!c) break;
            s += String.fromCharCode(c);
          }

          const match = s.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);

          if (match) {
            const [, y, mo, d, h, mi, sec] = match;
            const date = new Date(
              Number(y), Number(mo) - 1, Number(d),
              Number(h), Number(mi), Number(sec)
            );

            if (
              date.getFullYear() === Number(y) &&
              date.getMonth() === Number(mo) - 1 &&
              date.getDate() === Number(d)
            ) {
              return date;
            }
          }
        }
      }

      return null;
    }

    p += 2 + len;
  }

  return null;
}

$("captureDialog").addEventListener("close", () => {
  stopCamera();
  $("galleryInput").value = "";
});

updateProgress();
renderTrains();
