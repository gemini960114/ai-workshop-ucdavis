<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'

const slides = [
  {
    num: 1,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'Bring the AI Agent to Your Laptop as Your Research Partner',
    subtitle: 'Multiple agents, cross-checked — then build your own Skill',
    img: '/slides/slide-01.png',
    notes: "Hello everyone, and welcome. Today's idea is simple: bring an AI agent onto your own laptop and let it be your research partner. One habit goes with it: use more than one agent and let them cross-check each other. At the end, you will turn what works into a Skill of your own. The link at the top opens the course website, and the QR code lets you download the slides."
  },
  {
    num: 2,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'About the Speaker',
    subtitle: 'Researcher, National Center for High-performance Computing (NCHC)',
    img: '/slides/slide-02.png',
    notes: "A quick introduction. I am a researcher at NCHC, Taiwan's national supercomputing center. My background is bioinformatics, and my work covers high-performance computing, computational neuroscience, and generative AI. I study the fruit fly brain and build 3D tools to reconstruct and analyze its neurons. What I share today is meant to be practical for researchers."
  },
  {
    num: 3,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'About NCHC',
    subtitle: 'From Enabler to Enhancer — Supercomputers are the spark of R&D',
    img: '/slides/slide-03.png',
    notes: "NCHC was founded in 1991. We run Taiwan's shared computing platform and the academic research network. Our core technologies are high-performance computing, cloud, cybersecurity, AI, and data analysis. Our slogan is 'From Enabler to Enhancer': supercomputers are the spark of research, and they help teams across Taiwan get their best results."
  },
  {
    num: 4,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'NCHC HPC Cluster Systems',
    subtitle: 'Taiwania 2 · Taiwania 3 · Forerunner 1 · Nano 5',
    img: '/slides/slide-04.png',
    notes: "These are our supercomputer clusters. Taiwania 2 started in 2018 and ranked number 20 on the Top500 list. Taiwania 3 came in 2020, Forerunner 1 in 2023, and Nano 5 in 2025. Each system has a different role, and Nano 5 reaches about 13 PFLOPS. You do not need to remember the numbers. The point is that we have real, large machines for researchers."
  },
  {
    num: 5,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'NCHC Nano4 System (Jingchuang 26)',
    subtitle: 'Ranked #29 on TOP500 · 1,760 H200 GPUs · 144 GB200 GPUs',
    img: '/slides/slide-05.png',
    notes: "Here is Nano4. It ranked number 29 on the TOP500 list. It has 1,760 H200 GPUs and 144 GB200 GPUs. Here is why this matters today: this much computing power can now be controlled by an AI agent, using plain language."
  },
  {
    num: 6,
    part: 'Part 1 · Opening & NCHC Supercomputers',
    title: 'In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers?',
    subtitle: 'Just one sentence: 15 brain MRI scans analyzed on Nano4 (FreeSurfer + Slurm)',
    img: '/slides/slide-06.png',
    videoLocal: '/videos/nano4-mri-demo.mp4',
    notes: "Let's watch a short demo. A researcher gives one sentence to an AI agent. The agent then analyzes 15 brain MRI scans on Nano4. This is for epilepsy pre-surgical evaluation, and it uses FreeSurfer and the Slurm scheduler on the supercomputer. The researcher does not write the commands by hand. Please watch how much the agent does for them."
  },
  {
    num: 7,
    part: 'Part 2 · What Is Generative AI?',
    title: 'What Is Generative AI?',
    subtitle: 'Understanding the engine underneath AI Agents',
    img: '/slides/slide-07.png',
    notes: "Before we talk about agents, let's understand the engine underneath: generative AI. In one sentence, it is a very powerful word-chain game. Let me show you how it works."
  },
  {
    num: 8,
    part: 'Part 2 · What Is Generative AI?',
    title: 'Word Chain (Next Token Prediction)',
    subtitle: 'Encoding words into token numbers and decoding the predicted next token',
    img: '/slides/slide-08.png',
    notes: "Computers cannot read words, only numbers. So every word is turned into a number using a dictionary. These pieces are called tokens. GPT-3's dictionary has about 50 thousand tokens, GPT-4 about 100 thousand, and GPT-5 about 150 thousand. In this example, 'Taiwan's best' becomes three numbers. The model predicts the next number, 14221, and we decode it back into a word: 'food'."
  },
  {
    num: 9,
    part: 'Part 2 · What Is Generative AI?',
    title: 'Generative AI Creates Content by Word Chain!',
    subtitle: 'Generating one token at a time until END',
    img: '/slides/slide-09.png',
    notes: "So generative AI answers by playing word chain. We ask, 'What is Taiwan's tallest mountain?' The model predicts 'Yu'. We add 'Yu' to the question and ask again. It predicts 'shan'. We add it again, and now it predicts END, so it stops. It writes one small piece at a time."
  },
  {
    num: 10,
    part: 'Part 2 · What Is Generative AI?',
    title: 'Why Are the Answers Different Every Time?',
    subtitle: 'Scoring thousands of candidate tokens and rolling the dice',
    img: '/slides/slide-10.png',
    notes: "At each step, the model does not have just one choice. It scores thousands of possible next words. The bars show how likely each word is. Then the model rolls a dice among the likely ones. So the answer could start with 'Yu', 'It', or 'The'."
  },
  {
    num: 11,
    part: 'Part 2 · What Is Generative AI?',
    title: 'This Is Why Answers Differ Every Time — and May Include Hallucinations',
    subtitle: 'Token probability distribution across 150K choices',
    img: '/slides/slide-11.png',
    notes: "This is why the answer is different every time. It is also why mistakes can appear. We call them hallucinations. One unlucky word can be chosen, and every later word follows it. The lesson is simple: AI sounds confident, but we must check its work."
  },
  {
    num: 12,
    part: 'Part 2 · What Is Generative AI?',
    title: 'Artificial Analysis Intelligence Index (2026-11-12)',
    subtitle: 'Top models come from multiple providers — no single winner for every job',
    img: '/slides/slide-12.png',
    notes: "How do we know which AI is good? This chart ranks many models with one independent index, dated 2026-11-12. Notice that the top scores come from a few different companies, and they are close to each other. Open-weight models, whose weights anyone can download, sit a bit lower. There is no single winner for every job. Keep this in mind for later: use more than one model."
  },
  {
    num: 13,
    part: 'Part 3 · What Is Agentic AI?',
    title: 'So What Is Agentic AI?',
    subtitle: 'From a chatbot that only talks to an agent that acts',
    img: '/slides/slide-13.png',
    notes: "Now the second big idea: Agentic AI. A chatbot only talks. An agent can also act: it can read files, run programs, and check the results. Let's see how it is built."
  },
  {
    num: 14,
    part: 'Part 3 · What Is Agentic AI?',
    title: 'What Is Agentic? Brain + Tools = AI Agent',
    subtitle: 'ChatGPT (Brain) + Codex (Tools) = AI Agent, just like Tony Stark + Iron Man Suit',
    img: '/slides/slide-14.png',
    notes: "Think of Iron Man. Tony Stark is the brain. The Iron Man suit gives him tools and power. Together they make a hero. In AI, ChatGPT is the brain, and Codex is the suit. The suit lets the brain open files, run code, and fix its own mistakes. The agent works in a loop: think, use a tool, look at the result, and think again. Brain plus tools makes an agent."
  },
  {
    num: 15,
    part: 'Part 3 · What Is Agentic AI?',
    title: "Three Agentic Tools: Don't Trust Just One",
    subtitle: 'ChatGPT + Codex · Gemini + Antigravity · Claude + Claude Code',
    img: '/slides/slide-15.png',
    notes: "There are three big families. Each one pairs a brain with a suit, just like the superheroes on this slide. ChatGPT with Codex is Iron Man. Gemini with Antigravity is Captain America. Claude with Claude Code is Doctor Strange. Each hero has strengths and blind spots. So here is our rule for this course: do not trust just one hero. Let one agent do the work and let another agent check it."
  },
  {
    num: 16,
    part: 'Part 4 · Cloud vs. Local on Your Laptop',
    title: 'How Can These AI Agents Do Research with You?',
    subtitle: 'Read papers · Analyze data · Write reports · Check results — Bring the AI Agent’s Brain into Your Laptop',
    img: '/slides/slide-16.png',
    notes: "Remember the demo at the start: one sentence, and an agent analyzed 15 brain MRI scans. That is research work. Researchers read papers, analyze data, write reports, and check the results. So the question is: how can these agents work with you on that, on your own laptop? Two ideas. First, bring the agent's brain to your laptop. Second, use more than one agent. Let me show you a simple example."
  },
  {
    num: 17,
    part: 'Part 4 · Cloud vs. Local on Your Laptop',
    title: 'Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI',
    subtitle: 'Web chat vs. local IDE, checked by a second AI',
    img: '/slides/slide-17.png',
    youtubeId: 'sLCBtmZAz2c',
    unitLink: './00_cloud_vs_local',
    unitLabel: 'Open Unit 00 Guide',
    notes: "This is Unit 00: one paper, two ways to use AI. Way one is ChatGPT on the web. Way two is an AI editor, an IDE, on my own laptop. I ask the same three questions in both. Then a second agent, Gemini, checks the report. Please watch the video to see how the two ways compare, and how the second agent catches problems. This is the habit we want: one agent works, another agent checks. Unit 00 showed the habit. Next, let me show you the full learning path."
  },
  {
    num: 18,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧭 Your Learning Path (From Tool to Skill · Units 01–04)',
    subtitle: '1. TOOL (Unit 01) → 2. SKILL (Unit 02) → 3. MORE SKILLS (Unit 03) → 4. BUILD (Unit 04)',
    img: '/slides/slide-18.png',
    notes: "Here is the path for the rest of the course. We start with the tool: Unit 01, an agent you talk to in plain language. Then skills. In Unit 02 we add one skill and see the result get better. In Unit 03 we use four skills for office documents. In Unit 04 we build a skill from a workflow that works, and in the bonus part two agents check each other. All along, the habit from Unit 00 stays the same: one agent works, another agent checks. Everything is on the course website, with a written guide and a video for each unit."
  },
  {
    num: 19,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧰 Unit 01 | Getting Started with Antigravity',
    subtitle: 'Step 1 of 4 · The Tool',
    img: '/slides/slide-19.png',
    youtubeId: '72oCyg8MDLg',
    unitLink: './01_antigravity',
    unitLabel: 'Open Unit 01 Guide',
    notes: "Unit 01 is the tool. We install Antigravity, an editor with a built-in AI agent. You chat in plain language, with no coding needed. By the end, you have built a web page and a small game. The video shows every step."
  },
  {
    num: 20,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🎨 Unit 02 | Frontend Design',
    subtitle: 'Step 2 of 4 · Skills',
    img: '/slides/slide-20.png',
    youtubeId: '86bsVsh2tXw',
    unitLink: './02_frontend_design',
    unitLabel: 'Open Unit 02 Guide',
    notes: "Unit 02 is about skills. A skill is a set of instructions that teaches an agent how to do a job well. We install Anthropic's frontend-design skill and ask for the same web page again. Compare it with Unit 01: same request, but now the page looks designed instead of looking like a template."
  },
  {
    num: 21,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '📄 Unit 03 | Office Document Processing',
    subtitle: 'Step 3 of 4 · More Skills (docx, pdf, pptx, xlsx)',
    img: '/slides/slide-21.png',
    youtubeId: 'sOIg3osiPU4',
    unitLink: './03_office_skills',
    unitLabel: 'Open Unit 03 Guide',
    notes: "Unit 03 is office documents. We use four official skills: docx, pdf, pptx, and xlsx. We start with one CSV file and end with an Excel workbook, slides, a Word report, and a PDF handout. This can save you hours on routine paperwork."
  },
  {
    num: 22,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧾 Unit 04 | Voucher OCR to Excel',
    subtitle: 'Step 4 of 4 · Build Your Own Skill (voucher-to-excel)',
    img: '/slides/slide-22.png',
    youtubeId: 'Kq0HLK2kIQg',
    unitLink: './04_voucher_ocr',
    unitLabel: 'Open Unit 04 Guide',
    notes: "Unit 04 is voucher OCR to Excel. You give the agent a scanned voucher. It reads the voucher and fills in an Excel sheet. When it works, we save the steps as our own skill, so next time one sentence does the whole job. There is also a bonus part with two agents: a second agent double-checks the first. That is our cross-check habit again. Now you can use the same pattern to build skills for your own research."
  },
  {
    num: 23,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: 'Thank You for Your Attention & Q&A',
    subtitle: 'National Center for High-performance Computing (NCHC), Taiwan',
    img: '/slides/slide-23.png',
    notes: "Thank you for listening. If you remember only one thing today, remember this: use more than one agent, and always check the result. Scan the QR code to download the slides, and now let's take your questions."
  }
]

const currentIdx = ref(0)
const showVideo = ref(false)
const current = computed(() => slides[currentIdx.value] || slides[0])

function prevSlide() {
  if (currentIdx.value > 0) {
    currentIdx.value--
    showVideo.value = false
  }
}

function nextSlide() {
  if (currentIdx.value < slides.length - 1) {
    currentIdx.value++
    showVideo.value = false
  }
}

function goToSlide(idx) {
  currentIdx.value = idx
  showVideo.value = false
}

function onKeydown(e) {
  if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="deck-player">
    <div class="deck-header">
      <span class="deck-part">{{ current.part }}</span>
      <span class="deck-counter">Slide {{ current.num }} / {{ slides.length }}</span>
    </div>

    <div class="deck-stage">
      <video
        v-if="showVideo && current.videoLocal"
        class="deck-video"
        :src="withBase(current.videoLocal)"
        :poster="withBase(current.img)"
        controls
        autoplay
      ></video>
      <iframe
        v-else-if="showVideo && current.youtubeId"
        class="deck-video"
        :src="`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img
        v-else
        class="deck-img"
        :src="withBase(current.img)"
        :alt="`Slide ${current.num}: ${current.title}`"
      />
    </div>

    <div class="deck-controls">
      <button class="deck-btn" :disabled="currentIdx === 0" @click="prevSlide">← Prev</button>

      <select class="deck-select" :value="currentIdx" @change="goToSlide(Number($event.target.value))">
        <option v-for="(s, idx) in slides" :key="s.num" :value="idx">
          Slide {{ s.num }}: {{ s.title }}
        </option>
      </select>

      <button
        v-if="current.videoLocal || current.youtubeId"
        class="deck-btn deck-btn-video"
        @click="showVideo = !showVideo"
      >
        {{ showVideo ? '🖼️ Show Slide' : '▶ Watch Demo Video' }}
      </button>

      <a v-if="current.unitLink" class="deck-btn deck-btn-link" :href="current.unitLink">
        {{ current.unitLabel }} →
      </a>

      <button class="deck-btn" :disabled="currentIdx === slides.length - 1" @click="nextSlide">Next →</button>
    </div>

    <div class="deck-notes">
      <div class="deck-notes-label">🎙️ Speaker Notes — Slide {{ current.num }}</div>
      <p class="deck-notes-text">{{ current.notes }}</p>
    </div>
  </div>
</template>

<style scoped>
.deck-player {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  padding: 16px;
  margin: 20px 0 36px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}
.deck-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.deck-part {
  color: var(--vp-c-brand-1);
}
.deck-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #111827;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.deck-img,
.deck-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 0;
}
.deck-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.deck-btn {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none !important;
  transition: all 0.15s ease;
}
.deck-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.deck-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.deck-btn-video {
  background: #15803d;
  color: #ffffff !important;
  border-color: #15803d;
}
.deck-btn-video:hover {
  background: #166534;
  color: #ffffff !important;
}
.deck-btn-link {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1) !important;
  border-color: var(--vp-c-brand-1);
}
.deck-select {
  flex: 1;
  min-width: 200px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
}
.deck-notes {
  margin-top: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border-left: 4px solid #15803d;
}
.deck-notes-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #15803d;
  margin-bottom: 4px;
}
.deck-notes-text {
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}
</style>
