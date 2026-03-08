// ============================================================
//  Necxet — config.js
//  Edite este arquivo para personalizar o site sem tocar no HTML
// ============================================================

const NOCTYRA_CONFIG = {

    // ── SITE ──────────────────────────────────────────────────
    site: {
      name: "Necxet",
      tagline: "O universo de cada jogo, revelado.",
      description:
        "Explore a origem, o universo e o guia completo dos maiores jogos da história. Do primeiro passo ao domínio total.",
      year: 2025,
    },
  
    // ── TEMA / CORES ──────────────────────────────────────────
    theme: {
      bg:          "#07070f",       // fundo principal
      surface:     "#0e0e1c",       // cards / surfaces
      surface2:    "#13132a",       // modais e camadas
      border:      "rgba(138,43,226,0.18)",
      accent:      "#8a2be2",       // roxo principal
      accentGlow:  "#b44aff",       // roxo claro / glow
      accentDim:   "#5b1a9e",       // roxo escuro
      accentAlt:   "#c77dff",       // lilás suave
      text:        "#e8e0f5",       // texto principal
      textMuted:   "#7a7090",       // texto secundário
      textFaint:   "#3d3558",       // texto fantasma
      highlight:   "#ff79c6",       // destaque rosado
      gold:        "#d4af37",       // dourado para estrelas
    },
  
    // ── FONTE ─────────────────────────────────────────────────
    fonts: {
      display: "'Cinzel Decorative', serif",
      heading:  "'Cinzel', serif",
      body:     "'DM Mono', monospace",
    },
  
    // ── HERO ──────────────────────────────────────────────────
    hero: {
      featuredGameId: "eldenring",
      badge: "⬡ Destaque da Semana",
    },
  
    // ── MARQUEE ───────────────────────────────────────────────
    marquee: {
      items: [
        "The Witcher 3", "Elden Ring", "Minecraft", "Dark Souls",
        "GTA V", "Hollow Knight", "Stardew Valley", "Celeste",
        "Red Dead 2", "Cyberpunk 2077", "Hades", "Ori",
      ],
      speed: "28s",
    },
  
    // ── JOGOS ─────────────────────────────────────────────────
    games: [
      {
        id: "witcher",
        title: "The Witcher 3",
        subtitle: "Wild Hunt",
        genre: "RPG de Mundo Aberto",
        genreIcon: "⚔",
        year: 2015,
        developer: "CD Projekt Red",
        platforms: "PC · PS4 · Xbox · Switch",
        hours: "~50h",
        rating: "10",
        tags: ["rpg"],
        accentColor: "#4e9eff",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0a0e1f 0%, #0d2040 50%, #0a3060 100%)",
        about:
          "The Witcher 3: Wild Hunt é considerado um dos melhores jogos de todos os tempos. Você joga como Geralt de Rívia, um Bruxo — caçador de monstros profissional — em busca de Ciri, sua filha adotiva, enquanto o temível Caçado Selvagem assola o continente. O jogo se passa em um vasto mundo aberto com narrativas profundas, escolhas morais sem resposta certa e um sistema de combate com sinais mágicos, pocões e espadas. Cada região tem sua própria cultura, conflito e mistério.",
        steps: [
          "Escolha a dificuldade: Iniciante ou Espada e História são ótimas para apreciar a narrativa.",
          "Faça o tutorial em Kaer Morhen — ele ensina combate, esquiva e o uso de sinais mágicos.",
          "Não ignore as missões secundárias! Muitas são mais ricas que a história principal.",
          "Explore o Mapa: Pontos de Interrogação escondem tesouros, monstros e missões.",
          "Leia os Bestiários antes de lutar — cada monstro tem fraqueza específica.",
        ],
        tips: [
          { title: "🎯 Combate", text: "Sempre aplique o óleo certo na espada antes de enfrentar um monstro. Use o sinal Quen como escudo pessoal." },
          { title: "🗺 Exploração", text: "Viaje de cavalo com Roach e marque Pontos de Interrogação para explorar sistematicamente." },
          { title: "💬 Escolhas", text: "As escolhas importam. Não existe resposta errada — mas as consequências são reais e aparecem horas depois." },
          { title: "⚗️ Preparo", text: "Sempre medite antes de batalhas difíceis para regenerar HP e repor pocões de Golondrina." },
        ],
      },
      {
        id: "minecraft",
        title: "Minecraft",
        subtitle: "Java & Bedrock",
        genre: "Sobrevivência & Criação",
        genreIcon: "⛏",
        year: 2011,
        developer: "Mojang",
        platforms: "PC · Mobile · Console",
        hours: "Infinito",
        rating: "10",
        tags: ["sobrevivencia"],
        accentColor: "#55efc4",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #071a10 0%, #0d3320 50%, #134e30 100%)",
        about:
          "Minecraft é um jogo sandbox de sobrevivência e construção em um mundo gerado proceduralmente em blocos. Não há objetivo fixo: você pode sobreviver, construir, explorar, ou criar redstone. No modo Sobrevivência você coleta recursos, cria ferramentas e enfrenta monstros noturnos. No Criativo os recursos são infinitos. O objetivo final é derrotar o Ender Dragon, mas o jogo é muito maior do que isso.",
        steps: [
          "No primeiro dia, corte madeira com a mão — aperte a árvore até o bloco cair.",
          "Crie uma bancada de trabalho (4 tábuas) e ferramentas: picareta, machado, pá e espada.",
          "Antes do anoitecer, construa um abrigo. Um cubo de terra com porta já salva sua vida.",
          "Mine pedra para ferramentas melhores e localize carvão para fazer tochas.",
          "Explore cavernas para encontrar ferro, ouro e diamante. Nunca mine sem tochas!",
        ],
        tips: [
          { title: "🌙 Primeira Noite", text: "Fique dentro do abrigo! Creepers explodem e Skeletons atiram setas. Espere o sol nascer." },
          { title: "💎 Mineração", text: "Diamantes aparecem entre Y=5 e Y=16. Mine no nível Y=11 para maximizar os encontros." },
          { title: "🌾 Comida", text: "Plante trigo logo. Sem comida, seu HP não regenera. Criação de animais ajuda muito." },
          { title: "🔥 Nether", text: "Para ir ao Nether, construa um portal de obsidiana. Leve armadura e prepare-se para o calor." },
        ],
      },
      {
        id: "darksouls",
        title: "Dark Souls",
        subtitle: "Remastered",
        genre: "Action RPG",
        genreIcon: "🔥",
        year: 2011,
        developer: "FromSoftware",
        platforms: "PC · PS4 · Xbox · Switch",
        hours: "~50h",
        rating: "9.5",
        tags: ["acao"],
        accentColor: "#e17055",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0f0300 0%, #2a0800 50%, #4a1000 100%)",
        about:
          "Dark Souls é um RPG de ação de extrema dificuldade onde cada inimigo pode matar você. O jogo se passa em Lordran, um reino em decadência, e você é um Morto-Vivo destinado a quebrar a maldição do anel escuro. A narrativa é contada através do ambiente e descrições de itens — não há explicações diretas. O gameplay gira em torno de aprender padrões de inimigos, gerenciar stamina e posicionamento. Morte é parte do aprendizado.",
        steps: [
          "Escolha Guerreiro ou Cavaleiro: são as classes mais equilibradas para iniciantes.",
          "Aprenda o ritmo: ataque → espere abrir → ataque. Nunca seja ganancioso com hits extras.",
          "Suba para o Campanário de Undead Burg — é o caminho indicado pelo design do jogo.",
          "Derrote o Gargoyle Gêmeo no Campanário para tocar o sino e abrir novas áreas.",
          "Gaste Almas em Níveis ou guarde para comprar itens essenciais com comerciantes.",
        ],
        tips: [
          { title: "⚔️ Combate", text: "Bloqueie com escudo e aguarde a abertura. Rolagem boa é sua melhor defesa contra chefões." },
          { title: "💀 Mortes", text: "Você perde Almas ao morrer, mas pode recuperá-las voltando ao local — sem morrer de novo." },
          { title: "🛡 Peso", text: "Fique abaixo de 25% do peso máximo para ter a rolagem rápida — crucial para desviar." },
          { title: "🔥 Fogueiras", text: "Descanse nas Fogueiras para recuperar HP e Frascos de Estus, mas inimigos reaparecem." },
        ],
      },
      {
        id: "gtav",
        title: "GTA V",
        subtitle: "Grand Theft Auto",
        genre: "Ação & Crime",
        genreIcon: "🚗",
        year: 2013,
        developer: "Rockstar Games",
        platforms: "PC · PS5 · Xbox Series",
        hours: "~35h + Online",
        rating: "9.5",
        tags: ["acao"],
        accentColor: "#ff79c6",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0a0818 0%, #1a0e38 50%, #200a40 100%)",
        about:
          "GTA V se passa em Los Santos, uma metrópole fictícia baseada em Los Angeles. Você alterna entre três protagonistas: Michael (ex-ladrão aposentado), Trevor (psicopata) e Franklin (jovem ambicioso). A campanha envolve assaltos elaborados, conflitos entre facções e corrupção policial. O GTA Online é um mundo vivo com missões, corridas, assaltos e eventos constantes — com atualizações por mais de 10 anos.",
        steps: [
          "Jogue a campanha solo primeiro para entender o mundo e os personagens.",
          "Complete os Assaltos (Heists) — são as missões mais elaboradas do single-player.",
          "Troque entre Michael, Franklin e Trevor para avançar nas missões de cada um.",
          "Antes do GTA Online, termine os primeiros capítulos para se familiarizar com os controles.",
          "No Online, faça missões de Contatos para ganhar dinheiro e reputação iniciais.",
        ],
        tips: [
          { title: "🚗 Pilotagem", text: "GTA tem física realista. Carros pesados derrapam mais em alta velocidade — freie antecipado." },
          { title: "⭐ Estrelas", text: "1-2 estrelas: fuja. 3+ estrelas: a polícia fica agressiva. Use garagens e troque de carro." },
          { title: "💰 Dinheiro", text: "Invista na Bolsa de Valores após missões específicas da campanha para multiplicar capital." },
          { title: "🌐 Online", text: "Não gaste dinheiro real (Shark Cards) antes de entender quais negócios valem a pena." },
        ],
      },
      {
        id: "hollow",
        title: "Hollow Knight",
        subtitle: "Hallownest",
        genre: "Metroidvania",
        genreIcon: "🦋",
        year: 2017,
        developer: "Team Cherry",
        platforms: "PC · Switch · PS4 · Xbox",
        hours: "~40h",
        rating: "9.5",
        tags: ["aventura"],
        accentColor: "#a29bfe",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #06030f 0%, #12062a 50%, #1a0840 100%)",
        about:
          "Hollow Knight é um Metroidvania de ação e exploração ambientado no reino subterrâneo de Hallownest. Você controla um pequeno cavaleiro inseto que explora cavernas cheias de inimigos corrompidos pela praga da Luz Radiante. O jogo é famoso pela arte em aquarela sombria, trilha sonora atmosférica e combate desafiador. A narrativa é fragmentada e revelada através de NPCs, diários e ambiente — misteriosa e recompensadora.",
        steps: [
          "Explore com calma: Hallownest é enorme e não linear. Não tenha pressa.",
          "Pegue o Feitiço de Chama de Alma o quanto antes — essencial para progressão.",
          "Morra e aprenda: ao morrer, perde sombra e Geo. Recupere matando sua sombra.",
          "Compre o Mapa de Cornifer em cada área nova — sem ele você ficará perdido.",
          "Explore cada canto: paredes falsas e NPCs escondem upgrades importantes.",
        ],
        tips: [
          { title: "🗡 Pogo", text: "Domine o pulo após atacar de cima (pogo) para cruzar sobre inimigos e chefões perigosos." },
          { title: "💎 Amuletos", text: "Amuletos são customizações do personagem. Alma Robusta + Força é uma combinação clássica." },
          { title: "🗺 Exploração", text: "Áreas inacessíveis provavelmente precisam de uma habilidade nova para acessar — volte depois." },
          { title: "🏆 Chefões", text: "Patience! Chefões têm padrões fixos. Observe 2-3 ciclos antes de tentar agressividade." },
        ],
      },
      {
        id: "stardew",
        title: "Stardew Valley",
        subtitle: "Pelican Town",
        genre: "Simulação de Fazenda",
        genreIcon: "🌾",
        year: 2016,
        developer: "ConcernedApe",
        platforms: "PC · Mobile · Console",
        hours: "Infinito",
        rating: "10",
        tags: ["simulacao"],
        accentColor: "#fd79a8",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0f0718 0%, #2a0e3a 50%, #1a0a28 100%)",
        about:
          "Stardew Valley é um simulador de fazenda RPG criado inteiramente por uma pessoa (Eric Barone). Você herda uma fazenda do seu avô e a transforma em um lar próspero. O jogo combina plantio, criação de animais, mineração, pesca, culinária e relacionamentos com moradores. Não há game over — você define seus próprios objetivos e ritmo.",
        steps: [
          "No primeiro dia, vá ao escritório do prefeito para pegar seu kit inicial.",
          "Plante sementes imediatamente — cada estação dura 28 dias e plantas morrem fora da estação.",
          "Faça amizade com moradores dando presentes que eles gostam (2x por semana).",
          "Explore a Mina: cada andar mais fundo tem melhores recursos. Objetivo: chegar no andar 40.",
          "Conserte a ponte perto da cidade para acessar a praia e outros recursos.",
        ],
        tips: [
          { title: "⏰ Energia", text: "Gerencie sua energia (barra amarela). Comer restaura. Durma antes das 2h da manhã." },
          { title: "💰 Dinheiro", text: "Bagas Antigas são o melhor cultivo de longo prazo. Preserve a primeira que encontrar." },
          { title: "🎣 Pesca", text: "Pesca parece difícil no início mas melhora com nível. Rio, lago e oceano têm peixes diferentes." },
          { title: "🏠 Comunidade", text: "Centro Comunitário vs. Joja Mart é a grande escolha do jogo — ambos têm finais diferentes." },
        ],
      },
      {
        id: "eldenring",
        title: "Elden Ring",
        subtitle: "Lands Between",
        genre: "Action RPG",
        genreIcon: "⚡",
        year: 2022,
        developer: "FromSoftware",
        platforms: "PC · PS5 · Xbox Series",
        hours: "~80h",
        rating: "10",
        tags: ["rpg"],
        accentColor: "#d4af37",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #080600 0%, #1e1400 50%, #3a2800 100%)",
        about:
          "Elden Ring é o RPG de mundo aberto da FromSoftware em colaboração com George R.R. Martin, que criou a mitologia do universo. Você é um Maculado sem graça que busca se tornar o Lorde Élfico reparando o Anel Élfico fragmentado. O jogo combina o combate exigente de Dark Souls com um mapa aberto gigantesco, cavalaria montada e maior variedade de builds. GOTY 2022 e um dos melhores jogos da história.",
        steps: [
          "Comece pela Igreja de Elleh logo após o tutorial — lá está o primeiro NPC e loja.",
          "Derrote o Cavaleiro Adornado de Árvore para pegar a Encomenda Élfica — item essencial.",
          "Se um inimigo for difícil demais, vá explorar outra área — o mapa é não-linear.",
          "Fale com todos os NPCs várias vezes — missões dependem de conversar repetidamente.",
          "Suba Vigor (HP) acima de tudo. Para iniciantes, ter mais HP evita frustrações.",
        ],
        tips: [
          { title: "🐎 Torrent", text: "Invoque seu cavalo para combate montado e exploração. Torrent é essencial no mundo aberto." },
          { title: "🌙 Furtividade", text: "Agache para modo furtivo. Muitos inimigos podem ser assassinados pelas costas — economiza stamina." },
          { title: "✨ Centelhas", text: "Centelhas de Espírito invocam aliados. Miséria da Jellyfish e Lobo Cinza são ótimas para iniciantes." },
          { title: "📖 Lore", text: "A narrativa é complexa. Leia descrições de itens e assista vídeos de lore para entender a história." },
        ],
      },
      {
        id: "celeste",
        title: "Celeste",
        subtitle: "A Mountain",
        genre: "Plataforma & Narrativa",
        genreIcon: "🏔",
        year: 2018,
        developer: "Maddy Thorson",
        platforms: "PC · Switch · PS4 · Xbox",
        hours: "~8-15h",
        rating: "10",
        tags: ["plataforma"],
        accentColor: "#c77dff",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0a0215 0%, #1f0a38 50%, #2e0a50 100%)",
        about:
          "Celeste é um jogo de plataforma com precisão milimétrica e narrativa emocionante sobre ansiedade e saúde mental. Madeline decide escalar o Monte Celeste, mas a montanha manifesta seus medos mais profundos. O gameplay é implacável mas justo: você morre centenas de vezes mas reinicia imediatamente. O jogo tem Modo Assistido para quem quer focar na história sem a dificuldade extrema.",
        steps: [
          "Aprenda o Dash: é o move central do jogo. No ar, você tem 1 Dash que recarrega ao tocar o chão.",
          "Escale paredes correndo — você pode subir por um curto período antes de escorregar.",
          "Não desista em telas difíceis: cada obstáculo tem solução com os movimentos que você já tem.",
          "Colete Morangos (opcionais) para desafio extra, mas não são necessários para completar.",
          "Abra o Modo Assistido se precisar — o jogo mesmo encoraja isso, sem julgamento.",
        ],
        tips: [
          { title: "💨 Dash", text: "Combine Dash + Salto em cadeia para alcançar plataformas distantes. Prática torna perfeito." },
          { title: "🧗 Escalada", text: "Pule de parede em parede (Wall Jump) para áreas verticais. É essencial dominar isso cedo." },
          { title: "📖 História", text: "A narrativa sobre ansiedade é tocante. Preste atenção nos diálogos entre Madeline e Theo." },
          { title: "♿ Assistido", text: "O Modo Assistido permite ajustar velocidade, invulnerabilidade e Dashes infinitos. Use sem culpa." },
        ],
      },
      {
        id: "rdr2",
        title: "Red Dead 2",
        subtitle: "Redemption",
        genre: "Faroeste & Aventura",
        genreIcon: "🤠",
        year: 2018,
        developer: "Rockstar Games",
        platforms: "PC · PS4 · Xbox",
        hours: "~60-80h",
        rating: "10",
        tags: ["aventura"],
        accentColor: "#e17055",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #0e0400 0%, #2a0a00 50%, #4a1200 100%)",
        about:
          "Red Dead Redemption 2 é uma obra-prima ambientada no fim do século XIX. Você joga como Arthur Morgan, membro do bando de Dutch van der Linde, fugindo da lei enquanto tenta dar um último grande golpe. O jogo é famoso pelo nível absurdo de detalhe: cavalos com física realista, NPCs com rotinas diárias e sistemas de honra e fome. A narrativa é uma das mais marcantes dos jogos modernos.",
        steps: [
          "Não corra pela campanha: RDR2 é um jogo para ser saboreado lentamente.",
          "Cuide do seu cavalo: alimente, limpe e não faça ele cair. O vínculo afeta o desempenho.",
          "Gerencie seu nível de Honra — escolhas morais afetam diálogos, preços e o desfecho.",
          "Faça missões secundárias e encontros aleatórios — são experiências inesquecíveis.",
          "Use o modo Deadeye em tiroteios para matar vários inimigos com precisão.",
        ],
        tips: [
          { title: "🐎 Cavalos", text: "O cavalo árabe branco no lago norte é o melhor do jogo e pode ser capturado cedo — de graça." },
          { title: "🍖 Nutrição", text: "Mantenha os núcleos de Arthur (saúde, stamina, Deadeye) cheios comendo e dormindo." },
          { title: "🎯 Honra", text: "Alta honra: descontos em lojas e diálogos diferentes. Baixa honra: NPCs reagem com medo." },
          { title: "🌿 Caça", text: "Use a arma certa para o animal certo. Peles perfeitas valem mais no açougue e para crafting." },
        ],
      },
      {
        id: "cyberpunk",
        title: "Cyberpunk 2077",
        subtitle: "Night City",
        genre: "RPG Cyberpunk",
        genreIcon: "🤖",
        year: 2020,
        developer: "CD Projekt Red",
        platforms: "PC · PS5 · Xbox Series",
        hours: "~50h",
        rating: "9",
        tags: ["rpg"],
        accentColor: "#00d2ff",
        bgImage: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
        bgGradient: "linear-gradient(135deg, #040a12 0%, #081828 50%, #0a2038 100%)",
        about:
          "Cyberpunk 2077 se passa em 2077 em Night City, uma megacidade californiana dominada por corporações. Você joga como V, um mercenário que acaba com o chip de Johnny Silverhand (Keanu Reeves) na cabeça. É um RPG de ação com construção de personagem profunda, escolhas narrativas e mundo denso. A expansão Phantom Liberty de 2023 consolidou o jogo como uma das melhores experiências da geração.",
        steps: [
          "Escolha sua origem (Nômade, Corpo ou Filho de Rua) — afeta diálogos específicos ao longo do jogo.",
          "Nos primeiros capítulos, explore Watson antes de ser liberado para Night City inteira.",
          "Invista em Atributos que combinam com seu estilo: Força (melee), Reflexo (armas), Inteligência (hack).",
          "Faça as sidequests de Johnny Silverhand — são as melhores e afetam o final.",
          "Ligue para seus aliados regularmente — Panam e Judy têm arcos narrativos independentes.",
        ],
        tips: [
          { title: "🧠 Netrunning", text: "Hacking é poderosíssimo no late game. Inteligência alta permite incapacitar inimigos à distância." },
          { title: "🏍 Exploração", text: "Night City é vertical e densa. Use grappling hook para acessar telhados e áreas secretas." },
          { title: "💊 Cyberware", text: "Visite Ripperdocs para instalar Cyberware. O Atributo Físico define quanto você pode instalar." },
          { title: "📞 Finais", text: "Existem 5 finais diferentes. Alguns dependem de missões concluídas antes do ponto sem retorno." },
        ],
      },
    ],
  };