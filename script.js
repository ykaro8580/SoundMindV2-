const songs=[

  // ===== ROCK =====
  {id:1,nome:"Numb",artista:"Linkin Park",genero:"Rock"},
  {id:2,nome:"In The End",artista:"Linkin Park",genero:"Rock"},
  {id:3,nome:"Breaking The Habit",artista:"Linkin Park",genero:"Rock"},
  {id:4,nome:"Black",artista:"Pearl Jam",genero:"Rock"},
  {id:5,nome:"Even Flow",artista:"Pearl Jam",genero:"Rock"},
  {id:6,nome:"Alive",artista:"Pearl Jam",genero:"Rock"},
  {id:7,nome:"10's",artista:"Pantera",genero:"Rock"},
  {id:8,nome:"Walk",artista:"Pantera",genero:"Rock"},
  {id:9,nome:"Cowboys From Hell",artista:"Pantera",genero:"Rock"},
  {id:10,nome:"Nutshell",artista:"Alice in Chains",genero:"Rock"},
  {id:11,nome:"Frogs",artista:"Alice in Chains",genero:"Rock"},
  {id:12,nome:"Man in the Box",artista:"Alice in Chains",genero:"Rock"},
  {id:13,nome:"To Forgive",artista:"Smashing Pumpkins",genero:"Rock"},
  {id:14,nome:"1979",artista:"Smashing Pumpkins",genero:"Rock"},
  {id:15,nome:"Tonight, Tonight",artista:"Smashing Pumpkins",genero:"Rock"},
  {id:16,nome:"Vem Dançar Comigo",artista:"Vitroles",genero:"Rock"},
  {id:17,nome:"Deixa Eu Falar...",artista:"Raimundos",genero:"Rock"},
  {id:18,nome:"Mulher de Fases",artista:"Raimundos",genero:"Rock"},
  {id:19,nome:"Everlong",artista:"Foo Fighters",genero:"Rock"},
  {id:20,nome:"The Pretender",artista:"Foo Fighters",genero:"Rock"},
  {id:21,nome:"Come As You Are",artista:"Nirvana",genero:"Rock"},
  {id:22,nome:"Smells Like Teen Spirit",artista:"Nirvana",genero:"Rock"},
  {id:23,nome:"Bohemian Rhapsody",artista:"Queen",genero:"Rock"},
  {id:24,nome:"Don't Stop Me Now",artista:"Queen",genero:"Rock"},
  {id:25,nome:"Highway to Hell",artista:"AC/DC",genero:"Rock"},
  {id:26,nome:"Back In Black",artista:"AC/DC",genero:"Rock"},

  // ===== RAP =====
  {id:27,nome:"Superman",artista:"Eminem",genero:"Rap"},
  {id:28,nome:"Lose Yourself",artista:"Eminem",genero:"Rap"},
  {id:29,nome:"Mockingbird",artista:"Eminem",genero:"Rap"},
  {id:30,nome:"Without Me",artista:"Eminem",genero:"Rap"},
  {id:31,nome:"Stan",artista:"Eminem",genero:"Rap"},
  {id:32,nome:"Rap God",artista:"Eminem",genero:"Rap"},
  {id:33,nome:"Not Afraid",artista:"Eminem",genero:"Rap"},
  {id:34,nome:"Godzilla",artista:"Eminem",genero:"Rap"},
  {id:35,nome:"HUMBLE.",artista:"Kendrick Lamar",genero:"Rap"},
  {id:36,nome:"Money Trees",artista:"Kendrick Lamar",genero:"Rap"},
  {id:37,nome:"DNA.",artista:"Kendrick Lamar",genero:"Rap"},
  {id:38,nome:"Alright",artista:"Kendrick Lamar",genero:"Rap"},
  {id:39,nome:"SICKO MODE",artista:"Travis Scott",genero:"Rap"},
  {id:40,nome:"Goosebumps",artista:"Travis Scott",genero:"Rap"},
  {id:41,nome:"FE!N",artista:"Travis Scott",genero:"Rap"},
  {id:42,nome:"Praise The Lord",artista:"A$AP Rocky",genero:"Rap"},
  {id:43,nome:"Sunflower",artista:"Post Malone",genero:"Rap"},
  {id:44,nome:"Congratulations",artista:"Post Malone",genero:"Rap"},
  {id:45,nome:"Lucid Dreams",artista:"Juice WRLD",genero:"Rap"},
  {id:46,nome:"All Girls Are The Same",artista:"Juice WRLD",genero:"Rap"},
  {id:47,nome:"Industry Baby",artista:"Lil Nas X",genero:"Rap"},
  {id:48,nome:"Old Town Road",artista:"Lil Nas X",genero:"Rap"},
  {id:49,nome:"Life Goes On",artista:"BK",genero:"Rap"},
  {id:50,nome:"Castelos & Ruínas",artista:"BK",genero:"Rap"},
  {id:51,nome:"Poetas no Topo",artista:"Pineapple Storm",genero:"Rap"},
  {id:52,nome:"Leal",artista:"Djonga",genero:"Rap"},
  {id:53,nome:"Olho de Tigre",artista:"Djonga",genero:"Rap"},
  {id:54,nome:"Máquina do Tempo",artista:"Matuê",genero:"Rap"},
  {id:55,nome:"Kenny G",artista:"Matuê",genero:"Rap"},
  {id:56,nome:"Anos Luz",artista:"Matuê",genero:"Rap"},

  // ===== POP =====
  {id:57,nome:"Shape Of You",artista:"Ed Sheeran",genero:"Pop"},
  {id:58,nome:"Perfect",artista:"Ed Sheeran",genero:"Pop"},
  {id:59,nome:"Photograph",artista:"Ed Sheeran",genero:"Pop"},
  {id:60,nome:"Blinding Lights",artista:"The Weeknd",genero:"Pop"},
  {id:61,nome:"Save Your Tears",artista:"The Weeknd",genero:"Pop"},
  {id:62,nome:"Starboy",artista:"The Weeknd",genero:"Pop"},
  {id:63,nome:"Die For You",artista:"The Weeknd",genero:"Pop"},
  {id:64,nome:"As It Was",artista:"Harry Styles",genero:"Pop"},
  {id:65,nome:"Watermelon Sugar",artista:"Harry Styles",genero:"Pop"},
  {id:66,nome:"Levitating",artista:"Dua Lipa",genero:"Pop"},
  {id:67,nome:"Don't Start Now",artista:"Dua Lipa",genero:"Pop"},
  {id:68,nome:"Flowers",artista:"Miley Cyrus",genero:"Pop"},
  {id:69,nome:"Sinceramente",artista:"Sotam",genero:"Pop"},
  {id:70,nome:"Selva Russa",artista:"SonoTws",genero:"Pop"},
  {id:71,nome:"Mar",artista:"PumaPJL",genero:"Pop"},

  // ===== INDIE =====
  {id:72,nome:"Right Side of My Neck",artista:"Faye Webster",genero:"Indie"},
  {id:73,nome:"Kingston",artista:"Faye Webster",genero:"Indie"},
  {id:74,nome:"Rises in the Moon",artista:"Liana Flores",genero:"Indie"},
  {id:75,nome:"Heart to Heart",artista:"Mac DeMarco",genero:"Indie"},
  {id:76,nome:"Chamber of Reflection",artista:"Mac DeMarco",genero:"Indie"},
  {id:77,nome:"From the Start",artista:"Laufey",genero:"Indie"},
  {id:78,nome:"Valentine",artista:"Laufey",genero:"Indie"},
  {id:79,nome:"Home",artista:"Vacations",genero:"Indie"},
  {id:80,nome:"Young",artista:"Vacations",genero:"Indie"},
  {id:81,nome:"Is There Free Breakfast Here?",artista:"Hotel Ugly",genero:"Indie"},
  {id:82,nome:"Can I Call You Tonight?",artista:"Dayglow",genero:"Indie"},
  {id:83,nome:"Space Song",artista:"Beach House",genero:"Indie"},
  {id:84,nome:"Apocalypse",artista:"Cigarettes After Sex",genero:"Indie"},

  // ===== BLUES =====
  {id:85,nome:"Dangerous Woman",artista:"Buster Benton",genero:"Blues"},
  {id:86,nome:"I Believe to My Soul",artista:"Ray Charles",genero:"Blues"},
  {id:87,nome:"Pain in My Heart",artista:"Otis Redding",genero:"Blues"},
  {id:88,nome:"Blues Delight",artista:"Blues Delight",genero:"Blues"},
  {id:89,nome:"The Thrill Is Gone",artista:"B.B. King",genero:"Blues"},
  {id:90,nome:"Sweet Home Chicago",artista:"Robert Johnson",genero:"Blues"},
  {id:91,nome:"Crossroads",artista:"Cream",genero:"Blues"},

  // ===== MPB =====
  {id:92,nome:"Ska",artista:"Os Paralamas do Sucesso",genero:"MPB"},
  {id:93,nome:"Meu Erro",artista:"Os Paralamas do Sucesso",genero:"MPB"},
  {id:94,nome:"Lanterna dos Afogados",artista:"Os Paralamas do Sucesso",genero:"MPB"},
  {id:95,nome:"Ainda Amo Ela",artista:"Skank",genero:"MPB"},
  {id:96,nome:"Vou Deixar",artista:"Skank",genero:"MPB"},
  {id:97,nome:"Resposta",artista:"Skank",genero:"MPB"},
  {id:98,nome:"Infinito Particular",artista:"Marisa Monte",genero:"MPB"},
  {id:99,nome:"Amor I Love You",artista:"Marisa Monte",genero:"MPB"},
  {id:100,nome:"Festa de Adeus",artista:"Júlio Secchin",genero:"MPB"},
  {id:101,nome:"Anna Júlia",artista:"Los Hermanos",genero:"MPB"},
  {id:102,nome:"O Vento",artista:"Los Hermanos",genero:"MPB"},
  {id:103,nome:"Tempo Perdido",artista:"Legião Urbana",genero:"MPB"},
  {id:104,nome:"Pais e Filhos",artista:"Legião Urbana",genero:"MPB"}
];

let state=JSON.parse(localStorage.getItem("sm_state")||'{"ratings":{},"reviews":{},"theme":"dark"}');
if(!state.reviews)state.reviews={};

const $=id=>document.getElementById(id);
const grid=$("songs-grid"),detail=$("song-detail"),noselect=$("no-selection");
let selected=null,genre="Todos",sort="nome";

/* ── Persistência ──────────────────────────────────────── */
function save(){localStorage.setItem("sm_state",JSON.stringify(state));}

/* ── Toast ─────────────────────────────────────────────── */
function toast(msg,tipo="ok"){
  const t=document.createElement("div");
  t.className="toast";
  t.style.borderLeftColor=tipo==="ok"?"var(--accent)":"#f45";
  t.textContent=msg;
  $("toasts").append(t);
  setTimeout(()=>{t.style.opacity="0";t.style.transform="translateX(40px)";setTimeout(()=>t.remove(),300)},3000);
}

/* ── Gêneros ────────────────────────────────────────────── */
function renderGenres(){
  const gs=["Todos",...new Set(songs.map(s=>s.genero))];
  $("genre-pills").innerHTML=gs.map(g=>`<button ${g===genre?"class='active'":""}>${g}</button>`).join("");
  [...$("genre-pills").children].forEach((b,i)=>b.onclick=()=>{genre=gs[i];renderSongs();renderGenres();});
}

/* ── Filtro + Ordenação ─────────────────────────────────── */
function filtered(){
  let q=$("search-input").value.toLowerCase();
  let arr=songs.filter(s=>(genre=="Todos"||s.genero==genre)&&`${s.nome} ${s.artista} ${s.genero}`.toLowerCase().includes(q));
  arr.sort((a,b)=>a[sort].localeCompare(b[sort]));
  return arr;
}

/* ── Cards do catálogo ──────────────────────────────────── */
function renderSongs(){
  let arr=filtered();
  $("catalog-count").textContent=`${arr.length} música(s)`;
  const empty=$("empty-search");
  if(arr.length===0){
    grid.innerHTML="";
    if(empty)empty.classList.remove("is-hidden");
    return;
  }
  if(empty)empty.classList.add("is-hidden");
  grid.innerHTML=arr.map(s=>`
    <div class="song-card" data-id="${s.id}" role="listitem">
      <h3>${s.nome}</h3>
      <p>${s.artista}</p>
      <span class="genre">${s.genero}</span>
      ${state.ratings[s.id]?`<span class="card-rating">${"★".repeat(state.ratings[s.id])}</span>`:""}
    </div>`).join("");
  document.querySelectorAll(".song-card[data-id]").forEach(c=>c.onclick=()=>select(+c.dataset.id));
}

/* ── Selecionar música ──────────────────────────────────── */
function select(id){
  selected=songs.find(s=>s.id===id);
  noselect.classList.add("is-hidden");
  detail.classList.remove("is-hidden");
  $("detail-name").textContent=selected.nome;
  $("detail-artist").textContent=selected.artista;
  $("detail-genre").textContent=selected.genero;
  // Carrega review existente
  $("review-input").value=state.reviews[selected.id]||"";
  updateCharCount();
  paintStars();
  updateRecs();
}

/* ── Estrelas ───────────────────────────────────────────── */
function paintStars(){
  let r=state.ratings[selected.id]||0;
  document.querySelectorAll(".star").forEach(st=>{
    st.classList.toggle("active",+st.dataset.v<=r);
    st.onclick=()=>{
      state.ratings[selected.id]=+st.dataset.v;
      save();paintStars();stats();bars();updateRecs();renderSongs();renderReviews();
    };
  });
  const hint=$("rating-hint");
  if(hint)hint.textContent=r?`Você deu ${r} estrela${r>1?"s":""}!`:"Clique nas estrelas para avaliar";
}

/* ── Estatísticas ───────────────────────────────────────── */
function stats(){
  let vals=Object.values(state.ratings);
  $("st-rated").textContent=vals.length;
  $("st-total").textContent=vals.reduce((a,b)=>a+b,0);
  $("st-avg").textContent=vals.length?(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1):"—";
}

/* ── Barras de gênero ───────────────────────────────────── */
function bars(){
  let g={};
  songs.forEach(s=>{if(state.ratings[s.id])g[s.genero]=(g[s.genero]||0)+state.ratings[s.id];});
  let max=Math.max(1,...Object.values(g));
  $("genre-bars").innerHTML=Object.entries(g).map(([k,v])=>
    `<div class="bar" role="listitem">${k}<div class="progress"><span style="width:${v/max*100}%"></span></div></div>`
  ).join("")||`<p class="empty-hint" id="bars-hint">Avalie músicas para ver suas preferências aqui.</p>`;
  let fav=Object.entries(g).sort((a,b)=>b[1]-a[1])[0];
  $("st-fav").textContent=fav?fav[0]:"—";
}

/* ── Recomendações ──────────────────────────────────────── */
function updateRecs(){
  if(!selected)return;
  $("recs-wrap").classList.remove("is-hidden");
  let rec=songs.filter(s=>s.genero===selected.genero&&s.id!==selected.id);
  $("recs-grid").innerHTML=rec.length
    ?rec.map(s=>`<div class="song-card" data-id="${s.id}" role="listitem"><h3>${s.nome}</h3><p>${s.artista}</p></div>`).join("")
    :`<p class="empty-hint">Sem outras músicas deste gênero no catálogo.</p>`;
  document.querySelectorAll("#recs-grid .song-card[data-id]").forEach(c=>c.onclick=()=>select(+c.dataset.id));
}

/* ── Contador de caracteres da review ───────────────────── */
function updateCharCount(){
  const rev=$("review-input");
  const count=$("review-char-count");
  if(!rev||!count)return;
  const len=rev.value.length;
  count.textContent=`${len} / 500`;
  count.style.color=len>450?"#f45":len>380?"#ffd54f":"";
}

/* ── Renderizar painel de reviews ───────────────────────── */
function renderReviews(){
  const list=$("reviews-list");
  if(!list)return;
  const entries=Object.entries(state.reviews).filter(([,v])=>v&&v.trim());
  const badge=$("reviews-count");
  if(badge)badge.textContent=entries.length?entries.length:"";

  if(entries.length===0){
    list.innerHTML=`<p class="empty-hint">Nenhuma review ainda.<br>Selecione uma música e escreva sobre ela!</p>`;
    return;
  }

  list.innerHTML=`<div class="reviews-list-inner">`+entries.map(([id,text])=>{
    const song=songs.find(s=>s.id==id);
    if(!song)return"";
    const r=state.ratings[id]||0;
    const stars=Array.from({length:5},(_,i)=>
      `<i class="fa-solid fa-star${i<r?" filled":""}" aria-hidden="true"></i>`
    ).join("");
    return`<div class="review-card">
  <div class="review-card-name">${song.nome}</div>
  <div class="review-card-artist">${song.artista} &middot; <span style="color:var(--accent);font-size:.75rem">${song.genero}</span></div>
  <div class="review-stars-mini">${stars}</div>
  <div class="review-card-text">${text}</div>
  <div class="review-card-footer">
    <button class="btn-del-review" data-rid="${id}" aria-label="Excluir review de ${song.nome}">
      <i class="fa-solid fa-trash-can" aria-hidden="true"></i> Excluir
    </button>
  </div>
</div>`;
  }).join("")+`</div>`;

  list.querySelectorAll(".btn-del-review").forEach(btn=>btn.onclick=()=>{
    const rid=btn.dataset.rid;
    delete state.reviews[rid];
    save();
    renderReviews();
    if(selected&&selected.id==rid){$("review-input").value="";updateCharCount();}
    toast("Review removida.","err");
  });
}

/* ── Limpar tudo ────────────────────────────────────────── */
function clearAll(){
  state.ratings={};
  state.reviews={};
  save();
  stats();bars();renderReviews();renderSongs();
  if(selected){paintStars();$("review-input").value="";updateCharCount();}
}

/* ── Event Listeners ────────────────────────────────────── */

// Busca
$("search-input").oninput=()=>{
  const v=$("search-input").value;
  const clr=$("btn-clear-search");
  if(clr)clr.classList.toggle("is-hidden",!v);
  renderSongs();
};
$("btn-clear-search")&&($("btn-clear-search").onclick=()=>{
  $("search-input").value="";
  $("btn-clear-search").classList.add("is-hidden");
  renderSongs();
});

// Ordenação
document.querySelectorAll(".sort-btn").forEach(b=>b.onclick=()=>{
  sort=b.dataset.sort;
  document.querySelectorAll(".sort-btn").forEach(x=>{x.classList.remove("active");x.setAttribute("aria-pressed","false");});
  b.classList.add("active");b.setAttribute("aria-pressed","true");
  renderSongs();
});

// Tema
$("btn-theme").onclick=()=>{
  let t=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",t);
  state.theme=t;save();
};

// Limpar histórico (sidebar)
$("btn-clear-hist").onclick=()=>{
  clearAll();
  toast("Histórico e reviews limpos!");
};

// Reiniciar (navbar)
$("btn-reset")&&($("btn-reset").onclick=()=>{
  clearAll();
  toast("Histórico reiniciado!");
});

// Remover filtros (empty state)
$("btn-reset-filters")&&($("btn-reset-filters").onclick=()=>{
  genre="Todos";
  $("search-input").value="";
  const clr=$("btn-clear-search");
  if(clr)clr.classList.add("is-hidden");
  renderGenres();renderSongs();
});

// Salvar review
$("btn-save-review")&&($("btn-save-review").onclick=()=>{
  if(!selected)return;
  const text=$("review-input").value.trim();
  if(text){
    state.reviews[selected.id]=text;
    save();renderReviews();
    toast(`Review de "${selected.nome}" salva! ✍️`);
  }else{
    delete state.reviews[selected.id];
    save();renderReviews();
    toast("Review removida.","err");
  }
});

// Contador de chars
$("review-input")&&($("review-input").oninput=updateCharCount);

/* ── Inicialização ──────────────────────────────────────── */
document.documentElement.setAttribute("data-theme",state.theme||"dark");
renderGenres();renderSongs();stats();bars();renderReviews();
