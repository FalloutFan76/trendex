/* ========================================
   TRENDEX — LÓGICA CORREGIDA
   Compatible con los IDs del HTML actual
======================================== */

const common = [
  ["📐", "Gran angular ×0,5", "Haz una foto amplia que muestre el tren y su entorno."],
  ["🚉", "Frontal o perfil completo", "Encuadra el tren desde una zona pública y segura."],
  ["🌙", "Ambiente especial", "Fotografía el tren de noche, con reflejos o iluminación interesante."]
];

const $ = id => document.getElementById(id);

const find = (id, selector) => $(id) || document.querySelector(selector);

const el = {
  grid: () => find("train-grid", "#trainGrid"),
  search: () => find("search-input", "#searchInput"),
  filters: () => document.querySelector(".filter-chips, #filter-chips"),
  detail: () => find("train-detail", "#trainDetail"),
  detailView: () => find("detail-view", "#detailView"),
  collection: () => find("collection-view", "#collectionView"),
  catalog: () => document.querySelector(".hero")?.closest("main") || document.querySelector("main"),
  gallery: () => find("photo-gallery", "#gallery"),
  galleryEmpty: () => find("gallery-empty", "#emptyGallery"),
  dialog: () => $("capture-dialog"),
  video: () => find("camera-video", "#cameraVideo"),
  canvas: () => find("capture-canvas", "#photoCanvas"),
  cameraPlaceholder: () => $("camera-placeholder"),
  message: () => find("capture-message", "#captureMessage"),
  photoInput: () => find("photo-input", "#galleryInput")
};

const state = {
  filter: "Todos",
  query: "",
  selected: null,
  mission: null,
  stream: null,
  photos: loadPhotos()
};

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
    notify("No hay espacio suficiente para guardar la colección.");
  }
}

function notify(text) {
  const toast = $("toast");

  if (toast) {
    toast.textContent = text;
    toast.classList.add("show");

    clearTimeout(notify.timer);
    notify.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  } else {
    console.info("TrenDéx:", text);
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

  // Estadísticas de la portada del HTML actual.
  if ($("discovered-count")) {
    $("discovered-count").textContent = trains.length;
  }

  if ($("captured-count")) {
    $("captured-count").textContent = count;
  }

  if ($("completion-count")) {
    $("completion-count").textContent = `${percent}%`;
  }

  // Progreso de la colección.
  if ($("collection-progress")) {
    $("collection-progress").textContent = `${percent}%`;
  }

  if ($("collection-progress-bar")) {
    $("collection-progress-bar").style.width = `${percent}%`;
  }

  // Compatibilidad con versiones anteriores del HTML.
  if ($("caughtCount")) $("caughtCount").textContent = count;
  if ($("totalCount")) $("totalCount").textContent = totalMissions;
  if ($("progressBar")) $("progressBar").style.width = `${percent}%`;
  if ($("progressLabel")) $("progressLabel").textContent = `${percent}% completado`;
  if ($("collectionProgress")) $("collectionProgress").textContent = `${percent}%`;
  if ($("collectionBar")) $("collectionBar").style.width = `${percent}%`;
}

function safeImagePath(filename) {
  return `images/${encodeURIComponent(filename)}`;
}

function renderTrains() {
  const grid = el.grid();

  if (!grid) {
    console.error("TrenDéx: no se encuentra #train-grid en el HTML.");
    return;
  }

  const query = state.query.trim().toLocaleLowerCase("es");

  const list = trains.filter(t => {
    const matchesFilter =
      state.filter === "Todos" || t.operator === state.filter;

    const text = `${t.name} ${t.series} ${t.operator} ${t.category}`
      .toLocaleLowerCase("es");

    return matchesFilter && text.includes(query);
  });

  const resultCount = $("result-count") || $("resultCount");

  if (resultCount) {
    resultCount.textContent = `${list.length} trenes`;
  }

  grid.innerHTML = list.length
    ? list.map((t, i) => {
        const missions = allMissions(t);
        const done = missions.filter(m => state.photos[m.id]).length;
        const index = String(trains.indexOf(t) + 1).padStart(3, "0");

        return `
          <button
            type="button"
            class="train-card"
            data-train="${t.id}"
            style="animation-delay:${Math.min(i, 8) * 35}ms"
            aria-label="Ver ficha de ${t.name}"
          >
            <div class="train-art" style="--soft:${t.color}18">
              <img
                class="train-photo"
                src="${safeImagePath(t.image)}"
                alt="${t.name}"
                loading="lazy"
              >
              <span class="train-glyph" hidden aria-hidden="true">${t.glyph}</span>

              <span class="train-index">#${index}</span>
              <span class="train-state">${done === missions.length ? "✓ Completo" : `${done}/5`}</span>
            </div>

            <div class="train-info">
              <p class="operator">${t.operator} · ${t.category}</p>
              <h3>${t.name}</h3>
              <p>${t.series}</p>

              <div class="mini-progress" aria-label="${done} de 5 misiones">
                <i style="width:${done / missions.length * 100}%;background:${t.color}"></i>
              </div>
            </div>
          </button>
        `;
      }).join("")
    : `
      <div class="empty-state">
        <p>🚆</p>
        <h3>No encontramos trenes</h3>
        <p>Prueba otra búsqueda o selecciona otro filtro.</p>
      </div>
    `;

  // Mostrar el emoji si no se encuentra la foto.
  grid.querySelectorAll(".train-photo").forEach(img => {
    img.addEventListener("error", () => {
      img.hidden = true;
      const glyph = img.parentElement?.querySelector(".train-glyph");
      if (glyph) glyph.hidden = false;
    }, { once: true });

    // Por si el navegador ya ha terminado de cargar una imagen rota.
    if (img.complete && img.naturalWidth === 0) {
      img.hidden = true;
      const glyph = img.parentElement?.querySelector(".train-glyph");
      if (glyph) glyph.hidden = false;
    }
  });

  grid.querySelectorAll("[data-train]").forEach(button => {
    button.addEventListener("click", () => openTrain(button.dataset.train));
  });
}

function setActiveNavigation(view) {
  document.querySelectorAll(".nav-item").forEach(button => {
    const isCatalog = button.id === "nav-catalog";
    const isCollection = button.id === "nav-collection";

    button.classList.toggle(
      "active",
      view === "detail-view"
        ? isCatalog
        : view === "collection-view"
          ? isCollection
          : isCatalog
    );
  });
}

function showCatalogSections(show) {
  // El HTML actual no necesita un elemento #homeView.
  document.querySelectorAll(
    "main > .hero, main > .stats, main > .catalog-section"
  ).forEach(section => {
    section.classList.toggle("hidden", !show);
  });
}

function openTrain(id) {
  const train = trains.find(t => t.id === id);
  if (!train) return;

  state.selected = train;

  showCatalogSections(false);

  el.collection()?.classList.add("hidden");
  el.detailView()?.classList.remove("hidden");

  renderDetail();
  setActiveNavigation("detail-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetail() {
  const t = state.selected;
  const container = el.detail();

  if (!t || !container) return;

  const missions = allMissions(t);
  const done = missions.filter(m => state.photos[m.id]).length;

  container.innerHTML = `
    <div class="detail-hero">
      <div class="detail-art" style="--soft:${t.color}18">
        <img
          class="detail-photo"
          src="${safeImagePath(t.image)}"
          alt="${t.name}"
        >
        <span class="detail-glyph" hidden aria-hidden="true">${t.glyph}</span>
      </div>

      <div class="detail-copy">
        <p class="operator">${t.operator} · ${t.category}</p>
        <h1>${t.name}</h1>
        <p><strong>Serie:</strong> ${t.series}</p>
        <p>${t.description}</p>

        <div class="mini-progress">
          <i style="width:${done / missions.length * 100}%;background:${t.color}"></i>
        </div>

        <p>${done} de ${missions.length} misiones completadas</p>
      </div>
    </div>

    <div class="mission-header">
      <h2>Misiones fotográficas</h2>
      <span class="muted">${done}/${missions.length}</span>
    </div>

    <div class="missions-list">
      ${missions.map(m => {
        const photo = state.photos[m.id];

        return `
          <article class="mission ${photo ? "completed" : ""}">
            <div class="mission-icon">${photo ? "✓" : m.icon}</div>

            <div class="mission-copy">
              <strong>${m.title}</strong>
              <p>${photo ? "Foto guardada en tu colección." : m.description}</p>
              <small>${m.type}</small>
            </div>

            <button type="button" class="primary-button" data-mission="${m.id}">
              ${photo ? "Ver foto" : "Capturar"}
            </button>
          </article>
        `;
      }).join("")}
    </div>
  `;

  const image = container.querySelector(".detail-photo");
  const glyph = container.querySelector(".detail-glyph");

  image?.addEventListener("error", () => {
    image.hidden = true;
    if (glyph) glyph.hidden = false;
  }, { once: true });

  if (image?.complete && image.naturalWidth === 0) {
    image.hidden = true;
    if (glyph) glyph.hidden = false;
  }

  container.querySelectorAll("[data-mission]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.mission;

      if (state.photos[id]) {
        showExistingPhoto(id);
      } else {
        openCapture(id);
      }
    });
  });
}

function showView(view) {
  const isCollection = view === "collection-view";

  showCatalogSections(!isCollection && view !== "detail-view");

  el.detailView()?.classList.toggle("hidden", view !== "detail-view");
  el.collection()?.classList.toggle("hidden", !isCollection);

  if (view === "catalog-view") {
    state.selected = null;
    showCatalogSections(true);
  }

  if (isCollection) renderGallery();
  if (view === "catalog-view") renderTrains();

  setActiveNavigation(isCollection ? "collection-view" : "catalog-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCapture(missionId) {
  const dialog = el.dialog();
  if (!dialog || !state.selected) return;

  const mission = allMissions(state.selected).find(m => m.id === missionId);
  if (!mission) return;

  state.mission = missionId;

  const title = dialog.querySelector(".dialog-header h2, .dialog-top h2");
  const description = dialog.querySelector(".dialog-description");
  const msg = el.message();
  const cameraContainer = dialog.querySelector(".camera-container");

  if (title) title.textContent = mission.title;
  if (description) description.textContent = mission.description;
  if (msg) {
    msg.textContent = "";
    msg.className = "message";
  }

  cameraContainer?.classList.add("hidden");

  if (!dialog.open) dialog.showModal();
}

function stopCamera() {
  if (state.stream) {
    state.stream.getTracks().forEach(track => track.stop());
    state.stream = null;
  }

  const video = el.video();
  if (video) video.srcObject = null;
}

async function openCamera() {
  const msg = el.message();

  if (msg) {
    msg.textContent = "";
    msg.className = "message";
  }

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("La cámara requiere HTTPS y un navegador compatible.");
    }

    stopCamera();

    state.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });

    const video = el.video();
    if (!video) throw new Error("No se encuentra el elemento de vídeo en el HTML.");

    video.srcObject = state.stream;
    await video.play();

    const cameraContainer = document.querySelector(".camera-container");
    cameraContainer?.classList.remove("hidden");

    el.cameraPlaceholder()?.classList.add("hidden");
  } catch (error) {
    showMessage(error.message || "No se pudo abrir la cámara. Revisa los permisos.", "error");
  }
}

function showMessage(text, type = "") {
  const msg = el.message();

  if (msg) {
    msg.textContent = text;
    msg.className = `message ${type}`;
  } else {
    notify(text);
  }
}

function captureNow() {
  const video = el.video();
  const canvas = el.canvas();

  if (!video || !canvas || !video.videoWidth) {
    showMessage("La cámara aún se está iniciando. Espera un momento.", "error");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0);

  canvas.toBlob(blob => {
    if (!blob) {
      showMessage("No se pudo procesar la fotografía.", "error");
      return;
    }

    storePhoto(blob, new Date().toISOString(), "camera");
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
    showMessage("No se puede verificar una fecha de captura válida de las últimas 12 horas.", "error");
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
    showMessage("¡Misión completada! La foto se ha guardado en este navegador.", "success");

    setTimeout(() => {
      const dialog = el.dialog();
      if (dialog?.open) dialog.close();
    }, 900);
  };

  reader.onerror = () => showMessage("No se pudo guardar la imagen.", "error");
  reader.readAsDataURL(blob);
}

function showExistingPhoto(id) {
  const item = state.photos[id];
  const dialog = el.dialog();
  if (!item || !dialog) return;

  const title = dialog.querySelector(".dialog-header h2, .dialog-top h2");
  const description = dialog.querySelector(".dialog-description");
  const msg = el.message();

  if (title) title.textContent = item.missionName;
  if (description) description.textContent = item.trainName;

  if (msg) {
    msg.replaceChildren();

    const img = document.createElement("img");
    img.src = item.data;
    img.alt = item.missionName;
    img.style.cssText = "display:block;width:100%;border-radius:14px;margin-top:12px";

    msg.appendChild(img);
    msg.className = "message";
  }

  if (!dialog.open) dialog.showModal();
}

function renderGallery() {
  const gallery = el.gallery();
  if (!gallery) return;

  const items = Object.values(state.photos)
    .sort((a, b) => new Date(b.capturedAt) - new Date(a.capturedAt));

  gallery.innerHTML = items.map(item => `
    <article class="gallery-item">
      <img src="${item.data}" alt="${item.missionName}" loading="lazy">
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

  const empty = el.galleryEmpty();
  if (empty) empty.classList.toggle("hidden", items.length > 0);
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

      if (start + 14 > view.byteLength || view.getUint32(start) !== 0x45786966) {
        return null;
      }

      const tiff = start + 6;
      const byteOrder = view.getUint16(tiff);
      const little = byteOrder === 0x4949;

      if (!little && byteOrder !== 0x4D4D) return null;

      const read16 = offset =>
        offset >= 0 && offset + 2 <= view.byteLength
          ? view.getUint16(offset, little)
          : null;

      const read32 = offset =>
        offset >= 0 && offset + 4 <= view.byteLength
          ? view.getUint32(offset, little)
          : null;

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

          const tag = read16(q);
          if (tag !== 0x9003 && tag !== 0x9004) continue;

          if (read16(q + 2) !== 2) continue;

          const size = read32(q + 4);
          const offset = read32(q + 8);
          if (!size || offset === null) continue;

          const stringOffset = tiff + offset;
          const stringLength = Math.min(size, 32);

          if (
            stringOffset < 0 ||
            stringOffset + stringLength > view.byteLength
          ) continue;

          let value = "";

          for (let k = 0; k < stringLength; k++) {
            const char = view.getUint8(stringOffset + k);
            if (!char) break;
            value += String.fromCharCode(char);
          }

          const match = value.match(
            /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
          );

          if (match) {
            const [, y, month, day, hour, minute, second] = match;

            return new Date(
              Number(y),
              Number(month) - 1,
              Number(day),
              Number(hour),
              Number(minute),
              Number(second)
            );
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

// Buscador
el.search()?.addEventListener("input", event => {
  state.query = event.target.value;
  renderTrains();
});

// Filtros
el.filters()?.addEventListener("click", event => {
  const button = event.target.closest(".filter-chip, .chip");
  if (!button) return;

  state.filter =
    button.dataset.filter ||
    button.dataset.operator ||
    button.textContent.trim();

  el.filters().querySelectorAll(".filter-chip, .chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  renderTrains();
});

// Limpiar búsqueda
$("clear-search")?.addEventListener("click", () => {
  const search = el.search();
  if (search) search.value = "";
  state.query = "";
  renderTrains();
});

// Navegación
$("nav-catalog")?.addEventListener("click", () => showView("catalog-view"));
$("nav-collection")?.addEventListener("click", () => showView("collection-view"));
$("back-to-catalog")?.addEventListener("click", () => showView("catalog-view"));

// Tema oscuro: admite varios IDs por compatibilidad.
const themeButton =
  $("theme-toggle") ||
  $("theme-button") ||
  $("themeButton");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Cámara y captura
$("start-camera")?.addEventListener("click", openCamera);
$("take-photo")?.addEventListener("click", captureNow);

// Subir una foto existente
el.photoInput()?.addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;

  showMessage("Comprobando la fecha de la fotografía…");

  try {
    const exifDate = await readExifDate(file);

    if (!exifDate || Number.isNaN(exifDate.getTime())) {
      showMessage(
        "No encontramos una fecha EXIF válida. Prueba con el JPEG original de la cámara.",
        "error"
      );
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

// Cerrar diálogo y apagar la cámara
el.dialog()?.addEventListener("close", stopCamera);

// Inicio de la aplicación
updateProgress();
renderTrains();
renderGallery();

console.info(`TrenDéx iniciado: ${trains.length} trenes cargados.`);
