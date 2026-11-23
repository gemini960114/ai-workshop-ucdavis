import { ref, computed, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { w as withBase } from "./Content.C5TDlyxE.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const _imports_0 = "/ai-workshop-ucdavis/slides/slide-01.png";
const _imports_1 = "/ai-workshop-ucdavis/slides/slide-02.png";
const _imports_2 = "/ai-workshop-ucdavis/slides/slide-03.png";
const _imports_3 = "/ai-workshop-ucdavis/slides/slide-04.png";
const _imports_4 = "/ai-workshop-ucdavis/slides/slide-05.png";
const _imports_5 = "/ai-workshop-ucdavis/slides/slide-06.png";
const _imports_6 = "/ai-workshop-ucdavis/slides/slide-07.png";
const _imports_7 = "/ai-workshop-ucdavis/slides/slide-08.png";
const _imports_8 = "/ai-workshop-ucdavis/slides/slide-09.png";
const _imports_9 = "/ai-workshop-ucdavis/slides/slide-10.png";
const _imports_10 = "/ai-workshop-ucdavis/slides/slide-11.png";
const _imports_11 = "/ai-workshop-ucdavis/slides/slide-12.png";
const _imports_12 = "/ai-workshop-ucdavis/slides/slide-13.png";
const _imports_13 = "/ai-workshop-ucdavis/slides/slide-14.png";
const _imports_14 = "/ai-workshop-ucdavis/slides/slide-15.png";
const _imports_15 = "/ai-workshop-ucdavis/slides/slide-16.png";
const _imports_16 = "/ai-workshop-ucdavis/slides/slide-17.png";
const _imports_17 = "/ai-workshop-ucdavis/slides/slide-18.png";
const _imports_18 = "/ai-workshop-ucdavis/slides/slide-19.png";
const _imports_19 = "/ai-workshop-ucdavis/slides/slide-20.png";
const _imports_20 = "/ai-workshop-ucdavis/slides/slide-21.png";
const _imports_21 = "/ai-workshop-ucdavis/slides/slide-22.png";
const _imports_22 = "/ai-workshop-ucdavis/slides/slide-23.png";
const _sfc_main$1 = {
  __name: "DeckPlayer",
  __ssrInlineRender: true,
  setup(__props) {
    const slides = [
      {
        num: 1,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "Bring the AI Agent to Your Laptop as Your Research Partner",
        subtitle: "Multiple agents, cross-checked — then build your own Skill",
        img: "/slides/slide-01.png",
        notes: "Hello everyone, and welcome. Today's idea is simple: bring an AI agent onto your own laptop and let it be your research partner. One habit goes with it: use more than one agent and let them cross-check each other. At the end, you will turn what works into a Skill of your own. The link at the top opens the course website, and the QR code lets you download the slides."
      },
      {
        num: 2,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "About the Speaker",
        subtitle: "Researcher, National Center for High-performance Computing (NCHC)",
        img: "/slides/slide-02.png",
        notes: "A quick introduction. I am a researcher at NCHC, Taiwan's national supercomputing center. My background is bioinformatics, and my work covers high-performance computing, computational neuroscience, and generative AI. I study the fruit fly brain and build 3D tools to reconstruct and analyze its neurons. What I share today is meant to be practical for researchers."
      },
      {
        num: 3,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "About NCHC",
        subtitle: "From Enabler to Enhancer — Supercomputers are the spark of R&D",
        img: "/slides/slide-03.png",
        notes: "NCHC was founded in 1991. We run Taiwan's shared computing platform and the academic research network. Our core technologies are high-performance computing, cloud, cybersecurity, AI, and data analysis. Our slogan is 'From Enabler to Enhancer': supercomputers are the spark of research, and they help teams across Taiwan get their best results."
      },
      {
        num: 4,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "NCHC HPC Cluster Systems",
        subtitle: "Taiwania 2 · Taiwania 3 · Forerunner 1 · Nano 5",
        img: "/slides/slide-04.png",
        notes: "These are our supercomputer clusters. Taiwania 2 started in 2018 and ranked number 20 on the Top500 list. Taiwania 3 came in 2020, Forerunner 1 in 2023, and Nano 5 in 2025. Each system has a different role, and Nano 5 reaches about 13 PFLOPS. You do not need to remember the numbers. The point is that we have real, large machines for researchers."
      },
      {
        num: 5,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "NCHC Nano4 System (Jingchuang 26)",
        subtitle: "Ranked #29 on TOP500 · 1,760 H200 GPUs · 144 GB200 GPUs",
        img: "/slides/slide-05.png",
        notes: "Here is Nano4. It ranked number 29 on the TOP500 list. It has 1,760 H200 GPUs and 144 GB200 GPUs. Here is why this matters today: this much computing power can now be controlled by an AI agent, using plain language."
      },
      {
        num: 6,
        part: "Part 1 · Opening & NCHC Supercomputers",
        title: "In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers?",
        subtitle: "Just one sentence: 15 brain MRI scans analyzed on Nano4 (FreeSurfer + Slurm)",
        img: "/slides/slide-06.png",
        videoLocal: "/videos/nano4-mri-demo.mp4",
        notes: "Let's watch a short demo. A researcher gives one sentence to an AI agent. The agent then analyzes 15 brain MRI scans on Nano4. This is for epilepsy pre-surgical evaluation, and it uses FreeSurfer and the Slurm scheduler on the supercomputer. The researcher does not write the commands by hand. Please watch how much the agent does for them."
      },
      {
        num: 7,
        part: "Part 2 · What Is Generative AI?",
        title: "What Is Generative AI?",
        subtitle: "Understanding the engine underneath AI Agents",
        img: "/slides/slide-07.png",
        notes: "Before we talk about agents, let's understand the engine underneath: generative AI. In one sentence, it is a very powerful word-chain game. Let me show you how it works."
      },
      {
        num: 8,
        part: "Part 2 · What Is Generative AI?",
        title: "Word Chain (Next Token Prediction)",
        subtitle: "Encoding words into token numbers and decoding the predicted next token",
        img: "/slides/slide-08.png",
        notes: "Computers cannot read words, only numbers. So every word is turned into a number using a dictionary. These pieces are called tokens. GPT-3's dictionary has about 50 thousand tokens, GPT-4 about 100 thousand, and GPT-5 about 150 thousand. In this example, 'Taiwan's best' becomes three numbers. The model predicts the next number, 14221, and we decode it back into a word: 'food'."
      },
      {
        num: 9,
        part: "Part 2 · What Is Generative AI?",
        title: "Generative AI Creates Content by Word Chain!",
        subtitle: "Generating one token at a time until END",
        img: "/slides/slide-09.png",
        notes: "So generative AI answers by playing word chain. We ask, 'What is Taiwan's tallest mountain?' The model predicts 'Yu'. We add 'Yu' to the question and ask again. It predicts 'shan'. We add it again, and now it predicts END, so it stops. It writes one small piece at a time."
      },
      {
        num: 10,
        part: "Part 2 · What Is Generative AI?",
        title: "Why Are the Answers Different Every Time?",
        subtitle: "Scoring thousands of candidate tokens and rolling the dice",
        img: "/slides/slide-10.png",
        notes: "At each step, the model does not have just one choice. It scores thousands of possible next words. The bars show how likely each word is. Then the model rolls a dice among the likely ones. So the answer could start with 'Yu', 'It', or 'The'."
      },
      {
        num: 11,
        part: "Part 2 · What Is Generative AI?",
        title: "This Is Why Answers Differ Every Time — and May Include Hallucinations",
        subtitle: "Token probability distribution across 150K choices",
        img: "/slides/slide-11.png",
        notes: "This is why the answer is different every time. It is also why mistakes can appear. We call them hallucinations. One unlucky word can be chosen, and every later word follows it. The lesson is simple: AI sounds confident, but we must check its work."
      },
      {
        num: 12,
        part: "Part 2 · What Is Generative AI?",
        title: "Artificial Analysis Intelligence Index (2026-11-12)",
        subtitle: "Top models come from multiple providers — no single winner for every job",
        img: "/slides/slide-12.png",
        notes: "How do we know which AI is good? This chart ranks many models with one independent index, dated 2026-11-12. Notice that the top scores come from a few different companies, and they are close to each other. Open-weight models, whose weights anyone can download, sit a bit lower. There is no single winner for every job. Keep this in mind for later: use more than one model."
      },
      {
        num: 13,
        part: "Part 3 · What Is Agentic AI?",
        title: "So What Is Agentic AI?",
        subtitle: "From a chatbot that only talks to an agent that acts",
        img: "/slides/slide-13.png",
        notes: "Now the second big idea: Agentic AI. A chatbot only talks. An agent can also act: it can read files, run programs, and check the results. Let's see how it is built."
      },
      {
        num: 14,
        part: "Part 3 · What Is Agentic AI?",
        title: "What Is Agentic? Brain + Tools = AI Agent",
        subtitle: "ChatGPT (Brain) + Codex (Tools) = AI Agent, just like Tony Stark + Iron Man Suit",
        img: "/slides/slide-14.png",
        notes: "Think of Iron Man. Tony Stark is the brain. The Iron Man suit gives him tools and power. Together they make a hero. In AI, ChatGPT is the brain, and Codex is the suit. The suit lets the brain open files, run code, and fix its own mistakes. The agent works in a loop: think, use a tool, look at the result, and think again. Brain plus tools makes an agent."
      },
      {
        num: 15,
        part: "Part 3 · What Is Agentic AI?",
        title: "Three Agentic Tools: Don't Trust Just One",
        subtitle: "ChatGPT + Codex · Gemini + Antigravity · Claude + Claude Code",
        img: "/slides/slide-15.png",
        notes: "There are three big families. Each one pairs a brain with a suit, just like the superheroes on this slide. ChatGPT with Codex is Iron Man. Gemini with Antigravity is Captain America. Claude with Claude Code is Doctor Strange. Each hero has strengths and blind spots. So here is our rule for this course: do not trust just one hero. Let one agent do the work and let another agent check it."
      },
      {
        num: 16,
        part: "Part 4 · Cloud vs. Local on Your Laptop",
        title: "How Can These AI Agents Do Research with You?",
        subtitle: "Read papers · Analyze data · Write reports · Check results — Bring the AI Agent’s Brain into Your Laptop",
        img: "/slides/slide-16.png",
        notes: "Remember the demo at the start: one sentence, and an agent analyzed 15 brain MRI scans. That is research work. Researchers read papers, analyze data, write reports, and check the results. So the question is: how can these agents work with you on that, on your own laptop? Two ideas. First, bring the agent's brain to your laptop. Second, use more than one agent. Let me show you a simple example."
      },
      {
        num: 17,
        part: "Part 4 · Cloud vs. Local on Your Laptop",
        title: "Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI",
        subtitle: "Web chat vs. local IDE, checked by a second AI",
        img: "/slides/slide-17.png",
        youtubeId: "sLCBtmZAz2c",
        unitLink: "./00_cloud_vs_local",
        unitLabel: "Open Unit 00 Guide",
        notes: "This is Unit 00: one paper, two ways to use AI. Way one is ChatGPT on the web. Way two is an AI editor, an IDE, on my own laptop. I ask the same three questions in both. Then a second agent, Gemini, checks the report. Please watch the video to see how the two ways compare, and how the second agent catches problems. This is the habit we want: one agent works, another agent checks. Unit 00 showed the habit. Next, let me show you the full learning path."
      },
      {
        num: 18,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "🧭 Your Learning Path (From Tool to Skill · Units 01–04)",
        subtitle: "1. TOOL (Unit 01) → 2. SKILL (Unit 02) → 3. MORE SKILLS (Unit 03) → 4. BUILD (Unit 04)",
        img: "/slides/slide-18.png",
        notes: "Here is the path for the rest of the course. We start with the tool: Unit 01, an agent you talk to in plain language. Then skills. In Unit 02 we add one skill and see the result get better. In Unit 03 we use four skills for office documents. In Unit 04 we build a skill from a workflow that works, and in the bonus part two agents check each other. All along, the habit from Unit 00 stays the same: one agent works, another agent checks. Everything is on the course website, with a written guide and a video for each unit."
      },
      {
        num: 19,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "🧰 Unit 01 | Getting Started with Antigravity",
        subtitle: "Step 1 of 4 · The Tool",
        img: "/slides/slide-19.png",
        youtubeId: "72oCyg8MDLg",
        unitLink: "./01_antigravity",
        unitLabel: "Open Unit 01 Guide",
        notes: "Unit 01 is the tool. We install Antigravity, an editor with a built-in AI agent. You chat in plain language, with no coding needed. By the end, you have built a web page and a small game. The video shows every step."
      },
      {
        num: 20,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "🎨 Unit 02 | Frontend Design",
        subtitle: "Step 2 of 4 · Skills",
        img: "/slides/slide-20.png",
        youtubeId: "86bsVsh2tXw",
        unitLink: "./02_frontend_design",
        unitLabel: "Open Unit 02 Guide",
        notes: "Unit 02 is about skills. A skill is a set of instructions that teaches an agent how to do a job well. We install Anthropic's frontend-design skill and ask for the same web page again. Compare it with Unit 01: same request, but now the page looks designed instead of looking like a template."
      },
      {
        num: 21,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "📄 Unit 03 | Office Document Processing",
        subtitle: "Step 3 of 4 · More Skills (docx, pdf, pptx, xlsx)",
        img: "/slides/slide-21.png",
        youtubeId: "sOIg3osiPU4",
        unitLink: "./03_office_skills",
        unitLabel: "Open Unit 03 Guide",
        notes: "Unit 03 is office documents. We use four official skills: docx, pdf, pptx, and xlsx. We start with one CSV file and end with an Excel workbook, slides, a Word report, and a PDF handout. This can save you hours on routine paperwork."
      },
      {
        num: 22,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "🧾 Unit 04 | Voucher OCR to Excel",
        subtitle: "Step 4 of 4 · Build Your Own Skill (voucher-to-excel)",
        img: "/slides/slide-22.png",
        youtubeId: "Kq0HLK2kIQg",
        unitLink: "./04_voucher_ocr",
        unitLabel: "Open Unit 04 Guide",
        notes: "Unit 04 is voucher OCR to Excel. You give the agent a scanned voucher. It reads the voucher and fills in an Excel sheet. When it works, we save the steps as our own skill, so next time one sentence does the whole job. There is also a bonus part with two agents: a second agent double-checks the first. That is our cross-check habit again. Now you can use the same pattern to build skills for your own research."
      },
      {
        num: 23,
        part: "Part 5 · From Tool to Skill (Units 01–04)",
        title: "Thank You for Your Attention & Q&A",
        subtitle: "National Center for High-performance Computing (NCHC), Taiwan",
        img: "/slides/slide-23.png",
        notes: "Thank you for listening. If you remember only one thing today, remember this: use more than one agent, and always check the result. Scan the QR code to download the slides, and now let's take your questions."
      }
    ];
    const currentIdx = ref(0);
    const showVideo = ref(false);
    const current = computed(() => slides[currentIdx.value] || slides[0]);
    function prevSlide() {
      if (currentIdx.value > 0) {
        currentIdx.value--;
        showVideo.value = false;
      }
    }
    function nextSlide() {
      if (currentIdx.value < slides.length - 1) {
        currentIdx.value++;
        showVideo.value = false;
      }
    }
    function onKeydown(e) {
      if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    }
    onMounted(() => window.addEventListener("keydown", onKeydown));
    onUnmounted(() => window.removeEventListener("keydown", onKeydown));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "deck-player" }, _attrs))} data-v-924e2de8><div class="deck-header" data-v-924e2de8><span class="deck-part" data-v-924e2de8>${ssrInterpolate(current.value.part)}</span><span class="deck-counter" data-v-924e2de8>Slide ${ssrInterpolate(current.value.num)} / ${ssrInterpolate(slides.length)}</span></div><div class="deck-stage" data-v-924e2de8>`);
      if (showVideo.value && current.value.videoLocal) {
        _push(`<video class="deck-video"${ssrRenderAttr("src", unref(withBase)(current.value.videoLocal))}${ssrRenderAttr("poster", unref(withBase)(current.value.img))} controls autoplay data-v-924e2de8></video>`);
      } else if (showVideo.value && current.value.youtubeId) {
        _push(`<iframe class="deck-video"${ssrRenderAttr("src", `https://www.youtube.com/embed/${current.value.youtubeId}?autoplay=1`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-v-924e2de8></iframe>`);
      } else {
        _push(`<img class="deck-img"${ssrRenderAttr("src", unref(withBase)(current.value.img))}${ssrRenderAttr("alt", `Slide ${current.value.num}: ${current.value.title}`)} data-v-924e2de8>`);
      }
      _push(`</div><div class="deck-controls" data-v-924e2de8><button class="deck-btn"${ssrIncludeBooleanAttr(currentIdx.value === 0) ? " disabled" : ""} data-v-924e2de8>← Prev</button><select class="deck-select"${ssrRenderAttr("value", currentIdx.value)} data-v-924e2de8><!--[-->`);
      ssrRenderList(slides, (s, idx) => {
        _push(`<option${ssrRenderAttr("value", idx)} data-v-924e2de8> Slide ${ssrInterpolate(s.num)}: ${ssrInterpolate(s.title)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (current.value.videoLocal || current.value.youtubeId) {
        _push(`<button class="deck-btn deck-btn-video" data-v-924e2de8>${ssrInterpolate(showVideo.value ? "🖼️ Show Slide" : "▶ Watch Demo Video")}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (current.value.unitLink) {
        _push(`<a class="deck-btn deck-btn-link"${ssrRenderAttr("href", current.value.unitLink)} data-v-924e2de8>${ssrInterpolate(current.value.unitLabel)} → </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="deck-btn"${ssrIncludeBooleanAttr(currentIdx.value === slides.length - 1) ? " disabled" : ""} data-v-924e2de8>Next →</button></div><div class="deck-notes" data-v-924e2de8><div class="deck-notes-label" data-v-924e2de8>🎙️ Speaker Notes — Slide ${ssrInterpolate(current.value.num)}</div><p class="deck-notes-text" data-v-924e2de8>${ssrInterpolate(current.value.notes)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/components/DeckPlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeckPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-924e2de8"]]);
const __pageData = JSON.parse('{"title":"Keynote Presentation: Bring the AI Agent to Your Laptop as Your Research Partner","description":"","frontmatter":{},"headers":[],"relativePath":"guide/keynote.md","filePath":"guide/keynote.md"}');
const __default__ = { name: "guide/keynote.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="keynote-presentation-bring-the-ai-agent-to-your-laptop-as-your-research-partner" tabindex="-1">Keynote Presentation: Bring the AI Agent to Your Laptop as Your Research Partner <a class="header-anchor" href="#keynote-presentation-bring-the-ai-agent-to-your-laptop-as-your-research-partner" aria-label="Permalink to &quot;Keynote Presentation: Bring the AI Agent to Your Laptop as Your Research Partner&quot;">​</a></h1><p><strong>Multiple agents, cross-checked — then build your own Skill.</strong></p><blockquote><p>📥 <strong>Download PowerPoint Slides (.pptx)</strong>: <a href="https://reurl.cc/5XjzlG" target="_blank" rel="noreferrer">https://reurl.cc/5XjzlG</a> 💡 Use the <strong>interactive slide player</strong> below (supports <strong>← / → arrow keys</strong>) or scroll down to read the full 5-part web version with embedded demo videos and speaker notes.</p></blockquote>`);
      _push(ssrRenderComponent(DeckPlayer, null, null, _parent));
      _push(`<hr><h2 id="part-1-opening--nchc-supercomputers-in-the-age-of-ai-agents-slides-16" tabindex="-1">Part 1: Opening &amp; NCHC Supercomputers in the Age of AI Agents (Slides 1–6) <a class="header-anchor" href="#part-1-opening--nchc-supercomputers-in-the-age-of-ai-agents-slides-16" aria-label="Permalink to &quot;Part 1: Opening &amp; NCHC Supercomputers in the Age of AI Agents (Slides 1–6)&quot;">​</a></h2><h3 id="slide-1--bring-the-ai-agent-to-your-laptop-as-your-research-partner" tabindex="-1">Slide 1 · Bring the AI Agent to Your Laptop as Your Research Partner <a class="header-anchor" href="#slide-1--bring-the-ai-agent-to-your-laptop-as-your-research-partner" aria-label="Permalink to &quot;Slide 1 · Bring the AI Agent to Your Laptop as Your Research Partner&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="Slide 1"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Hello everyone, and welcome. Today&#39;s idea is simple: bring an AI agent onto your own laptop and let it be your research partner. One habit goes with it: use more than one agent and let them cross-check each other. At the end, you will turn what works into a Skill of your own. The link at the top opens the course website, and the QR code lets you download the slides.</p></blockquote><hr><h3 id="slide-2--about-the-speaker" tabindex="-1">Slide 2 · About the Speaker <a class="header-anchor" href="#slide-2--about-the-speaker" aria-label="Permalink to &quot;Slide 2 · About the Speaker&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_1)} alt="Slide 2"></p><ul><li><strong>Researcher, National Center for High-performance Computing (NCHC)</strong></li><li>Background in bioinformatics, with expertise in high-performance computing (HPC), computational neuroscience, and generative AI.</li><li>Specializes in <em>Drosophila</em> brain connectomics, developing 3D neuroimaging reconstruction and analysis techniques; results published in <em>Current Biology</em>, <em>Cell Reports</em>, and other journals.</li></ul><blockquote><p>🎙️ <strong>Speaker Notes</strong>: A quick introduction. I am a researcher at NCHC, Taiwan&#39;s national supercomputing center. My background is bioinformatics, and my work covers high-performance computing, computational neuroscience, and generative AI. I study the fruit fly brain and build 3D tools to reconstruct and analyze its neurons. What I share today is meant to be practical for researchers.</p></blockquote><hr><h3 id="slide-3--about-nchc" tabindex="-1">Slide 3 · About NCHC <a class="header-anchor" href="#slide-3--about-nchc" aria-label="Permalink to &quot;Slide 3 · About NCHC&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_2)} alt="Slide 3"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: NCHC was founded in 1991. We run Taiwan&#39;s shared computing platform and the academic research network. Our core technologies are high-performance computing, cloud, cybersecurity, AI, and data analysis. Our slogan is &#39;From Enabler to Enhancer&#39;: supercomputers are the spark of research, and they help teams across Taiwan get their best results.</p></blockquote><hr><h3 id="slide-4--nchc-hpc-cluster-systems" tabindex="-1">Slide 4 · NCHC HPC Cluster Systems <a class="header-anchor" href="#slide-4--nchc-hpc-cluster-systems" aria-label="Permalink to &quot;Slide 4 · NCHC HPC Cluster Systems&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_3)} alt="Slide 4"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: These are our supercomputer clusters. Taiwania 2 started in 2018 and ranked number 20 on the Top500 list. Taiwania 3 came in 2020, Forerunner 1 in 2023, and Nano 5 in 2025. Each system has a different role, and Nano 5 reaches about 13 PFLOPS. You do not need to remember the numbers. The point is that we have real, large machines for researchers.</p></blockquote><hr><h3 id="slide-5--nchc-nano4-system-jingchuang-26" tabindex="-1">Slide 5 · NCHC Nano4 System (Jingchuang 26) <a class="header-anchor" href="#slide-5--nchc-nano4-system-jingchuang-26" aria-label="Permalink to &quot;Slide 5 · NCHC Nano4 System (Jingchuang 26)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_4)} alt="Slide 5"></p><ul><li><strong>Ranked #29 on the TOP500 supercomputer list</strong></li><li><strong>1,760 H200 GPUs</strong></li><li><strong>144 GB200 GPUs</strong></li></ul><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Here is Nano4. It ranked number 29 on the TOP500 list. It has 1,760 H200 GPUs and 144 GB200 GPUs. Here is why this matters today: this much computing power can now be controlled by an AI agent, using plain language.</p></blockquote><hr><h3 id="slide-6--in-the-age-of-ai-agents-what-can-supercomputers-do-for-physicians-and-researchers" tabindex="-1">Slide 6 · In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers? <a class="header-anchor" href="#slide-6--in-the-age-of-ai-agents-what-can-supercomputers-do-for-physicians-and-researchers" aria-label="Permalink to &quot;Slide 6 · In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers?&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_5)} alt="Slide 6"></p><h4 id="-demo-video-1-sentence-15-brain-mri-scans-analyzed-on-nano4-epilepsy-pre-surgical-evaluation--freesurfer--slurm" tabindex="-1">🎬 Demo Video: 1 Sentence, 15 Brain MRI Scans Analyzed on Nano4 (Epilepsy Pre-Surgical Evaluation · FreeSurfer · Slurm) <a class="header-anchor" href="#-demo-video-1-sentence-15-brain-mri-scans-analyzed-on-nano4-epilepsy-pre-surgical-evaluation--freesurfer--slurm" aria-label="Permalink to &quot;🎬 Demo Video: 1 Sentence, 15 Brain MRI Scans Analyzed on Nano4 (Epilepsy Pre-Surgical Evaluation · FreeSurfer · Slurm)&quot;">​</a></h4><p><video style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:1px solid var(--vp-c-divider);"${ssrRenderAttr("src", unref(withBase)("/videos/nano4-mri-demo.mp4"))}${ssrRenderAttr("poster", unref(withBase)("/slides/slide-06.png"))} controls preload="metadata"></video></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Let&#39;s watch a short demo. A researcher gives one sentence to an AI agent. The agent then analyzes 15 brain MRI scans on Nano4. This is for epilepsy pre-surgical evaluation, and it uses FreeSurfer and the Slurm scheduler on the supercomputer. The researcher does not write the commands by hand. Please watch how much the agent does for them.</p></blockquote><hr><h2 id="part-2-what-is-generative-ai-word-chain-tokens--hallucinations-slides-712" tabindex="-1">Part 2: What Is Generative AI? Word Chain, Tokens &amp; Hallucinations (Slides 7–12) <a class="header-anchor" href="#part-2-what-is-generative-ai-word-chain-tokens--hallucinations-slides-712" aria-label="Permalink to &quot;Part 2: What Is Generative AI? Word Chain, Tokens &amp; Hallucinations (Slides 7–12)&quot;">​</a></h2><h3 id="slide-7--what-is-generative-ai" tabindex="-1">Slide 7 · What Is Generative AI? <a class="header-anchor" href="#slide-7--what-is-generative-ai" aria-label="Permalink to &quot;Slide 7 · What Is Generative AI?&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_6)} alt="Slide 7"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Before we talk about agents, let&#39;s understand the engine underneath: generative AI. In one sentence, it is a very powerful word-chain game. Let me show you how it works.</p></blockquote><hr><h3 id="slide-8--word-chain-next-token-prediction" tabindex="-1">Slide 8 · Word Chain (Next Token Prediction) <a class="header-anchor" href="#slide-8--word-chain-next-token-prediction" aria-label="Permalink to &quot;Slide 8 · Word Chain (Next Token Prediction)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_7)} alt="Slide 8"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Computers cannot read words, only numbers. So every word is turned into a number using a dictionary. These pieces are called tokens. GPT-3&#39;s dictionary has about 50 thousand tokens, GPT-4 about 100 thousand, and GPT-5 about 150 thousand. In this example, &#39;Taiwan&#39;s best&#39; becomes three numbers. The model predicts the next number, 14221, and we decode it back into a word: &#39;food&#39;.</p></blockquote><hr><h3 id="slide-9--generative-ai-creates-content-by-word-chain" tabindex="-1">Slide 9 · Generative AI Creates Content by Word Chain! <a class="header-anchor" href="#slide-9--generative-ai-creates-content-by-word-chain" aria-label="Permalink to &quot;Slide 9 · Generative AI Creates Content by Word Chain!&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_8)} alt="Slide 9"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: So generative AI answers by playing word chain. We ask, &#39;What is Taiwan&#39;s tallest mountain?&#39; The model predicts &#39;Yu&#39;. We add &#39;Yu&#39; to the question and ask again. It predicts &#39;shan&#39;. We add it again, and now it predicts END, so it stops. It writes one small piece at a time.</p></blockquote><hr><h3 id="slide-10--why-are-the-answers-different-every-time" tabindex="-1">Slide 10 · Why Are the Answers Different Every Time? <a class="header-anchor" href="#slide-10--why-are-the-answers-different-every-time" aria-label="Permalink to &quot;Slide 10 · Why Are the Answers Different Every Time?&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_9)} alt="Slide 10"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: At each step, the model does not have just one choice. It scores thousands of possible next words. The bars show how likely each word is. Then the model rolls a dice among the likely ones. So the answer could start with &#39;Yu&#39;, &#39;It&#39;, or &#39;The&#39;.</p></blockquote><hr><h3 id="slide-11--why-answers-differ-every-time-and-may-include-hallucinations" tabindex="-1">Slide 11 · Why Answers Differ Every Time and May Include Hallucinations <a class="header-anchor" href="#slide-11--why-answers-differ-every-time-and-may-include-hallucinations" aria-label="Permalink to &quot;Slide 11 · Why Answers Differ Every Time and May Include Hallucinations&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_10)} alt="Slide 11"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: This is why the answer is different every time. It is also why mistakes can appear. We call them hallucinations. One unlucky word can be chosen, and every later word follows it. The lesson is simple: AI sounds confident, but we must check its work.</p></blockquote><hr><h3 id="slide-12--artificial-analysis-intelligence-index-2026-11-12" tabindex="-1">Slide 12 · Artificial Analysis Intelligence Index (2026-11-12) <a class="header-anchor" href="#slide-12--artificial-analysis-intelligence-index-2026-11-12" aria-label="Permalink to &quot;Slide 12 · Artificial Analysis Intelligence Index (2026-11-12)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_11)} alt="Slide 12"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: How do we know which AI is good? This chart ranks many models with one independent index, dated 2026-11-12. Notice that the top scores come from a few different companies, and they are close to each other. Open-weight models, whose weights anyone can download, sit a bit lower. There is no single winner for every job. Keep this in mind for later: use more than one model.</p></blockquote><hr><h2 id="part-3-what-is-agentic-ai-brain--tools--ai-agent-slides-1315" tabindex="-1">Part 3: What Is Agentic AI? Brain + Tools = AI Agent (Slides 13–15) <a class="header-anchor" href="#part-3-what-is-agentic-ai-brain--tools--ai-agent-slides-1315" aria-label="Permalink to &quot;Part 3: What Is Agentic AI? Brain + Tools = AI Agent (Slides 13–15)&quot;">​</a></h2><h3 id="slide-13--so-what-is-agentic-ai" tabindex="-1">Slide 13 · So What Is Agentic AI? <a class="header-anchor" href="#slide-13--so-what-is-agentic-ai" aria-label="Permalink to &quot;Slide 13 · So What Is Agentic AI?&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_12)} alt="Slide 13"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Now the second big idea: Agentic AI. A chatbot only talks. An agent can also act: it can read files, run programs, and check the results. Let&#39;s see how it is built.</p></blockquote><hr><h3 id="slide-14--what-is-agentic-brain--tools--ai-agent" tabindex="-1">Slide 14 · What Is Agentic? Brain + Tools = AI Agent <a class="header-anchor" href="#slide-14--what-is-agentic-brain--tools--ai-agent" aria-label="Permalink to &quot;Slide 14 · What Is Agentic? Brain + Tools = AI Agent&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_13)} alt="Slide 14"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Think of Iron Man. Tony Stark is the brain. The Iron Man suit gives him tools and power. Together they make a hero. In AI, ChatGPT is the brain, and Codex is the suit. The suit lets the brain open files, run code, and fix its own mistakes. The agent works in a loop: think, use a tool, look at the result, and think again. Brain plus tools makes an agent.</p></blockquote><hr><h3 id="slide-15--three-agentic-tools-dont-trust-just-one" tabindex="-1">Slide 15 · Three Agentic Tools: Don&#39;t Trust Just One <a class="header-anchor" href="#slide-15--three-agentic-tools-dont-trust-just-one" aria-label="Permalink to &quot;Slide 15 · Three Agentic Tools: Don&#39;t Trust Just One&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_14)} alt="Slide 15"></p><table tabindex="0"><thead><tr><th>Brain (LLM)</th><th>Suit (Agentic Tool)</th><th>Superhero Analogy</th></tr></thead><tbody><tr><td><strong>ChatGPT</strong></td><td><strong>Codex</strong></td><td>🦾 Iron Man</td></tr><tr><td><strong>Gemini</strong></td><td><strong>Antigravity</strong></td><td>🛡️ Captain America</td></tr><tr><td><strong>Claude</strong></td><td><strong>Claude Code</strong></td><td>🔮 Doctor Strange</td></tr></tbody></table><blockquote><p>🎙️ <strong>Speaker Notes</strong>: There are three big families. Each one pairs a brain with a suit, just like the superheroes on this slide. ChatGPT with Codex is Iron Man. Gemini with Antigravity is Captain America. Claude with Claude Code is Doctor Strange. Each hero has strengths and blind spots. So here is our rule for this course: do not trust just one hero. Let one agent do the work and let another agent check it.</p></blockquote><hr><h2 id="part-4-bring-the-agents-brain-into-your-laptop--unit-00-slides-1617" tabindex="-1">Part 4: Bring the Agent&#39;s Brain into Your Laptop — Unit 00 (Slides 16–17) <a class="header-anchor" href="#part-4-bring-the-agents-brain-into-your-laptop--unit-00-slides-1617" aria-label="Permalink to &quot;Part 4: Bring the Agent&#39;s Brain into Your Laptop — Unit 00 (Slides 16–17)&quot;">​</a></h2><h3 id="slide-16--how-can-these-ai-agents-do-research-with-you" tabindex="-1">Slide 16 · How Can These AI Agents Do Research with You? <a class="header-anchor" href="#slide-16--how-can-these-ai-agents-do-research-with-you" aria-label="Permalink to &quot;Slide 16 · How Can These AI Agents Do Research with You?&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_15)} alt="Slide 16"></p><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Remember the demo at the start: one sentence, and an agent analyzed 15 brain MRI scans. That is research work. Researchers read papers, analyze data, write reports, and check the results. So the question is: how can these agents work with you on that, on your own laptop? Two ideas. First, bring the agent&#39;s brain to your laptop. Second, use more than one agent. Let me show you a simple example.</p></blockquote><hr><h3 id="slide-17--unit-00--cloud-vs-local-one-paper-two-ways-to-use-ai" tabindex="-1">Slide 17 · Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI <a class="header-anchor" href="#slide-17--unit-00--cloud-vs-local-one-paper-two-ways-to-use-ai" aria-label="Permalink to &quot;Slide 17 · Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_16)} alt="Slide 17"></p><ul><li>📖 <strong>Written Guide</strong>: <a href="./00_cloud_vs_local.html">Open Unit 00: Cloud vs. Local</a></li><li>🎬 <strong>YouTube Video</strong>: <a href="https://www.youtube.com/watch?v=sLCBtmZAz2c" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=sLCBtmZAz2c</a></li></ul><iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/sLCBtmZAz2c" title="Unit 00 | Cloud vs. Local" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><blockquote><p>🎙️ <strong>Speaker Notes</strong>: This is Unit 00: one paper, two ways to use AI. Way one is ChatGPT on the web. Way two is an AI editor, an IDE, on my own laptop. I ask the same three questions in both. Then a second agent, Gemini, checks the report. Please watch the video to see how the two ways compare, and how the second agent catches problems. This is the habit we want: one agent works, another agent checks. Unit 00 showed the habit. Next, let me show you the full learning path.</p></blockquote><h4 id="-unit-00-live-demo-prompts" tabindex="-1">📋 Unit 00 Live Demo Prompts <a class="header-anchor" href="#-unit-00-live-demo-prompts" aria-label="Permalink to &quot;📋 Unit 00 Live Demo Prompts&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ChatGPT Web and Local Claude Code</span></span>
<span class="line"><span>What does &quot;wet-lab science&quot; in this paper&#39;s title mean? Why would AI need to handle lab work?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>It says 100 lab questions were used to test the AI. What kinds of questions are they? Multiple choice or image-based? Please put it in a simple table.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>I&#39;m a graduate student who just joined a biology lab. How can I safely use AI to check my experimental data without being misled?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please compile the questions and answers above into a Word report named report.docx</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Switch to Gemini for Cross-Checking</span></span>
<span class="line"><span>report.docx is the AI agent&#39;s write-up of the questions and answers based on measuring-how-ai-agents-handle-wet-lab-science.pdf. Please check whether it is correct.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Revise it according to your suggestions and save it under a new file name</span></span></code></pre></div><hr><h2 id="part-5-from-tool-to-skill--your-learning-path--units-0104-slides-1823" tabindex="-1">Part 5: From Tool to Skill — Your Learning Path &amp; Units 01–04 (Slides 18–23) <a class="header-anchor" href="#part-5-from-tool-to-skill--your-learning-path--units-0104-slides-1823" aria-label="Permalink to &quot;Part 5: From Tool to Skill — Your Learning Path &amp; Units 01–04 (Slides 18–23)&quot;">​</a></h2><h3 id="slide-18---your-learning-path-from-tool-to-skill--units-0104" tabindex="-1">Slide 18 · 🧭 Your Learning Path (<code>From Tool to Skill · Units 01–04</code>) <a class="header-anchor" href="#slide-18---your-learning-path-from-tool-to-skill--units-0104" aria-label="Permalink to &quot;Slide 18 · 🧭 Your Learning Path (\`From Tool to Skill · Units 01–04\`)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_17)} alt="Slide 18"></p><ol><li><strong><a href="./01_antigravity.html">Unit 01 · Getting Started with Antigravity</a></strong> (<code>TOOL</code>) — The tool: an AI agent you talk to in plain language.</li><li><strong><a href="./02_frontend_design.html">Unit 02 · Frontend Design</a></strong> (<code>SKILL</code>) — Use a skill: same request, a better-designed result.</li><li><strong><a href="./03_office_skills.html">Unit 03 · Office Document Processing</a></strong> (<code>MORE SKILLS</code>) — More skills: one CSV becomes Excel, slides, Word, and PDF.</li><li><strong><a href="./04_voucher_ocr.html">Unit 04 · Voucher OCR to Excel</a></strong> (<code>BUILD</code>) — Turn a working workflow into a skill. Bonus: two agents check each other.</li></ol><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Here is the path for the rest of the course. We start with the tool: Unit 01, an agent you talk to in plain language. Then skills. In Unit 02 we add one skill and see the result get better. In Unit 03 we use four skills for office documents. In Unit 04 we build a skill from a workflow that works, and in the bonus part two agents check each other. All along, the habit from Unit 00 stays the same: one agent works, another agent checks. Everything is on the course website, with a written guide and a video for each unit.</p></blockquote><hr><h3 id="slide-19---unit-01--getting-started-with-antigravity-step-1-of-4--the-tool" tabindex="-1">Slide 19 · 🧰 Unit 01 | Getting Started with Antigravity (<code>Step 1 of 4 · The Tool</code>) <a class="header-anchor" href="#slide-19---unit-01--getting-started-with-antigravity-step-1-of-4--the-tool" aria-label="Permalink to &quot;Slide 19 · 🧰 Unit 01 | Getting Started with Antigravity (\`Step 1 of 4 · The Tool\`)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_18)} alt="Slide 19"></p><ul><li>📖 <strong>Written Guide</strong>: <a href="./01_antigravity.html">Open Unit 01: Getting Started with Antigravity</a></li><li>🎬 <strong>YouTube Video</strong>: <a href="https://youtu.be/72oCyg8MDLg" target="_blank" rel="noreferrer">https://youtu.be/72oCyg8MDLg</a></li></ul><iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/72oCyg8MDLg" title="Unit 01 | Getting Started with Antigravity" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Unit 01 is the tool. We install Antigravity, an editor with a built-in AI agent. You chat in plain language, with no coding needed. By the end, you have built a web page and a small game. The video shows every step.</p></blockquote><hr><h3 id="slide-20---unit-02--frontend-design-step-2-of-4--skills" tabindex="-1">Slide 20 · 🎨 Unit 02 | Frontend Design (<code>Step 2 of 4 · Skills</code>) <a class="header-anchor" href="#slide-20---unit-02--frontend-design-step-2-of-4--skills" aria-label="Permalink to &quot;Slide 20 · 🎨 Unit 02 | Frontend Design (\`Step 2 of 4 · Skills\`)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_19)} alt="Slide 20"></p><ul><li>📖 <strong>Written Guide</strong>: <a href="./02_frontend_design.html">Open Unit 02: Frontend Design</a></li><li>🎬 <strong>YouTube Video</strong>: <a href="https://youtu.be/86bsVsh2tXw" target="_blank" rel="noreferrer">https://youtu.be/86bsVsh2tXw</a></li></ul><iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/86bsVsh2tXw" title="Unit 02 | Frontend Design" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Unit 02 is about skills. A skill is a set of instructions that teaches an agent how to do a job well. We install Anthropic&#39;s frontend-design skill and ask for the same web page again. Compare it with Unit 01: same request, but now the page looks designed instead of looking like a template.</p></blockquote><hr><h3 id="slide-21---unit-03--office-document-processing-step-3-of-4--more-skills" tabindex="-1">Slide 21 · 📄 Unit 03 | Office Document Processing (<code>Step 3 of 4 · More Skills</code>) <a class="header-anchor" href="#slide-21---unit-03--office-document-processing-step-3-of-4--more-skills" aria-label="Permalink to &quot;Slide 21 · 📄 Unit 03 | Office Document Processing (\`Step 3 of 4 · More Skills\`)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_20)} alt="Slide 21"></p><ul><li>📖 <strong>Written Guide</strong>: <a href="./03_office_skills.html">Open Unit 03: Office Document Processing</a></li><li>🎬 <strong>YouTube Video</strong>: <a href="https://youtu.be/sOIg3osiPU4" target="_blank" rel="noreferrer">https://youtu.be/sOIg3osiPU4</a></li></ul><iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/sOIg3osiPU4" title="Unit 03 | Office Document Processing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Unit 03 is office documents. We use four official skills: docx, pdf, pptx, and xlsx. We start with one CSV file and end with an Excel workbook, slides, a Word report, and a PDF handout. This can save you hours on routine paperwork.</p></blockquote><hr><h3 id="slide-22---unit-04--voucher-ocr-to-excel-step-4-of-4--build-your-own-skill" tabindex="-1">Slide 22 · 🧾 Unit 04 | Voucher OCR to Excel (<code>Step 4 of 4 · Build Your Own Skill</code>) <a class="header-anchor" href="#slide-22---unit-04--voucher-ocr-to-excel-step-4-of-4--build-your-own-skill" aria-label="Permalink to &quot;Slide 22 · 🧾 Unit 04 | Voucher OCR to Excel (\`Step 4 of 4 · Build Your Own Skill\`)&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_21)} alt="Slide 22"></p><ul><li>📖 <strong>Written Guide</strong>: <a href="./04_voucher_ocr.html">Open Unit 04: Voucher OCR to Excel</a></li><li>🎬 <strong>YouTube Video</strong>: <a href="https://youtu.be/Kq0HLK2kIQg" target="_blank" rel="noreferrer">https://youtu.be/Kq0HLK2kIQg</a></li></ul><iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/Kq0HLK2kIQg" title="Unit 04 | Voucher OCR to Excel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Unit 04 is voucher OCR to Excel. You give the agent a scanned voucher. It reads the voucher and fills in an Excel sheet. When it works, we save the steps as our own skill, so next time one sentence does the whole job. There is also a bonus part with two agents: a second agent double-checks the first. That is our cross-check habit again. Now you can use the same pattern to build skills for your own research.</p></blockquote><hr><h3 id="slide-23--thank-you-for-your-attention--qa" tabindex="-1">Slide 23 · Thank You for Your Attention &amp; Q&amp;A <a class="header-anchor" href="#slide-23--thank-you-for-your-attention--qa" aria-label="Permalink to &quot;Slide 23 · Thank You for Your Attention &amp; Q&amp;A&quot;">​</a></h3><p><img${ssrRenderAttr("src", _imports_22)} alt="Slide 23"></p><ul><li>📥 <strong>Download Slides (.pptx)</strong>: <a href="https://reurl.cc/5XjzlG" target="_blank" rel="noreferrer">https://reurl.cc/5XjzlG</a></li></ul><blockquote><p>🎙️ <strong>Speaker Notes</strong>: Thank you for listening. If you remember only one thing today, remember this: use more than one agent, and always check the result. Scan the QR code to download the slides, and now let&#39;s take your questions.</p></blockquote></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/keynote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
