<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'

const slides = [
  {
    num: 1,
    part: 'Part 1 · Opening & NCHC Supercomputer Demo',
    title: 'Bring the AI Agent to Your Laptop as Your Research Partner',
    subtitle: 'Multiple agents, cross-checked — then build your own Skill',
    img: '/slides/slide-01.png',
    notes: "Hello everyone, and welcome. Today's idea is simple: bring an AI agent onto your own laptop and let it be your research partner. One habit goes with it: use more than one agent and let them cross-check each other. At the end, you will turn what works into a Skill of your own. The link at the top opens the course website, and the QR code lets you download the slides."
  },
  {
    num: 2,
    part: 'Part 1 · Opening & NCHC Supercomputer Demo',
    title: 'About the Speaker',
    subtitle: 'Researcher, National Center for High-performance Computing (NCHC)',
    img: '/slides/slide-02.png',
    notes: "A quick introduction. I am a researcher at NCHC, Taiwan's national supercomputing center. My background is bioinformatics, and my work covers high-performance computing, computational neuroscience, and generative AI. I study the fruit fly brain and build 3D tools to reconstruct and analyze its neurons. What I share today is meant to be practical for researchers."
  },
  {
    num: 3,
    part: 'Part 1 · Opening & NCHC Supercomputer Demo',
    title: 'About NCHC',
    subtitle: 'From Enabler to Enhancer — Supercomputers are the spark of R&D',
    img: '/slides/slide-03.png',
    notes: "NCHC was founded in 1991. We run Taiwan's shared computing platform and the academic research network. Our core technologies are high-performance computing, cloud, cybersecurity, AI, and data analysis. Our slogan is 'From Enabler to Enhancer': supercomputers are the spark of research, and they help teams across Taiwan get their best results."
  },
  {
    num: 4,
    part: 'Part 1 · Opening & NCHC Supercomputer Demo',
    title: 'In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers?',
    subtitle: 'Just one sentence: 15 brain MRI scans analyzed on Nano4 (FreeSurfer + Slurm)',
    img: '/slides/slide-04.png',
    videoLocal: '/videos/nano4-mri-demo.mp4',
    notes: "NCHC provides supercomputers to physicians, scientists, and researchers. Here is an example of what they can do with an AI agent. A researcher gives just one sentence, and the agent analyzes 15 brain MRI scans on our Nano4 supercomputer. This is for epilepsy pre-surgical evaluation, using FreeSurfer and the Slurm scheduler. The researcher does not write the commands by hand. Please watch how much the agent does for them."
  },
  {
    num: 5,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'What Is Generative AI?',
    subtitle: "Part 1: Inside the Agent's Brain — and why it can make mistakes",
    img: '/slides/slide-05.png',
    notes: "You just saw an AI agent analyze 15 brain MRI scans from one sentence. How does that actually work? An AI agent has two parts: a brain that thinks, and tools that act. First, let's look inside the brain—generative AI. In one sentence, it is a very powerful word-chain game. Let me show you how it works, and why it can sometimes make mistakes."
  },
  {
    num: 6,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'Word Chain (Next Token Prediction)',
    subtitle: 'Encoding words into token numbers and decoding the predicted next token',
    img: '/slides/slide-06.png',
    notes: "Computers cannot read words, only numbers. So every word is turned into a number using a dictionary. These pieces are called tokens. GPT-3's dictionary has about 50 thousand tokens, GPT-4 about 100 thousand, and GPT-5 about 150 thousand. In this example, 'Taiwan's best' becomes three numbers. The model predicts the next number, 14221, and we decode it back into a word: 'food'."
  },
  {
    num: 7,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'Generative AI Creates Content by Word Chain!',
    subtitle: 'Generating one token at a time until END',
    img: '/slides/slide-07.png',
    notes: "So generative AI answers by playing word chain. We ask, 'What is Taiwan's tallest mountain?' The model predicts 'Yu'. We add 'Yu' to the question and ask again. It predicts 'shan'. We add it again, and now it predicts END, so it stops. It writes one small piece at a time."
  },
  {
    num: 8,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'Why Are the Answers Different Every Time?',
    subtitle: 'Scoring thousands of candidate tokens and rolling the dice',
    img: '/slides/slide-08.png',
    notes: "At each step, the model does not have just one choice. It scores thousands of possible next words. The bars show how likely each word is. Then the model rolls a dice among the likely ones. So the answer could start with 'Yu', 'It', or 'The'."
  },
  {
    num: 9,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'This Is Why Answers Differ Every Time — and May Include Hallucinations',
    subtitle: 'Token probability distribution across 150K choices',
    img: '/slides/slide-09.png',
    notes: "This is why the answer is different every time. It is also why mistakes can appear. We call them hallucinations. One unlucky word can be chosen, and every later word follows it. The lesson is simple: AI sounds confident, but we must check its work."
  },
  {
    num: 10,
    part: 'Part 2 · Part 1 of the Agent: The Brain (Generative AI)',
    title: 'Artificial Analysis Intelligence Index (2026-11-12)',
    subtitle: 'Top models come from multiple providers — no single winner for every job',
    img: '/slides/slide-10.png',
    notes: "How do we know which AI is good? This chart ranks many models with one independent index, dated 2026-11-12. Notice that the top scores come from a few different companies, and they are close to each other. Open-weight models, whose weights anyone can download, sit a bit lower. There is no single winner for every job. Keep this in mind for later: use more than one model."
  },
  {
    num: 11,
    part: 'Part 3 · Part 2 of the Agent: Tools to Act (Agentic AI)',
    title: 'So What Is Agentic AI?',
    subtitle: 'Part 2: Giving the Brain a Suit of Tools to Act',
    img: '/slides/slide-11.png',
    notes: "Now we know how the brain works: it plays word chain, and different models have different strengths. But a brain alone—like a web chatbot—only talks. How did our supercomputer demo actually open files and run programs? That brings us to Part 2: Agentic AI—giving the brain a suit of tools so it can act: reading files, running programs, and checking results. Let's see how it is built."
  },
  {
    num: 12,
    part: 'Part 3 · Part 2 of the Agent: Tools to Act (Agentic AI)',
    title: 'What Is Agentic? Brain + Tools = AI Agent',
    subtitle: 'ChatGPT (Brain) + Codex (Tools) = AI Agent, just like Tony Stark + Iron Man Suit',
    img: '/slides/slide-12.png',
    notes: "Think of Iron Man. Tony Stark is the brain. The Iron Man suit gives him tools and power. Together they make a hero. In AI, ChatGPT is the brain, and Codex is the suit. The suit lets the brain open files, run code, and fix its own mistakes. The agent works in a loop: think, use a tool, look at the result, and think again. Brain plus tools makes an agent."
  },
  {
    num: 13,
    part: 'Part 3 · Part 2 of the Agent: Tools to Act (Agentic AI)',
    title: "Three Agentic Tools: Don't Trust Just One",
    subtitle: 'ChatGPT + Codex · Gemini + Antigravity · Claude + Claude Code',
    img: '/slides/slide-13.png',
    notes: "There are three big families. Each one pairs a brain with a suit, just like the superheroes on this slide. ChatGPT with Codex is Iron Man. Gemini with Antigravity is Captain America. Claude with Claude Code is Doctor Strange. Each hero has strengths and blind spots. So here is our rule for this course: do not trust just one hero. In our hands-on units today, we will mainly use Antigravity and Claude Code on your laptop—letting one agent do the work and another agent check it."
  },
  {
    num: 14,
    part: 'Part 4 · Bring the Agent into Your Laptop (Unit 00)',
    title: 'How Can These AI Agents Do Research with You?',
    subtitle: 'Read papers · Process data & documents · Cross-check results · Build your own Skills',
    img: '/slides/slide-14.png',
    notes: "At the start, we saw an agent run brain MRI analysis on a supercomputer. What about your everyday work on your own laptop? Researchers spend hours reading papers, turning data into Excel sheets and slides, processing routine documents, and checking results. So how can these agents work with you on your laptop? Two ideas. First, bring the agent's brain to your laptop. Second, use more than one agent and turn what works into reusable Skills. Let's start with a simple example in Unit 00."
  },
  {
    num: 15,
    part: 'Part 4 · Bring the Agent into Your Laptop (Unit 00)',
    title: 'Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI',
    subtitle: 'Web chat vs. local IDE, checked by a second AI',
    img: '/slides/slide-15.png',
    youtubeId: 'sLCBtmZAz2c',
    unitLink: './00_cloud_vs_local',
    unitLabel: 'Open Unit 00 Guide',
    notes: "This is Unit 00: one paper, two ways to use AI. Way one is ChatGPT on the web. Way two is an AI editor, an IDE, on my own laptop. I ask the same three questions in both. Then a second agent, Gemini, checks the report. Please watch the video to see how the two ways compare, and how the second agent catches problems. This is the habit we want: one agent works, another agent checks. Unit 00 showed the habit. Next, let me show you the full learning path.",
    prompts: `# ChatGPT Web and Local Claude Code
What does "wet-lab science" in this paper's title mean? Why would AI need to handle lab work?

It says 100 lab questions were used to test the AI. What kinds of questions are they? Multiple choice or image-based? Please put it in a simple table.

I'm a graduate student who just joined a biology lab. How can I safely use AI to check my experimental data without being misled?

Please compile the questions and answers above into a Word report named report.docx

# Switch to Gemini for Cross-Checking
report.docx is the AI agent's write-up of the questions and answers based on measuring-how-ai-agents-handle-wet-lab-science.pdf. Please check whether it is correct.

Revise it according to your suggestions and save it under a new file name`
  },
  {
    num: 16,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧭 Your Learning Path (From Tool to Skill · Units 01–04)',
    subtitle: '1. TOOL (Unit 01) → 2. SKILL (Unit 02) → 3. MORE SKILLS (Unit 03) → 4. BUILD (Unit 04)',
    img: '/slides/slide-16.png',
    notes: "Here is the path for the rest of the course. We start with the tool: Unit 01, an agent you talk to in plain language. Then skills. In Unit 02 we add one skill and see the result get better. In Unit 03 we use four skills for office documents. In Unit 04 we build a skill from a workflow that works, and in the bonus part two agents check each other. All along, the habit from Unit 00 stays the same: one agent works, another agent checks. Everything is on the course website, with a written guide and a video for each unit."
  },
  {
    num: 17,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧰 Unit 01 | Getting Started with Antigravity',
    subtitle: 'Step 1 of 4 · The Tool',
    img: '/slides/slide-17.png',
    youtubeId: '72oCyg8MDLg',
    unitLink: './01_antigravity',
    unitLabel: 'Open Unit 01 Guide',
    notes: "Unit 01 is the tool. We install Antigravity, an editor with a built-in AI agent. You chat in plain language, with no coding needed. By the end, you have built a web page and a small game. The video shows every step.",
    prompts: `# Install Essential Tools
Please help me install Git, uv, and Node.js. Skip any that are already installed, tell me the reason if any fail, and finally list the version of each tool.

# First Web Page
Create a hello.html in this folder that displays "Hello Antigravity" and today's date in large text, then open it in the browser for me.

# Memory Match Game
In this folder, help me build a "Memory Match" card game using the simplest Vite + JS setup: 16 cards arranged randomly; flip two matching cards to clear them, and show move count and timer at the top. When all cards are cleared, display "Congratulations!" and a "Play Again" button. Once finished, start the web server directly and give me the URL so I can click and play.`
  },
  {
    num: 18,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🎨 Unit 02 | Frontend Design',
    subtitle: 'Step 2 of 4 · Skills',
    img: '/slides/slide-18.png',
    youtubeId: '86bsVsh2tXw',
    unitLink: './02_frontend_design',
    unitLabel: 'Open Unit 02 Guide',
    notes: "Unit 02 is about skills. A skill is a set of instructions that teaches an agent how to do a job well. We install Anthropic's frontend-design skill and ask for the same web page again. Compare it with Unit 01: same request, but now the page looks designed instead of looking like a template.",
    prompts: `# Install the frontend-design skill (in terminal)
npx skills add anthropics/skills@frontend-design -a antigravity -a claude-code --copy -y

# Example 1: Brand Product Landing Page
In the directory output/case01/, build a single-page official website (HTML + CSS) for a Taiwanese artisanal tea brand called "Shanlan Tea Research Institute", saving the main page as output/case01/index.html. The target audience is 30-50 year-old consumers who value origin and craftsmanship. Required sections: Brand Story, Introduction to Three Teas, Tea Origin Map, and Order Button. Do not use a generic SaaS template style—please propose 2 aesthetic directions for me to choose from first.

# Verify Skill Usage
Which Skills did you use in this case?`
  },
  {
    num: 19,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '📄 Unit 03 | Office Document Processing',
    subtitle: 'Step 3 of 4 · More Skills (docx, pdf, pptx, xlsx)',
    img: '/slides/slide-19.png',
    youtubeId: 'sOIg3osiPU4',
    unitLink: './03_office_skills',
    unitLabel: 'Open Unit 03 Guide',
    notes: "Unit 03 is office documents. We use four official skills: docx, pdf, pptx, and xlsx. We start with one CSV file and end with an Excel workbook, slides, a Word report, and a PDF handout. This can save you hours on routine paperwork.",
    prompts: `# Example 1 (xlsx): CSV -> Excel
Convert example/臺灣採購經理人指數(pmi及nmi).csv into an Excel workbook saved as output/pmi.xlsx: Put the raw data on the first worksheet, calculate the annual average PMI and NMI on the second worksheet, and add a line chart showing the multi-year trend.

# Example 2 (pptx): Excel -> Animated Presentation
Based on output/pmi.xlsx, create a 5-slide presentation saved as output/pmi.pptx explaining the meaning of Taiwan's Purchasing Managers' Index (PMI/NMI), recent trends, and key observations, including charts. All text must be editable in PowerPoint.

# Example 3 (docx) & Example 4 (pdf): Excel -> Word Report -> PDF Handout
Based on output/pmi.xlsx, write a Word analysis report saved as output/pmi-report.docx, then convert it to PDF saved as output/pmi-report.pdf with page numbers and a light gray "Course Handout" watermark.`
  },
  {
    num: 20,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: '🧾 Unit 04 | Voucher OCR to Excel',
    subtitle: 'Step 4 of 4 · Build Your Own Skill (voucher-to-excel)',
    img: '/slides/slide-20.png',
    youtubeId: 'Kq0HLK2kIQg',
    unitLink: './04_voucher_ocr',
    unitLabel: 'Open Unit 04 Guide',
    notes: "Unit 04 is voucher OCR to Excel. You give the agent a scanned voucher. It reads the voucher and fills in an Excel sheet. When it works, we save the steps as our own skill, so next time one sentence does the whole job. There is also a bonus part with two agents: a second agent double-checks the first. That is our cross-check habit again. Now you can use the same pattern to build skills for your own research.",
    prompts: `# Step 1: Let AI Understand the Task First
First copy record.example.xlsx to record.xlsx. There are five invoice PDFs in the example_deid folder. Please take a look at what fields need to be filled in the Excel file and check whether they can be found in the PDFs.

# Step 5: Package into a Reusable Skill
Please package the procedure we confirmed today into a skill, including where to read each field from the PDF, the yellow and blue highlighting rules, and how to cross-check the amounts.

# Step 6: Reuse in One Sentence
There are five new invoice PDFs in example_deid, please help me enter these records into Excel

# Bonus: Second Agent Audits the First
Please cross-check the PDFs in example_deid/ against record.xlsx and verify whether everything is accurate.`
  },
  {
    num: 21,
    part: 'Part 5 · From Tool to Skill (Units 01–04)',
    title: 'Thank You for Your Attention & Q&A',
    subtitle: 'National Center for High-performance Computing (NCHC), Taiwan',
    img: '/slides/slide-21.png',
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
      <p class="deck-notes-text">{{ current.notes }}</p>
      <div v-if="current.prompts" class="deck-prompts">
        <div class="deck-prompts-label">📋 Demo Prompts</div>
        <pre class="deck-prompts-pre">{{ current.prompts }}</pre>
      </div>
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
.deck-prompts {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px dashed var(--vp-c-divider);
}
.deck-prompts-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
  margin-bottom: 6px;
}
.deck-prompts-pre {
  margin: 0;
  padding: 10px 12px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  font-size: 0.84rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
