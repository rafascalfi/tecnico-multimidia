// Data and interactive logic for Técnico em Multimídia & Jogos

const PROJECT_GROUPS = [
  {
    id: 1,
    title: "Projeto de Gamificação #01",
    theme: "Narrativa Interativa & Gamificação Educacional",
    tag: "Gamificação",
    category: "gamificacao",
    members: ["Guilherme Maciel de Freitas", "Júlia Mazetti Silva", "Nathalia Guerreiro Silva", "Yasmin de Oliveira Carvalho"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Pesquisa aplicada e desenvolvimento de protótipo gamificado focando em dinâmicas de engajamento, storytelling e design de interação.",
    tech: ["Game Design", "Roteiro Narrativo", "UI/UX", "Prototipagem"]
  },
  {
    id: 2,
    title: "Projeto de Gamificação #02",
    theme: "Mecânicas de Jogos & Lógica Interativa",
    tag: "Gamedev",
    category: "games",
    members: ["João Pedro Rodrigues Rafael", "Lucas Alonso Perecim", "Pedro Sastre Vilcher Della Rosa", "Vitor Gabriel Pereira Gregorio"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Estruturação de desafios, progressão e balanceamento de regras para jogos interativos com ênfase em experiência do jogador (Player Experience).",
    tech: ["Lógica de Jogos", "Pixel Art", "Level Design", "Áudio Interativo"]
  },
  {
    id: 3,
    title: "Projeto de Gamificação #03",
    theme: "Imersão Sonora e Visual em Mídias Digitais",
    tag: "Multimídia",
    category: "audiovisual",
    members: ["Arthur Marchiori Gubatto", "Guilherme Gabriel Oliveira Ferreira", "Jullia Fonseca Malaquias", "Kamily Vitoria de Lima Valadão"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Criação de identidade visual e sound design integrados para enriquecer a ambientação de projetos multimídia e jogos.",
    tech: ["Sound Design", "Concept Art", "Design Gráfico", "Animação"]
  },
  {
    id: 4,
    title: "Projeto de Gamificação #04",
    theme: "Ambientes Virtuais e Interatividade",
    tag: "Gamedev",
    category: "games",
    members: ["Guilherme Biata Sartoreto", "Olivia Toledo Brizoti", "Paulo Otávio Castrequini da Silva", "Renan Faria de Souza"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Construção de cenários e mundos digitais, trabalhando composição espacial, iluminação e caminhos de navegação do jogador.",
    tech: ["Cenografia Digital", "Modelagem", "Iluminação", "UI Dinâmica"]
  },
  {
    id: 5,
    title: "Projeto de Gamificação #05",
    theme: "Storytelling e Engajamento Social",
    tag: "Social",
    category: "social",
    members: ["Beatriz Carvalho Fraga", "Gabriel Nagata Maciel", "Ruan Henrique Batista Tolentino", "Sophia Maria Nascimento Ladeia"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Desenvolvimento de experiências lúdicas orientadas à conscientização e comunicação de impacto comunitário e cultural.",
    tech: ["Roteiro Social", "Design Emocional", "Comunicação", "Direção de Arte"]
  },
  {
    id: 6,
    title: "Projeto de Gamificação #06",
    theme: "Gamificação & Design Centrado no Usuário",
    tag: "Gamificação",
    category: "gamificacao",
    members: ["Afonso Castelli Uliana", "Danielle Marchetti Rodrigues", "Júlia Trivelato Almeida", "Mariana Galinari Oliveira"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Aplicação dos 8 pilares da gamificação Octalysis para potencializar motivação e aprendizado em tarefas interativas.",
    tech: ["UX Research", "Gamification Framework", "Wireframing", "Testes de Usuário"]
  },
  {
    id: 7,
    title: "Projeto de Gamificação #07",
    theme: "Direção de Arte e Estética de Jogos",
    tag: "Design",
    category: "games",
    members: ["Ana Laura Camilo Gouveia", "Gabriel Henrique Rosa Larocca", "Kauã Henrique Leite Ferreira", "Leticia Crispim Alves"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Criação de paleta cromática, assets gráficos e estilo visual marcante para interface de jogos e produtos digitais.",
    tech: ["Ilustração Digital", "Tipografia", "Asset Pipeline", "UI/UX"]
  },
  {
    id: 8,
    title: "Projeto de Gamificação #08",
    theme: "Jogos de Aventura & Progressão",
    tag: "Gamedev",
    category: "games",
    members: ["Mattheus Maia de Oliveira", "Maria Eduarda de Castro Costa", "Vitoria Gabrieli Rosa Larocca", "Yuri Augusto Bento Castilho Gomes"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Design de mecânicas de exploração e recompensas dinâmicas, refinando curva de aprendizado e retenção do jogador.",
    tech: ["Game Mechanics", "Reward Systems", "Storyboarding", "Audio FX"]
  },
  {
    id: 9,
    title: "Projeto de Gamificação #09",
    theme: "Comunicação Audiovisual & Transmídia",
    tag: "Audiovisual",
    category: "audiovisual",
    members: ["Murilo Pereira Devechi", "Giovana Nilo Silva", "Julia Storti Souza", "Laura de Sousa Silva"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Integração entre linguagens de vídeo, animação e interfaces interativas para plataformas multiplataforma.",
    tech: ["Edição de Vídeo", "Motion Graphics", "Transmídia", "Design Visual"]
  },
  {
    id: 10,
    title: "Projeto de Gamificação #10",
    theme: "Estratégia Lúdica e Resolução de Problemas",
    tag: "Gamificação",
    category: "gamificacao",
    members: ["Murilo Neres Delboni", "Luisa Melo Fernandes Beatta", "Ana Clara Papadio Favero", "Bruno Brasileiro de Matos Silva"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Concepção de quebra-cabeças e puzzles inteligentes aplicados à resolução de desafios práticos em ambientes colaborativos.",
    tech: ["Puzzle Design", "Dinâmicas de Grupo", "Prototipagem Ágil", "UX"]
  },
  {
    id: 11,
    title: "Projeto de Gamificação #11",
    theme: "Narrativas Ramificadas e Escolhas",
    tag: "Narrativa",
    category: "games",
    members: ["Maria Julia Pereira Savazi", "Eduardo Moita de Oliveira", "Pedro Henrique Avellar Britto da Silva", "Fernanda Batista Fernandes"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Elaboração de roteiro interativo com múltiplos desfechos com base nas escolhas éticas e decisões tomadas pelo usuário.",
    tech: ["Branching Narrative", "Character Design", "Roteiro Técnico", "Psicologia do Jogo"]
  },
  {
    id: 12,
    title: "Projeto de Gamificação #12",
    theme: "Design de Interface & Acessibilidade em Jogos",
    tag: "UI/UX",
    category: "gamificacao",
    members: ["Laura Campos Crociari", "Maria Luiza Constantino Garcia", "Lucas Cicareli da Costa", "Cauã Scatena da Costa"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Estudo de usabilidade, contraste de cores e legibilidade voltados para tornar produtos multimídia inclusivos e acessíveis.",
    tech: ["Acessibilidade (a11y)", "Design Systems", "Testes de Ergonomia", "UI/UX"]
  },
  {
    id: 13,
    title: "Projeto de Gamificação #13",
    theme: "Feedback Imediato e Gameloop",
    tag: "Gamedev",
    category: "games",
    members: ["Enzo Brito Mendes", "Beatryz Sthefany da Silva Leonaldo", "Eduardo Cestari", "Kawã Higor Civitelli Vieira"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Otimização do ciclo central de jogabilidade (Core Loop), trazendo sensação de impacto visual e sonoro contínuo ('game feel').",
    tech: ["Game Feel", "Animação de Feedback", "Sistemas de Pontuação", "Playtest"]
  },
  {
    id: 14,
    title: "Projeto de Gamificação #14",
    theme: "Gamificação Comunitária e Cidadania",
    tag: "Social",
    category: "social",
    members: ["Otávio Salmaso Sartoreto", "Jessyca Cristina de Sousa Pereira", "Lariane Araujo de Oliveira", "Matheus Roçafa Rodrigues", "Kauan Vian Dias"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Proposta de game educativo voltado ao engajamento em projetos comunitários, saúde pública e conscientização ambiental.",
    tech: ["Impacto Social", "Educação Gamificada", "Comunicação Visual", "Direção de Arte"]
  },
  {
    id: 15,
    title: "Projeto de Gamificação #15",
    theme: "Multimídia Interativa & Experiência Digital",
    tag: "Multimídia",
    category: "audiovisual",
    members: ["João Vitor Ribeiro Larocca", "Amanda Lima de Sousa", "Matheus da Silva Feltrim", "Melissa Ferrari de Jesus"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Produção de conteúdo rico combinando gráficos vetoriais, trilha sonora e microinterações para plataformas digitais.",
    tech: ["Produção Digital", "Animação 2D", "Interface Multimídia", "Design Interativo"]
  },
  {
    id: 16,
    title: "Projeto de Gamificação #16",
    theme: "Inovação, Juventude e Tendências de Games",
    tag: "Gamedev",
    category: "games",
    members: ["Lívia Sousa Nascimento", "Carolina Soares da Costa", "Lucas Garcia de Souza Reis", "Hisabelly Almeida Konda"],
    supervisors: ["Prof. Heber Roberto", "Prof. Rafael Scalfi"],
    description: "Exploração de novas estéticas visuais e temáticas contemporâneas na criação de propostas de jogos para jovens.",
    tech: ["Tendências de Games", "Concept Art", "Game Pitch", "Prototipagem Rápida"]
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

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(PROJECT_GROUPS);
  renderAudiovisualVideos();
  renderFeiraVideos();
  setupFilters();
  setupSearch();
  setupFeiraTabs();
  setupCountdown();
  setupModals();
});

// Render Projects List
function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  const counter = document.getElementById("projects-count");
  if (!container) return;

  if (counter) {
    counter.innerText = `${projects.length} projeto${projects.length !== 1 ? 's' : ''} encontrado${projects.length !== 1 ? 's' : ''}`;
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
    <div class="glass-panel rounded-2xl p-6 card-hover-lift flex flex-col justify-between border border-slate-800 hover:border-purple-500/40 relative group">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300">
            ${p.tag}
          </span>
          <span class="text-xs text-slate-400 font-mono">Grupo #${p.id < 10 ? '0' + p.id : p.id}</span>
        </div>

        <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
          ${p.title}
        </h3>
        <p class="text-sm text-cyan-400/90 font-medium mb-3">
          ${p.theme}
        </p>
        <p class="text-xs text-slate-400 mb-5 leading-relaxed line-clamp-3">
          ${p.description}
        </p>

        <!-- Integrantes do Grupo -->
        <div class="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 mb-4">
          <div class="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Alunos Desenvolvedores
          </div>
          <ul class="text-xs text-slate-300 space-y-1">
            ${p.members.map(m => `
              <li class="flex items-center gap-1.5 truncate">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span class="truncate">${m}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div>
        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${p.tech.map(t => `
            <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
              ${t}
            </span>
          `).join('')}
        </div>

        <!-- Mentoria & Botão Detalhes -->
        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span class="text-[11px] text-slate-400">
            Prof. Heber & Prof. Scalfi
          </span>
          <button onclick="openProjectModal(${p.id})" class="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1 hover:underline">
            Ver detalhes
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
        
        <!-- Play Button Overlay -->
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

// Countdown to Feira Games 2026
function setupCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minsEl = document.getElementById("count-mins");
  const secsEl = document.getElementById("count-secs");

  if (!daysEl) return;

  // Set target date to November 27, 2026
  const targetDate = new Date("2026-11-27T08:00:00").getTime();

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

  // Close with Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideoModal();
      closeProjectModal();
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

    <div class="space-y-4 my-6">
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Sobre o Projeto</h4>
        <p class="text-sm text-slate-300 leading-relaxed">${project.description}</p>
      </div>

      <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Equipe de Estudantes
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

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div>
          <span class="block text-slate-400">Supervisão Pedagógica:</span>
          <span class="font-semibold text-slate-200">${project.supervisors.join(" & ")}</span>
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

// Window global exposure for inline onclick handlers
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
