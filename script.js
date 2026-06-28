const songs=[
{id:1,nome:"Numb",artista:"Linkin Park",genero:"Rock"},
{id:2,nome:"Blinding Lights",artista:"The Weeknd",genero:"Pop"},
{id:3,nome:"Máquina do Tempo",artista:"Matuê",genero:"Trap"},
{id:4,nome:"Lose Yourself",artista:"Eminem",genero:"Rap"},
{id:5,nome:"Yellow",artista:"Coldplay",genero:"Rock"},
{id:6,nome:"Flowers",artista:"Miley Cyrus",genero:"Pop"},
{id:7,nome:"Vida Chique",artista:"Veigh",genero:"Trap"},
{id:8,nome:"Céu Azul",artista:"Charlie Brown Jr.",genero:"Rock"}
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
