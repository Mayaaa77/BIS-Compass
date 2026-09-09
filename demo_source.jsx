<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BIS Compass — Guiding Your Standards Journey</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#F7F1E9;
    --surface:#FFFFFF;
    --surface-raised:#F3E6E1;
    --gold:#7A2331;
    --gold-dim:#531420;
    --teal:#1F7A52;
    --ink:#2A2015;
    --ink-soft:#6E6250;
    --line:#E5D8CE;
    --warn-bg:#F3E6E1;
    --warn-line:#DCB8B4;
    --danger:#9C3A2E;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:'Source Sans 3',-apple-system,BlinkMacSystemFont,sans-serif;
    font-size:16px;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.display{
    font-family:'Source Serif 4',Georgia,serif;
    letter-spacing:0;
  }
  .app{max-width:720px;margin:0 auto;min-height:100vh;background:var(--bg);display:flex;flex-direction:column;position:relative;}
  .app::before{ content:none; }

  /* header */
  header.top{
    padding:18px 20px 0;
    position:sticky;top:0;z-index:5;
    background:var(--surface);
    border-bottom:1px solid var(--line);
  }
  .brand{display:flex;align-items:center;gap:12px;padding-bottom:16px;}
  .brand .mark{
    width:42px;height:42px;
    background:var(--gold);
    color:#FFFFFF;
    display:flex;align-items:center;justify-content:center;
    font-family:'Source Serif 4',serif;font-weight:700;font-size:19px;
    border-radius:8px;
    flex-shrink:0;
  }
  .brand h1{font-size:23px;margin:0;font-weight:700;color:var(--ink);}
  .brand p{margin:3px 0 0;font-size:13.5px;color:var(--ink-soft);font-weight:500;}

  nav.tabs{display:flex;gap:22px;overflow-x:auto;}
  nav.tabs button{
    padding:11px 4px 13px;
    font-size:14.5px;
    font-weight:600;
    border:none;
    background:transparent;
    color:var(--ink-soft);
    cursor:pointer;
    white-space:nowrap;
    border-bottom:3px solid transparent;
    font-family:'Source Sans 3',sans-serif;
  }
  nav.tabs button.active{
    color:var(--gold);
    border-bottom:3px solid var(--gold);
  }

  main{flex:1;display:flex;flex-direction:column;min-height:0;position:relative;z-index:1;}
  section.panel{display:none;flex-direction:column;flex:1;min-height:0;}
  section.panel.active{display:flex;}

  /* ---- Advisor ---- */
  .advisor-intro{padding:20px 20px 4px;}
  .advisor-intro p{font-size:15.5px;color:var(--ink-soft);margin:0;line-height:1.6;}

  .chat-scroll{flex:1;overflow-y:auto;padding:16px 20px 10px;display:flex;flex-direction:column;gap:16px;}
  .msg{max-width:94%;font-size:16px;line-height:1.65;}
  .msg.user{align-self:flex-end;background:var(--gold);color:#FFFFFF;font-weight:500;padding:12px 16px;border-radius:14px 14px 3px 14px;}
  .msg.ai{align-self:flex-start;width:100%;}
  .ai-label{font-size:12px;font-weight:700;letter-spacing:0.4px;color:var(--teal);margin-bottom:6px;font-family:'Source Sans 3',sans-serif;}
  .ai-body{background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--teal);padding:14px 16px;border-radius:2px 12px 12px 12px;box-shadow:0 1px 3px rgba(20,40,60,0.05);}
  .ai-body p{margin:0 0 8px;color:var(--ink);}
  .ai-body p:last-child{margin-bottom:0;}
  .thinking{align-self:flex-start;font-size:13px;color:var(--ink-soft);font-style:italic;}

  .suggest-row{padding:2px 20px 14px;display:flex;gap:8px;overflow-x:auto;}
  .suggest-row button{
    flex-shrink:0;
    font-size:13.5px;
    font-weight:500;
    padding:10px 15px;
    background:var(--surface);
    border:1px solid var(--line);
    border-radius:20px;
    color:var(--ink);
    cursor:pointer;
    white-space:nowrap;
  }
  .suggest-row button:active{border-color:var(--gold);}

  .composer{
    border-top:1px solid var(--line);
    padding:14px 16px calc(16px + env(safe-area-inset-bottom));
    background:var(--surface);
    display:flex;
    gap:9px;
    align-items:flex-end;
  }
  .composer textarea{
    flex:1;
    resize:none;
    border:1px solid var(--line);
    border-radius:12px;
    padding:13px 16px;
    font-size:16px;
    font-family:inherit;
    background:var(--bg);
    color:var(--ink);
    max-height:110px;
  }
  .composer textarea:focus{outline:none;border-color:var(--gold);}
  .composer button.send{
    background:var(--gold);
    color:#FFFFFF;
    border:none;
    border-radius:10px;
    width:48px;height:48px;
    font-size:19px;
    font-weight:700;
    flex-shrink:0;
    cursor:pointer;
  }
  .composer button.send:disabled{opacity:0.35;}

  /* ---- generic panel content ---- */
  .panel-scroll{flex:1;overflow-y:auto;padding:20px 20px 36px;}
  .panel-head{margin-bottom:18px;}
  .panel-head h2{font-size:24px;margin:0 0 6px;color:var(--ink);font-weight:700;}
  .panel-head p{font-size:15.5px;color:var(--ink-soft);margin:0;line-height:1.6;}

  .card-row{
    display:flex;
    gap:14px;
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    padding-bottom:6px;
    margin-bottom:16px;
    -webkit-overflow-scrolling:touch;
  }
  .card-row .card{
    flex:0 0 78%;
    scroll-snap-align:start;
    margin-bottom:0;
  }
  .scroll-hint{font-size:12.5px;color:var(--ink-soft);margin:0 0 10px;font-style:italic;}
  .card{
    background:var(--surface);
    border:1px solid var(--line);
    border-radius:10px;
    padding:17px 18px;
    margin-bottom:13px;
    box-shadow:0 1px 3px rgba(42,32,21,0.06);
  }
  .card h3{font-size:17.5px;margin:0 0 7px;color:var(--ink);font-weight:700;}
  .card .meta{font-size:12px;color:var(--gold);font-weight:700;letter-spacing:0.3px;margin-bottom:8px;font-family:'Source Sans 3',sans-serif;}
  .card p{font-size:14.5px;color:var(--ink-soft);margin:0 0 6px;line-height:1.6;}
  .chip-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}
  .chip{font-size:12.5px;background:var(--bg);border:1px solid var(--line);padding:5px 12px;border-radius:20px;color:var(--teal);font-weight:600;}

  .num{
    width:28px;height:28px;flex-shrink:0;
    background:var(--gold);border:none;
    color:#FFFFFF;font-size:13px;font-weight:700;font-family:'Source Sans 3',sans-serif;
    display:flex;align-items:center;justify-content:center;border-radius:50%;
  }

  input.textfield, select.textfield, textarea.textfield{
    width:100%;
    padding:12px 14px;
    border:1px solid var(--line);
    border-radius:8px;
    font-size:15.5px;
    font-family:inherit;
    background:var(--surface);
    color:var(--ink);
    margin-bottom:12px;
  }
  input.textfield:focus, textarea.textfield:focus{outline:none;border-color:var(--gold);}
  label.field-label{font-size:13.5px;font-weight:600;color:var(--ink-soft);display:block;margin-bottom:5px;}
  button.primary{
    background:var(--gold);color:#FFFFFF;border:none;border-radius:8px;
    padding:14px 16px;font-size:15.5px;font-weight:700;cursor:pointer;width:100%;
  }
  button.primary:disabled{opacity:0.5;}

  .demo-flag{font-size:12px;letter-spacing:0.4px;color:var(--teal);font-weight:700;margin-bottom:13px;text-transform:uppercase;font-family:'Source Sans 3',sans-serif;}

  .result-box{margin-top:14px;padding:14px 16px;border-left:3px solid var(--gold);border-radius:6px;background:var(--warn-bg);font-size:15px;line-height:1.6;color:var(--ink);}
</style>
</head>
<body>
<div class="app">

  <header class="top">
    <div class="brand">
      <div class="mark">🧭</div>
      <div>
        <h1>BIS Compass</h1>
        <p>Guiding Your Standards Journey</p>
      </div>
    </div>
    <nav class="tabs">
      <button class="tab-btn active" data-tab="advisor">Advisor</button>
      <button class="tab-btn" data-tab="explorer">Explorer</button>
      <button class="tab-btn" data-tab="intelligence">Intelligence</button>
      <button class="tab-btn" data-tab="hub">Product Hub</button>
    </nav>
  </header>

  <main>

    <!-- ADVISOR -->
    <section class="panel active" id="panel-advisor">
      <div class="advisor-intro">
        <p>Describe your product or question in your own words — I'll ask what I actually need to know, and tell you what I already know.</p>
      </div>
      <div class="chat-scroll" id="chatScroll"></div>
      <div class="suggest-row" id="suggestRow">
        <button data-q="I want to manufacture steel water bottles for retail sale">Steel water bottles</button>
        <button data-q="What does BIS hallmarking involve for a small jeweller?">Hallmarking basics</button>
        <button data-q="I'm importing electric kettles into India, what applies to me?">Importing electric kettles</button>
      </div>
      <div class="composer">
        <textarea id="chatInput" rows="1" placeholder="Ask about a product, standard, or BIS process…"></textarea>
        <button class="send" id="sendBtn">↑</button>
      </div>
    </section>

    <!-- EXPLORER -->
    <section class="panel" id="panel-explorer">
      <div class="panel-scroll">
        <div class="panel-head">
          <h2>Business Explorer</h2>
          <p>See how other products in a category are categorised under BIS — as a reference point, not a claim about any specific business.</p>
        </div>
        <div class="demo-flag">Sample category · Steel water bottles</div>
        <p class="scroll-hint">Swipe sideways to move through each panel →</p>

        <div class="card-row">
          <div class="card">
            <div class="meta">CATEGORY</div>
            <h3>Stainless steel household vessels</h3>
            <p>Covers vacuum-insulated and single-wall drinkware sold for household or retail use.</p>
            <div class="chip-row">
              <span class="chip">IS 15450 — SS grade &amp; finish</span>
              <span class="chip">ISI mark eligible</span>
              <span class="chip">Consumer goods</span>
            </div>
          </div>

          <div class="card">
            <div class="meta">COMMON VARIATIONS SEEN IN THIS CATEGORY</div>
            <h3>Product variations</h3>
            <p>Single-wall vs vacuum-insulated · food-grade 304 vs 316 steel · capacity tiers (350ml–1L) · matte vs powder-coated exteriors.</p>
          </div>

          <div class="card">
            <div class="meta">TYPICAL CERTIFICATION PATH</div>
            <h3>Getting certified</h3>
            <p>Product testing against IS 15450 at a BIS-recognised lab, followed by ISI licence application for the manufacturing unit.</p>
          </div>
        </div>

        <p style="font-size:12px;color:var(--ink-soft);margin-top:6px;">This is illustrative sample data for the prototype. The production version would pull from public BIS records and licence databases, always shown with source and date.</p>
      </div>
    </section>

    <!-- INTELLIGENCE -->
    <section class="panel" id="panel-intelligence">
      <div class="panel-scroll">
        <div class="panel-head">
          <h2>Product Intelligence</h2>
          <p>A structured drill-down from product to market, for one product at a time.</p>
        </div>
        <div class="demo-flag">Sample product · Electric kettle</div>
        <p class="scroll-hint">Swipe sideways to follow the journey →</p>

        <div class="card-row">
          <div class="card">
            <div class="num">1</div>
            <h3 style="margin-top:10px;">Product category</h3>
            <p>Domestic electrical appliance — heating type.</p>
          </div>
          <div class="card">
            <div class="num">2</div>
            <h3 style="margin-top:10px;">Applicable standard</h3>
            <p>IS 4250 — safety requirements for electric kettles.</p>
          </div>
          <div class="card">
            <div class="num">3</div>
            <h3 style="margin-top:10px;">Certification route</h3>
            <p>Compulsory Registration Scheme (CRS) — mandatory before sale in India.</p>
          </div>
          <div class="card">
            <div class="num">4</div>
            <h3 style="margin-top:10px;">Testing requirement</h3>
            <p>Electrical safety and thermal cut-off testing at a BIS-recognised lab.</p>
          </div>
          <div class="card">
            <div class="num">5</div>
            <h3 style="margin-top:10px;">Related categories</h3>
            <p>Electric jugs, induction cookers, immersion rods — similar CRS pathway.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HUB -->
    <section class="panel" id="panel-hub">
      <div class="panel-scroll">
        <div class="panel-head">
          <h2>Product Hub</h2>
          <p>List a product and get a quick compliance-readiness read before you publish — not a marketplace transaction, just a sanity check.</p>
        </div>

        <label class="field-label">Product name</label>
        <input class="textfield" id="hubName" placeholder="e.g. Insulated steel water bottle">
        <label class="field-label">Short description</label>
        <textarea class="textfield" id="hubDesc" rows="3" placeholder="Material, use case, who it's sold to…"></textarea>
        <button class="primary" id="hubCheckBtn">Check compliance readiness</button>
        <div class="result-box" id="hubResult" style="display:none;"></div>
      </div>
    </section>

  </main>
</div>

<script>
const SYSTEM_PROMPT = `You are BIS Compass, a sharp, well-informed conversational advisor on Indian Standards (IS codes) and BIS services — product certification (ISI mark), the Compulsory Registration Scheme (CRS), hallmarking, and testing labs — for Indian manufacturers, importers, and consumers.

Rules for every reply:
1. Never respond with a vague, deflecting non-answer. If the message is under-specified (e.g. "I want to know about iron"), do NOT just say "please clarify." Instead: name 2-3 concrete, real ways that topic intersects BIS's world (e.g. iron: cast-iron cookware standards, iron/steel raw material grading, iron content in food fortification), then ask ONE natural, specific follow-up question — the way a knowledgeable person would in conversation, not a numbered clarification menu.
2. Always give some real substance before or alongside any question. Never clarify empty-handed.
3. When you're confident of a specific IS standard number, certification scheme, or process, state it directly. If you're not fully certain, say so plainly and suggest confirming on bis.gov.in — don't invent standard numbers.
4. Keep answers conversational and tight: a few short sentences or a short paragraph. No headers, no boilerplate sections, no "Certification status: Not determined" style templates.
5. Use the conversation history — don't re-ask something already answered, and build on prior context.
6. If someone describes a business idea, walk them from product to standard to certification path in plain language, as part of one flowing answer, not separate labeled blocks.`;

let history = [];

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}

// ---- Tabs ----
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-'+btn.dataset.tab).classList.add('active');
  });
});

// ---- Chat ----
const chatScroll = document.getElementById('chatScroll');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const suggestRow = document.getElementById('suggestRow');

function scrollDown(){ chatScroll.scrollTop = chatScroll.scrollHeight; }

function addUserMsg(text){
  const m = el('div','msg user');
  m.textContent = text;
  chatScroll.appendChild(m);
  scrollDown();
}

function addAiMsg(text){
  const wrap = el('div','msg ai');
  const label = el('div','ai-label','BIS COMPASS');
  const body = el('div','ai-body');
  text.split('\n\n').forEach(p=>{
    if(p.trim()) body.appendChild(el('p', null, p.trim()));
  });
  wrap.appendChild(label);
  wrap.appendChild(body);
  chatScroll.appendChild(wrap);
  scrollDown();
}

function addThinking(){
  const t = el('div','thinking','BIS Guide is thinking…');
  t.id = 'thinkingIndicator';
  chatScroll.appendChild(t);
  scrollDown();
}
function removeThinking(){
  const t = document.getElementById('thinkingIndicator');
  if(t) t.remove();
}

async function callClaude(userText){
  history.push({role:'user', content: userText});
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      model:"claude-sonnet-4-6",
      max_tokens:1000,
      system: SYSTEM_PROMPT,
      messages: history
    })
  });
  const data = await res.json();
  const textBlock = (data.content || []).find(b=>b.type==='text');
  const reply = textBlock ? textBlock.text : "Sorry, I couldn't generate a response just now — try again in a moment.";
  history.push({role:'assistant', content: reply});
  return reply;
}

async function sendMessage(text){
  if(!text.trim()) return;
  suggestRow.style.display = 'none';
  addUserMsg(text);
  chatInput.value = '';
  sendBtn.disabled = true;
  addThinking();
  try{
    const reply = await callClaude(text);
    removeThinking();
    addAiMsg(reply);
  }catch(e){
    removeThinking();
    addAiMsg("Something went wrong reaching the assistant. Please try again.");
  }
  sendBtn.disabled = false;
}

sendBtn.addEventListener('click', ()=> sendMessage(chatInput.value));
chatInput.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' && !e.shiftKey){
    e.preventDefault();
    sendMessage(chatInput.value);
  }
});
suggestRow.querySelectorAll('button').forEach(b=>{
  b.addEventListener('click', ()=> sendMessage(b.dataset.q));
});

// initial greeting
addAiMsg("Namaste — I'm BIS Compass. Tell me about a product, material, or process, and I'll help you work out which Indian Standards and BIS services actually apply.");

// ---- Product Hub compliance check (reuses same AI engine) ----
document.getElementById('hubCheckBtn').addEventListener('click', async ()=>{
  const name = document.getElementById('hubName').value.trim();
  const desc = document.getElementById('hubDesc').value.trim();
  const resultBox = document.getElementById('hubResult');
  if(!name){ alert('Add a product name first.'); return; }
  resultBox.style.display = 'block';
  resultBox.textContent = 'Checking…';
  try{
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        model:"claude-sonnet-4-6",
        max_tokens:400,
        system: "You are a compliance pre-check for a product listing hub. Given a product name and description, give a short 3-4 sentence readiness note: likely applicable BIS standard/certification if you can identify one, one concrete thing they should verify before listing, and an encouraging but honest tone. Never invent a standard number you're not confident about — say to verify on bis.gov.in instead. No headers or bullet lists, plain prose.",
        messages: [{role:'user', content: `Product: ${name}\nDescription: ${desc || 'No description provided.'}`}]
      })
    });
    const data = await res.json();
    const textBlock = (data.content || []).find(b=>b.type==='text');
    resultBox.textContent = textBlock ? textBlock.text : "Couldn't complete the check — try again.";
  }catch(e){
    resultBox.textContent = "Something went wrong running the check. Please try again.";
  }
});
</script>
</body>
</html>
