// Base de datos de las canciones (Añade el resto siguiendo este formato)
const songs = [
    {
        title: "1. Dulce Doncella",
        content: `[DO] [MI7] [LAm]
Estamos vivos y vivimos
[FA] [SOL]
amar es nuestro destino
[DO] [MI7] [LAm] [FA]
aunque este viaje es distinto, solo hay un
[SOL] [DO]
solo camino, llegar a vos.

[MI7]-[LAm]-[FA]-[SOL]
[DO] [MI7] [LAm] [FA] [SOL] [DO] [MI7]
Dulce doncella, te seguiré, tu eres mi
[LAm] [FA] [SOL] [DO]
estrella, te alcanzaré, yo sé que si.

[MI7]-[LAm]-[FA]-[SOL]
Sólo quedó hierba seca
por donde antes pisamos
hoy hay flores de pureza
porque hacia ti caminamos espéranos.`
    },
    {
        title: "2. Gloria a Dios",
        content: `[SOL] [RE] [SOL]
Gloria a Dios en el cielo
[DO] [RE] [SOL] [DO] [RE] [SOL]
y en la tierra, paz a los hombres.

[SI7] [MIm] [RE] [SI7] [MIm]
Gloria a Dios Padres Nuestro, poder y amor
[LA7] [LA7] [RE]
que hiciste de la nada, la creación.
[DOm] [SOL] [LA7] [RE]
Y por salvar al mundo de su pecado
[DO] [RE] [SOL] [DO] [RE] [SOL]
enviase desde el cielo a tu hijo amado.`
    },
    {
        title: "3. Aleluya",
        content: `[DO]
¡Aleluya, gloria Aleluya!
[LAm]
¡Aleluya, gloria Aleluya!
[FA]
¡Aleluya, gloria Aleluya!
[SOL]
¡Aleluya, gloria Aleluya!

Cantad alegres, cantad a Dios
habitantes de toda la tierra
Servid a Dios con alegría
llegad a Él con regocijo.`
    }
    // Agrega aquí las demás canciones separadas por comas...
];

// Variables de estado
let currentFontSize = 16;
const songContentEl = document.getElementById('song-content');
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const indexView = document.getElementById('index-view');
const songView = document.getElementById('song-view');

// Inicializar la aplicación
function init() {
    renderIndex(songs);
    
    // Evento de búsqueda
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = songs.filter(s => s.title.toLowerCase().includes(term));
        renderIndex(filtered);
    });

    // Evento volver
    document.getElementById('back-btn').addEventListener('click', () => {
        songView.classList.remove('active');
        songView.classList.add('hidden');
        indexView.classList.remove('hidden');
        indexView.classList.add('active');
        window.scrollTo(0, 0);
    });
}

// Renderizar el índice alfabético
function renderIndex(songsToRender) {
    songListEl.innerHTML = '';
    
    // Ordenar alfabéticamente ignorando los números del inicio
    const sortedSongs = [...songsToRender].sort((a, b) => {
        const titleA = a.title.replace(/^\d+\.\s*/, '').toLowerCase();
        const titleB = b.title.replace(/^\d+\.\s*/, '').toLowerCase();
        return titleA.localeCompare(titleB);
    });

    let currentLetter = '';

    sortedSongs.forEach(song => {
        // Obtener la primera letra del título (ignorando el número)
        const cleanTitle = song.title.replace(/^\d+\.\s*/, '');
        const firstLetter = cleanTitle.charAt(0).toUpperCase();

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            const letterGroup = document.createElement('div');
            letterGroup.className = 'letter-title';
            letterGroup.textContent = currentLetter;
            songListEl.appendChild(letterGroup);
        }

        const item = document.createElement('div');
        item.className = 'song-item';
        item.textContent = song.title;
        item.onclick = () => openSong(song);
        songListEl.appendChild(item);
    });
}

// Abrir una canción
function openSong(song) {
    document.getElementById('song-title').textContent = song.title;
    
    // Procesar los acordes (cambiar [C] por <span>C</span>)
    const formattedContent = song.content.replace(/\[(.*?)\]/g, '<span class="chord">$1</span>');
    songContentEl.innerHTML = formattedContent;

    // Cambiar de vista
    indexView.classList.remove('active');
    indexView.classList.add('hidden');
    songView.classList.remove('hidden');
    songView.classList.add('active');
    
    // Resetear tamaño de fuente
    currentFontSize = 16;
    updateFontSize();
    window.scrollTo(0, 0);
}

// Cambiar tamaño de la letra
function changeFontSize(change) {
    currentFontSize += change;
    if (currentFontSize < 12) currentFontSize = 12; // Tamaño mínimo
    if (currentFontSize > 32) currentFontSize = 32; // Tamaño máximo
    updateFontSize();
}

function updateFontSize() {
    songContentEl.style.fontSize = `${currentFontSize}px`;
}

// Iniciar
init();
