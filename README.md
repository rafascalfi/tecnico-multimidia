# 🎮 Portal Técnico em Multimídia & Jogos
### SESI Fernandópolis • Reformulação Visual & Portfólio Digital

Este projeto é a reformulação completa do antigo Google Sites do **Curso Técnico em Multimídia & Jogos** (`https://sites.google.com/view/tcnicoemmultimdia-jogos/tecnico-multimidia`), concebido com uma **identidade visual autêntica de Estúdio Criativo, Audiovisual e Gamedev**.

---

## 🚀 Principais Melhorias em Relação ao Site Antigo

| Aspecto | No Google Sites Antigo | No Novo Portal Reformulado |
| :--- | :--- | :--- |
| **Identidade Visual** | Layout branco/cinza padrão e genérico do Google Sites | **Dark Cyber/Creative Studio** com gradientes neon (roxo elétrico, ciano, rosa), tipografia moderna e visual digno de um curso de multimídia |
| **Gamificação (16 Grupos)** | Blocos de texto simples e repetitivos sem destaque | **Showcase Interativo com Busca em Tempo Real**, filtros por categoria (Gamedev, Gamificação, Multimídia, Social), tags de tecnologia e modal de detalhes |
| **Vídeos & Produções** | Iframes padrão do YouTube soltos pela página | **Grade cinematográfica** com thumbnails em alta resolução e **Player Modal Integrado** (assista sem sair da página) |
| **Feira de Games** | Páginas separadas estáticas (2024, 2025, 2026) | **Central Unificada com Abas Interativas**, contagem regressiva ao vivo para a **Feira de Games 2026** e cobertura completa em vídeo da II Feira (28/11/2025) |
| **Festival ECOFILMES** | Texto disperso | Destaque especial para a produção premiada *"A Beira do Abismo"* (Festival ECOFILMES Fernandópolis 2025) |
| **Docência & Instituição** | Menções em texto corrido | Seção dedicada aos professores **Rafael Scalfi** e **Heber Roberto**, e ao **SESI Fernandópolis** |
| **Performance & Responsividade** | Dependência de scripts pesados do Google | **100% Responsivo**, leve, ultra-rápido em smartphones, tablets e desktops |

---

## 📁 Estrutura de Arquivos

```
Novo Site/
├── index.html                  # Estrutura semântica completa e moderna da página
├── styles.css                  # Efeitos de glassmorphism, glow neon, scrollbars e animações
├── app.js                      # Lógica interativa: dados dos 16 grupos, vídeos, busca, filtros e modais
├── README.md                   # Documentação e instruções de uso
└── _backup_dados_extraidos/    # Backup dos dados originais extraídos do Google Sites
```

---

## 💻 Como Executar Localmente

### Opção 1: Direto no Navegador (Mais Rápido)
Basta dar um duplo clique no arquivo [`index.html`](file:///c:/Users/Instrutor/Desktop/Novo%20Site/index.html) para abri-lo em qualquer navegador (Chrome, Edge, Firefox).

### Opção 2: Via Servidor Local
Se preferir rodar em um servidor local com live-server ou python:
```bash
python -m http.server 3000
```
Em seguida, acesse no navegador: `http://localhost:3000`

---

## 🌐 Como Publicar / Colocar no Ar

Você pode colocar este novo site no ar de várias formas gratuitas e simples:

1. **Vercel ou Netlify (Recomendado)**:
   - Arraste a pasta `Novo Site` diretamente no painel do [Netlify Drop](https://app.netlify.com/drop) ou conecte ao GitHub com a Vercel. O site ficará no ar em 10 segundos com HTTPS gratuito e domínio próprio.
2. **GitHub Pages**:
   - Suba os arquivos em um repositório no GitHub e ative o *GitHub Pages* nas configurações.
3. **Incorporar no Google Sites Existente**:
   - Caso queira manter a URL do Google Sites, você pode usar a opção de **Inserir > Código / Embed** no Google Sites e apontar para a versão hospedada ou colar os componentes.

---

## 🛠️ Como Adicionar Novos Alunos, Projetos ou Vídeos

Toda a lista de dados está centralizada e comentada no início do arquivo [`app.js`](file:///c:/Users/Instrutor/Desktop/Novo%20Site/app.js):

- **Para adicionar novos projetos**: basta adicionar um objeto no array `PROJECT_GROUPS`.
- **Para adicionar vídeos audiovisuais**: adicione no array `AUDIOVISUAL_VIDEOS`.
- **Para adicionar vídeos da feira**: adicione no array `FEIRA_GAMES_VIDEOS`.
