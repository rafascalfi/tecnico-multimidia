// Data and interactive logic for Técnico em Multimídia & Jogos

const PROJECT_GROUPS = [
  {
    id: 1,
    title: "Mundo Educativo SESI",
    theme: "Gamificação Educacional & Dinâmicas Lúdicas",
    tag: "Gamificação",
    category: "gamificacao",
    image: "assets/gamificacao/grupo_01.jpg",
    url: "https://sites.google.com/view/mundoeducativosesi",
    members: ["Guilherme Maciel de Freitas", "Júlia Mazetti Silva", "Nathalia Guerreiro Silva", "Yasmin de Oliveira Carvalho"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Ambiente gamificado com atividades interativas e desafios lúdicos voltados à educação e ao engajamento dos estudantes.",
    tech: ["Gamificação", "Web Design", "Design Educacional", "Storytelling"]
  },
  {
    id: 2,
    title: "Scalforce",
    theme: "Ação Espacial & Gamedev 2D",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_02.jpg",
    url: "https://scalforce.netlify.app/",
    members: ["João Pedro Rodrigues Rafael", "Lucas Alonso Perecim", "Pedro Sastre Vilcher Della Rosa", "Vitor Gabriel Pereira Gregorio"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Jogo de batalha e exploração espacial com mecânicas de esquiva, tiro, pontuação e progressão de fases.",
    tech: ["Gamedev", "Lógica de Jogos", "Pixel Art", "Level Design"]
  },
  {
    id: 3,
    title: "PlayJoy",
    theme: "Plataforma de Minigames & Diversão Interativa",
    tag: "Multimídia",
    category: "audiovisual",
    image: "assets/gamificacao/grupo_03.jpg",
    url: "https://rafascalfi.github.io/playjoy/",
    members: ["Arthur Marchiori Gubatto", "Guilherme Gabriel Oliveira Ferreira", "Jullia Fonseca Malaquias", "Kamily Vitoria de Lima Valadão"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Hub de jogos interativos com visual colorido, desafios dinâmicos e trilha sonora vibrante para todas as idades.",
    tech: ["UI/UX", "Sound Design", "Animação 2D", "Web Game"]
  },
  {
    id: 4,
    title: "Padrinhos Mágicos: A Aventura",
    theme: "Jogo de Aventura & Plataforma Temático",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_04.jpg",
    url: "https://rafascalfi.github.io/padrinhos/",
    members: ["Guilherme Biata Sartoreto", "Olivia Toledo Brizoti", "Paulo Otávio Castrequini da Silva", "Renan Faria de Souza"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Experiência de plataforma inspirada na clássica animação, superando obstáculos e coletando itens mágicos.",
    tech: ["Platformer", "Pixel Art", "Animação", "Game Feel"]
  },
  {
    id: 5,
    title: "Langland",
    theme: "Gamificação de Idiomas & Vocabulário",
    tag: "Social",
    category: "social",
    image: "assets/gamificacao/grupo_05.jpg",
    url: "https://rafascalfi.github.io/langland/",
    members: ["Beatriz Carvalho Fraga", "Gabriel Nagata Maciel", "Ruan Henrique Batista Tolentino", "Sophia Maria Nascimento Ladeia"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Jogo pedagógico para aprendizado interativo de línguas, associando palavras, desafios visuais e pronúncia.",
    tech: ["Educação", "Gamificação", "Design Gráfico", "UI Dinâmica"]
  },
  {
    id: 6,
    title: "Matemágica SESI",
    theme: "Desafios Lógicos & Matemática Gamificada",
    tag: "Gamificação",
    category: "gamificacao",
    image: "assets/gamificacao/grupo_06.jpg",
    url: "https://matemagicasesi.netlify.app/",
    members: ["Afonso Castelli Uliana", "Danielle Marchetti Rodrigues", "Júlia Trivelato Almeida", "Mariana Galinari Oliveira"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Desafios matemáticos transformados em feitiços e quebra-cabeças instigantes para estimular o raciocínio rápido.",
    tech: ["Lógica Matemática", "Gamification", "UX Research", "Ilustração"]
  },
  {
    id: 7,
    title: "Bloom SESI",
    theme: "Botânica, Natureza & Consciência Ecológica",
    tag: "Design",
    category: "social",
    image: "assets/gamificacao/grupo_07.jpg",
    url: "https://bloomsesi.netlify.app/",
    members: ["Ana Laura Camilo Gouveia", "Gabriel Henrique Rosa Larocca", "Kauã Henrique Leite Ferreira", "Leticia Crispim Alves"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Jogo interativo de cultivo e sustentabilidade, onde o jogador aprende sobre biodiversidade enquanto cuida de seu jardim digital.",
    tech: ["Sustentabilidade", "UI/UX", "Paleta de Cores", "Asset Pipeline"]
  },
  {
    id: 8,
    title: "Backyardigans Adventure",
    theme: "Mundo Lúdico Infantil & Narrativa Musical",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_08.jpg",
    url: "https://rafascalfi.github.io/backyardigans1/",
    members: ["Mattheus Maia de Oliveira", "Maria Eduarda de Castro Costa", "Vitoria Gabrieli Rosa Larocca", "Yuri Augusto Bento Castilho Gomes"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Aventura musical interativa com personagens carismáticos, exploração de cenários fantásticos e mecânicas acessíveis.",
    tech: ["Narrativa", "Animação 2D", "Sound Design", "Gamedev"]
  },
  {
    id: 9,
    title: "Georush",
    theme: "Geografia, Países & Desafio em Tempo Real",
    tag: "Gamificação",
    category: "gamificacao",
    image: "assets/gamificacao/grupo_09.jpg",
    url: "https://georush.netlify.app/",
    members: ["Murilo Pereira Devechi", "Giovana Nilo Silva", "Julia Storti Souza", "Laura de Sousa Silva"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Quiz frenético de geografia com mapa interativo, capitais do mundo, bandeiras e corrida contra o relógio.",
    tech: ["Geografia", "Frontend Ágil", "Competição", "Design Visual"]
  },
  {
    id: 10,
    title: "Word Guessing",
    theme: "Jogo de Adivinhação de Palavras & Vocabulário",
    tag: "Puzzle",
    category: "games",
    image: "assets/gamificacao/grupo_10.jpg",
    url: "https://wordguessing1.netlify.app/",
    members: ["Murilo Neres Delboni", "Luisa Melo Fernandes Beatta", "Ana Clara Papadio Favero", "Bruno Brasileiro de Matos Silva"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Desafio de dedução e vocabulário estilo wordle/termo com mecânicas viciantes de pistas e tentativas.",
    tech: ["Lógica", "Word Game", "Minimalismo", "UX Design"]
  },
  {
    id: 11,
    title: "Lost Legacy",
    theme: "RPG de Aventura & Exploração Narrativa",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_11.jpg",
    url: "https://lostlegacy.netlify.app/",
    members: ["Maria Julia Pereira Savazi", "Eduardo Moita de Oliveira", "Pedro Henrique Avellar Britto da Silva", "Fernanda Batista Fernandes"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "RPG com atmosfera imersiva, ruínas antigas, combate estratégico por turnos e história com mistérios ocultos.",
    tech: ["RPG", "Pixel Art", "Storytelling", "Trilha Sonora"]
  },
  {
    id: 12,
    title: "Brinqueduque",
    theme: "Brinquedoteca Virtual & Aprendizado Infantil",
    tag: "Gamificação",
    category: "gamificacao",
    image: "assets/gamificacao/grupo_12.jpg",
    url: "https://brinqueduque.netlify.app/",
    members: ["Laura Campos Crociari", "Maria Luiza Constantino Garcia", "Lucas Cicareli da Costa", "Cauã Scatena da Costa"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Ambiente lúdico com brinquedos educativos interativos desenvolvidos para enriquecer a criatividade e a coordenação motora.",
    tech: ["Pedagogia", "Acessibilidade", "Animações", "Interface Infantil"]
  },
  {
    id: 13,
    title: "Arcadia",
    theme: "Ação Retrô & Plataforma Arcade",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_13.jpg",
    url: "https://rafascalfi.itch.io/arcadia",
    members: ["Enzo Brito Mendes", "Beatryz Sthefany da Silva Leonaldo", "Eduardo Cestari", "Kawã Higor Civitelli Vieira"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Jogo de ação com estética arcade retrô publicado no itch.io, com saltos precisos, inimigos ágeis e chefões desafiadores.",
    tech: ["itch.io", "Retro Arcade", "Game Physics", "Level Design"]
  },
  {
    id: 14,
    title: "Brasil Brasil",
    theme: "Cultura Brasileira, Folclore & Aventura",
    tag: "Social",
    category: "social",
    image: "assets/gamificacao/grupo_14.jpg",
    url: "https://rafascalfi.itch.io/brasilbrasil",
    members: ["Otávio Salmaso Sartoreto", "Jessyca Cristina de Sousa Pereira", "Lariane Araujo de Oliveira", "Matheus Roçafa Rodrigues", "Kauan Vian Dias"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Celebração das lendas, biomas e riqueza cultural do Brasil em uma jornada envolvente com arte temática autoral.",
    tech: ["itch.io", "Cultura Nacional", "Concept Art", "Folclore"]
  },
  {
    id: 15,
    title: "Mathrush 2025",
    theme: "Corrida Matemática & Desafios de Agilidade",
    tag: "Gamificação",
    category: "gamificacao",
    image: "assets/gamificacao/grupo_15.jpg",
    url: "https://mathrush2025.netlify.app/",
    members: ["João Vitor Ribeiro Larocca", "Amanda Lima de Sousa", "Matheus da Silva Feltrim", "Melissa Ferrari de Jesus"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Competição dinâmica contra o tempo para resolver cálculos mentais e avançar de fase em alta velocidade.",
    tech: ["Math Game", "Competição", "Speedrun", "Gamificação"]
  },
  {
    id: 16,
    title: "Vortex 2025",
    theme: "Ficção Científica, Gravidade & Física Espacial",
    tag: "Gamedev",
    category: "games",
    image: "assets/gamificacao/grupo_16.jpg",
    url: "https://vortex2025.netlify.app/",
    members: ["Lívia Sousa Nascimento", "Carolina Soares da Costa", "Lucas Garcia de Souza Reis", "Hisabelly Almeida Konda"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Experiência sci-fi com distorção gravitacional, visual cyberpunk moderno e labirintos espaciais desafiadores.",
    tech: ["Sci-Fi", "Física de Jogos", "Cyberpunk", "Shader FX"]
  }
];

// Audiovisual Productions (ECOFILMES, SESI, Campanhas)
const AUDIOVISUAL_VIDEOS = [
  {
    id: "i7eyj9WIakg",
    title: "A Beira do Abismo",
    subtitle: "Festival de Vídeos ECOFILMES - Fernandópolis 2025",
    category: "Festival & Cinema",
    duration: "Curta-metragem",
    tag: "Premiado / Mostra",
    description: "Produção audiovisual selecionada para o Festival ECOFILMES Fernandópolis 2025, abordando questões ambientais e consciência ecológica com linguagem cinematográfica de alto impacto."
  },
  {
    id: "sCy3qr0oe6A",
    title: "Apresentação SESI",
    subtitle: "Vídeo Institucional & Produção dos Alunos",
    category: "Institucional",
    duration: "Institucional",
    tag: "SESI Fernandópolis",
    description: "Apresentação da unidade SESI, estrutura pedagógica e vivência dos alunos do curso técnico em multimídia nos laboratórios práticos."
  },
  {
    id: "6X7Po7k38Y4",
    title: "Campanha de Vacinação (Edição 1)",
    subtitle: "Campanha de Saúde Pública & Conscientização",
    category: "Campanha Social",
    duration: "Spot Audiovisual",
    tag: "Impacto Social",
    description: "Peça audiovisual produzida pelos estudantes para incentivo à vacinação, com planejamento de roteiro, captação em estúdio e pós-produção profissional."
  },
  {
    id: "QHBlazMWD9c",
    title: "Campanha de Vacinação (Edição 2)",
    subtitle: "Campanha de Conscientização Comunitária",
    category: "Campanha Social",
    duration: "Spot Audiovisual",
    tag: "Impacto Social",
    description: "Segunda versão da campanha de utilidade pública, demonstrando versatilidade na edição, dinamismo no ritmo e mensagem visual clara."
  }
];

// Videos from the II Feira de Games (28/11/2025)
const FEIRA_GAMES_VIDEOS = [
  {
    id: "UWUH_cInHh0",
    title: "Sequência 01 - Melhores Momentos",
    subtitle: "II Feira de Games (28/11/2025)",
    tag: "Destaque"
  },
  {
    id: "Lne2-4hglsc",
    title: "Alunos & Stands de Jogos",
    subtitle: "Apresentação dos projetos ao vivo pelos estudantes",
    tag: "Entrevistas"
  },
  {
    id: "Pg29tLnzlhI",
    title: "Visão Geral do Evento",
    subtitle: "Público, torneios e exposição dos jogos produzidos",
    tag: "Cobertura"
  },
  {
    id: "ujm0DsSeFAY",
    title: "Apresentação Musical 1",
    subtitle: "Trilha Sonora & Apresentação ao Vivo na Feira",
    tag: "Música & Som"
  },
  {
    id: "OhdGqJfvE4U",
    title: "Apresentação Musical 2",
    subtitle: "Música & Performance cultural dos alunos",
    tag: "Música & Som"
  }
];

// Photos of Feira 2024 (152 high-res optimized photos from OneDrive)
const PHOTOS_2024 = Array.from({ length: 152 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `assets/feira-2024/foto_${num}.jpg`;
});

// Photos of Feira 2025 (133 high-res photos from Feira de Games 2025)
const PHOTOS_2025 = Array.from({ length: 133 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  return `assets/feira-2025/foto_${num}.jpg`;
});

// Lightbox state
let currentGallery = [];
let currentPhotoIndex = 0;

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(PROJECT_GROUPS);
  renderAudiovisualVideos();
  renderFeiraVideos();
  renderPhotos("gallery-2025", PHOTOS_2025, "II Feira de Games 2025");
  renderPhotos("gallery-2024", PHOTOS_2024, "I Feira de Games 2024");
  setupFilters();
  setupSearch();
  setupFeiraTabs();
  setupCountdown();
  setupModals();
  setupLightboxKeyboard();
});

// Render Projects List with Real Banners & Play Links
function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  const counter = document.getElementById("projects-count");
  if (!container) return;

  if (counter) {
    counter.innerText = `${projects.length} projeto${projects.length !== 1 ? 's' : ''} de gamificação`;
  }

  if (projects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 glass-panel rounded-2xl p-8">
        <svg class="w-16 h-16 mx-auto mb-4 text-purple-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h4 class="text-xl font-bold text-white mb-2">Nenhum projeto encontrado</h4>
        <p class="text-sm">Tente buscar por outro termo, nome de aluno ou limpar os filtros.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <div class="glass-panel rounded-2xl overflow-hidden card-hover-lift flex flex-col justify-between border border-slate-800 hover:border-purple-500/50 relative group">
      
      <!-- Banner Oficial do Projeto -->
      <div class="relative aspect-video bg-slate-900 overflow-hidden border-b border-slate-800/80">
        <img 
          src="${p.image}" 
          alt="${p.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%230f172a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%238b5cf6%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3E🎮%20${encodeURIComponent(p.title)}%3C%2Ftext%3E%3C%2Fsvg%3E'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <!-- Badges sobre a imagem -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur border border-purple-500/30 text-purple-300">
            ${p.tag}
          </span>
          <span class="text-[10px] text-slate-300 font-mono bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded border border-slate-800">
            Grupo #${p.id < 10 ? '0' + p.id : p.id}
          </span>
        </div>
      </div>

      <!-- Conteúdo do Card -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
            ${p.title}
          </h3>
          <p class="text-xs text-cyan-400 font-medium mb-3">
            ${p.theme}
          </p>
          <p class="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
            ${p.description}
          </p>

          <!-- Integrantes do Grupo -->
          <div class="bg-slate-900/80 rounded-xl p-3 border border-slate-800/80 mb-4">
            <div class="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1.5 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Desenvolvido por:
            </div>
            <ul class="text-[11px] text-slate-300 space-y-1">
              ${p.members.map(m => `
                <li class="flex items-center gap-1.5 truncate">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  <span class="truncate">${m}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div>
          <!-- Botão Principal: Jogar / Acessar Jogo Original -->
          <a 
            href="${p.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 transition-all mb-2.5 border border-purple-400/30"
          >
            <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Jogar / Acessar Projeto
            <svg class="w-3 h-3 text-purple-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- Botão Ficha Técnica / Detalhes -->
          <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span class="text-[11px] text-slate-400 truncate">
              Heber & Scalfi
            </span>
            <button onclick="openProjectModal(${p.id})" class="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1 hover:underline text-xs">
              Ver Ficha
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  `).join('');
}

// Render Audiovisual Videos
function renderAudiovisualVideos() {
  const container = document.getElementById("videos-grid");
  if (!container) return;

  container.innerHTML = AUDIOVISUAL_VIDEOS.map(v => `
    <div class="glass-panel rounded-2xl overflow-hidden card-hover-lift video-card group border border-slate-800 flex flex-col justify-between">
      <div class="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden" onclick="openVideoModal('${v.id}', '${v.title}')">
        <img 
          src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" 
          alt="${v.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 play-btn-overlay border border-purple-400/50">
            <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <span class="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur border border-purple-500/30 text-purple-300">
          ${v.tag}
        </span>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs text-cyan-400 font-medium">${v.category}</span>
          <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mt-1 mb-2">
            ${v.title}
          </h3>
          <p class="text-xs text-slate-300 mb-3">${v.subtitle}</p>
          <p class="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
            ${v.description}
          </p>
        </div>

        <button 
          onclick="openVideoModal('${v.id}', '${v.title}')" 
          class="w-full py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 border border-purple-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Assistir Produção
        </button>
      </div>
    </div>
  `).join('');
}

// Render Feira Videos
function renderFeiraVideos() {
  const container = document.getElementById("feira-videos-grid");
  if (!container) return;

  container.innerHTML = FEIRA_GAMES_VIDEOS.map(v => `
    <div class="glass-panel rounded-xl overflow-hidden card-hover-lift group border border-slate-800 cursor-pointer" onclick="openVideoModal('${v.id}', '${v.title}')">
      <div class="relative aspect-video bg-slate-900 overflow-hidden">
        <img 
          src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" 
          alt="${v.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-cyan-600/90 text-white flex items-center justify-center shadow play-btn-overlay">
            <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <span class="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
          ${v.tag}
        </span>
      </div>
      <div class="p-3.5">
        <h4 class="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
          ${v.title}
        </h4>
        <p class="text-xs text-slate-400 mt-1 truncate">
          ${v.subtitle}
        </p>
      </div>
    </div>
  `).join('');
}

// Render Photo Galleries for Feira 2024 and 2025
function renderPhotos(containerId, photosList, galleryTitle) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = photosList.map((src, index) => `
    <div class="group relative aspect-video sm:aspect-square bg-slate-900 rounded-xl overflow-hidden border border-slate-800/80 hover:border-purple-500/50 cursor-pointer card-hover-lift" onclick="openLightbox('${containerId}', ${index})">
      <img 
        src="${src}" 
        alt="${galleryTitle} - Foto ${index + 1}" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
        <span class="text-[11px] font-medium text-white flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Ampliar Foto
        </span>
      </div>
    </div>
  `).join('');
}

// Lightbox Logic
function openLightbox(galleryType, index) {
  if (galleryType === 'gallery-2025') {
    currentGallery = PHOTOS_2025;
  } else {
    currentGallery = PHOTOS_2024;
  }

  currentPhotoIndex = index;
  updateLightboxImage();

  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function updateLightboxImage() {
  const imgEl = document.getElementById("lightbox-img");
  const counterEl = document.getElementById("lightbox-counter");
  if (!imgEl || currentGallery.length === 0) return;

  imgEl.src = currentGallery[currentPhotoIndex];
  if (counterEl) {
    counterEl.innerText = `Foto ${currentPhotoIndex + 1} de ${currentGallery.length}`;
  }
}

function nextLightboxImage() {
  if (currentGallery.length === 0) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % currentGallery.length;
  updateLightboxImage();
}

function prevLightboxImage() {
  if (currentGallery.length === 0) return;
  currentPhotoIndex = (currentPhotoIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function setupLightboxKeyboard() {
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("lightbox-modal");
    if (!modal || modal.classList.contains("hidden")) return;

    if (e.key === "ArrowRight") nextLightboxImage();
    if (e.key === "ArrowLeft") prevLightboxImage();
    if (e.key === "Escape") closeLightbox();
  });
}

// Setup Filters
function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-purple-600", "text-white", "border-purple-400");
        b.classList.add("bg-slate-900/60", "text-slate-400", "border-slate-800");
      });
      btn.classList.remove("bg-slate-900/60", "text-slate-400", "border-slate-800");
      btn.classList.add("bg-purple-600", "text-white", "border-purple-400");

      const filter = btn.getAttribute("data-filter");
      const searchInput = document.getElementById("search-input");
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

      filterAndSearchProjects(filter, query);
    });
  });
}

// Setup Search
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activeBtn = document.querySelector(".filter-btn.bg-purple-600");
    const currentFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    filterAndSearchProjects(currentFilter, query);
  });
}

function filterAndSearchProjects(filter, query) {
  let filtered = PROJECT_GROUPS;

  if (filter && filter !== "all") {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (query) {
    filtered = filtered.filter(p => {
      const inTitle = p.title.toLowerCase().includes(query);
      const inTheme = p.theme.toLowerCase().includes(query);
      const inDesc = p.description.toLowerCase().includes(query);
      const inMembers = p.members.some(m => m.toLowerCase().includes(query));
      const inTech = p.tech.some(t => t.toLowerCase().includes(query));
      return inTitle || inTheme || inDesc || inMembers || inTech;
    });
  }

  renderProjects(filtered);
}

// Feira Tabs (2024, 2025, 2026)
function setupFeiraTabs() {
  const tabBtns = document.querySelectorAll(".feira-tab-btn");
  const tabContents = document.querySelectorAll(".feira-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const year = btn.getAttribute("data-year");

      tabBtns.forEach(b => {
        b.classList.remove("active", "border-purple-500", "text-white", "bg-purple-900/30");
        b.classList.add("text-slate-400", "border-slate-800");
      });
      btn.classList.add("active", "border-purple-500", "text-white", "bg-purple-900/30");

      tabContents.forEach(c => {
        if (c.getAttribute("data-year") === year) {
          c.classList.remove("hidden");
        } else {
          c.classList.add("hidden");
        }
      });
    });
  });
}

// Countdown to Feira Games 2026 (03/12/2026)
function setupCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minsEl = document.getElementById("count-mins");
  const secsEl = document.getElementById("count-secs");

  if (!daysEl) return;

  // Set target date to December 3, 2026 at 08:00
  const targetDate = new Date("2026-12-03T08:00:00").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minsEl.innerText = "00";
      secsEl.innerText = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = d < 10 ? '0' + d : d;
    hoursEl.innerText = h < 10 ? '0' + h : h;
    minsEl.innerText = m < 10 ? '0' + m : m;
    secsEl.innerText = s < 10 ? '0' + s : s;
  }

  update();
  setInterval(update, 1000);
}

// Modals Handling
function setupModals() {
  const videoModal = document.getElementById("video-modal");
  const projectModal = document.getElementById("project-modal");
  const lightboxModal = document.getElementById("lightbox-modal");

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal();
      closeProjectModal();
      closeLightbox();
    }
  });

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }
}

function openVideoModal(videoId, title) {
  const modal = document.getElementById("video-modal");
  const iframeContainer = document.getElementById("video-iframe-container");
  const titleEl = document.getElementById("video-modal-title");

  if (!modal || !iframeContainer) return;

  if (titleEl) titleEl.innerText = title;

  iframeContainer.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
      title="${title}" 
      class="w-full h-full rounded-xl" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframeContainer = document.getElementById("video-iframe-container");
  if (!modal) return;

  if (iframeContainer) iframeContainer.innerHTML = "";
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function openProjectModal(id) {
  const project = PROJECT_GROUPS.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("project-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-start justify-between mb-4">
      <div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300">
          ${project.tag}
        </span>
        <h3 class="text-2xl font-bold text-white mt-2">${project.title}</h3>
        <p class="text-sm text-cyan-400 font-medium">${project.theme}</p>
      </div>
      <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Banner no Modal -->
    <div class="rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 mb-6">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
    </div>

    <div class="space-y-4 mb-6">
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Sobre o Projeto</h4>
        <p class="text-sm text-slate-300 leading-relaxed">${project.description}</p>
      </div>

      <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Desenvolvido por:
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
          ${project.members.map(m => `
            <div class="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span class="font-medium">${m}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Competências e Tecnologias</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map(t => `
            <span class="text-xs px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Botão de Ação Direta no Modal -->
      <a 
        href="${project.url}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all border border-purple-400/30"
      >
        <svg class="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Jogar / Abrir Projeto Completo no Navegador
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div>
          <span class="block text-slate-400">Supervisão Pedagógica:</span>
          <span class="font-semibold text-slate-200">Prof. Heber Roberto & Prof. Rafael Scalfi</span>
        </div>
        <span class="px-3 py-1 rounded bg-slate-800 text-slate-300 font-mono">SESI Fernandópolis</span>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Window global exposure
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightboxImage = nextLightboxImage;
window.prevLightboxImage = prevLightboxImage;
