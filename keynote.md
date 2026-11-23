# Keynote Presentation: Bring the AI Agent to Your Laptop as Your Research Partner

**Multiple agents, cross-checked — then build your own Skill.**

> 📥 **Download PowerPoint Slides (.pptx)**: [Bring-the-AI-Agent-to-your-laptop-as-your-research-partner.pptx](https://github.com/gemini960114/ai-workshop-ucdavis/raw/main/PPTX/Bring-the-AI-Agent-to-your-laptop-as-your-research-partner.pptx) (or via [Google Drive](https://reurl.cc/5XjzlG))
> 💡 Use the **interactive 21-slide player** below (supports **← / → arrow keys**) or scroll down to read the full 5-part web version with embedded demo videos, speaker notes, and demo prompts.

<!-- DECK_PLAYER -->

---

## Part 1: Opening & NCHC Supercomputers in the Age of AI Agents (Slides 1–4)

### Slide 1 · Bring the AI Agent to Your Laptop as Your Research Partner

![Slide 1](docs/public/slides/slide-01.png)

> 🎙️ **Speaker Notes**:
> Hello everyone, and welcome. Today's idea is simple: bring an AI agent onto your own laptop and let it be your research partner. One habit goes with it: use more than one agent and let them cross-check each other. At the end, you will turn what works into a Skill of your own. The link at the top opens the course website, and the QR code lets you download the slides.

---

### Slide 2 · About the Speaker

![Slide 2](docs/public/slides/slide-02.png)

- **Researcher, National Center for High-performance Computing (NCHC)**
- Background in bioinformatics, with expertise in high-performance computing (HPC), computational neuroscience, and generative AI.
- Specializes in *Drosophila* brain connectomics, developing 3D neuroimaging reconstruction and analysis techniques; results published in *Current Biology*, *Cell Reports*, and other journals.

> 🎙️ **Speaker Notes**:
> A quick introduction. I am a researcher at NCHC, Taiwan's national supercomputing center. My background is bioinformatics, and my work covers high-performance computing, computational neuroscience, and generative AI. I study the fruit fly brain and build 3D tools to reconstruct and analyze its neurons. What I share today is meant to be practical for researchers.

---

### Slide 3 · About NCHC

![Slide 3](docs/public/slides/slide-03.png)

> 🎙️ **Speaker Notes**:
> NCHC was founded in 1991. We run Taiwan's shared computing platform and the academic research network. Our core technologies are high-performance computing, cloud, cybersecurity, AI, and data analysis. Our slogan is 'From Enabler to Enhancer': supercomputers are the spark of research, and they help teams across Taiwan get their best results.

---

### Slide 4 · In the Age of AI Agents, What Can Supercomputers Do for Physicians and Researchers?

![Slide 4](docs/public/slides/slide-04.png)

#### 🎬 Demo Video: 1 Sentence, 15 Brain MRI Scans Analyzed on Nano4 (Epilepsy Pre-Surgical Evaluation · FreeSurfer · Slurm)

<!-- NANO4_VIDEO -->

> 🎙️ **Speaker Notes**:
> NCHC provides supercomputers to physicians, scientists, and researchers. Here is an example of what they can do with an AI agent. A researcher gives just one sentence, and the agent analyzes 15 brain MRI scans on our Nano4 supercomputer. This is for epilepsy pre-surgical evaluation, using FreeSurfer and the Slurm scheduler. The researcher does not write the commands by hand. Please watch how much the agent does for them.

---

## Part 2: Part 1 of the Agent — Inside the Brain: Generative AI, Word Chain & Hallucinations (Slides 5–10)

### Slide 5 · What Is Generative AI? (`Part 1: Inside the Agent's Brain — and why it can make mistakes`)

![Slide 5](docs/public/slides/slide-05.png)

> 🎙️ **Speaker Notes**:
> You just saw an AI agent analyze 15 brain MRI scans from one sentence. How does that actually work? An AI agent has two parts: a brain that thinks, and tools that act. First, let's look inside the brain—generative AI. In one sentence, it is a very powerful word-chain game. Let me show you how it works, and why it can sometimes make mistakes.

---

### Slide 6 · Word Chain (Next Token Prediction)

![Slide 6](docs/public/slides/slide-06.png)

> 🎙️ **Speaker Notes**:
> Computers cannot read words, only numbers. So every word is turned into a number using a dictionary. These pieces are called tokens. GPT-3's dictionary has about 50 thousand tokens, GPT-4 about 100 thousand, and GPT-5 about 150 thousand. In this example, 'Taiwan's best' becomes three numbers. The model predicts the next number, 14221, and we decode it back into a word: 'food'.

---

### Slide 7 · Generative AI Creates Content by Word Chain!

![Slide 7](docs/public/slides/slide-07.png)

> 🎙️ **Speaker Notes**:
> So generative AI answers by playing word chain. We ask, 'What is Taiwan's tallest mountain?' The model predicts 'Yu'. We add 'Yu' to the question and ask again. It predicts 'shan'. We add it again, and now it predicts END, so it stops. It writes one small piece at a time.

---

### Slide 8 · Why Are the Answers Different Every Time?

![Slide 8](docs/public/slides/slide-08.png)

> 🎙️ **Speaker Notes**:
> At each step, the model does not have just one choice. It scores thousands of possible next words. The bars show how likely each word is. Then the model rolls a dice among the likely ones. So the answer could start with 'Yu', 'It', or 'The'.

---

### Slide 9 · Why Answers Differ Every Time and May Include Hallucinations

![Slide 9](docs/public/slides/slide-09.png)

> 🎙️ **Speaker Notes**:
> This is why the answer is different every time. It is also why mistakes can appear. We call them hallucinations. One unlucky word can be chosen, and every later word follows it. The lesson is simple: AI sounds confident, but we must check its work.

---

### Slide 10 · Artificial Analysis Intelligence Index (2026-11-12)

![Slide 10](docs/public/slides/slide-10.png)

> 🎙️ **Speaker Notes**:
> How do we know which AI is good? This chart ranks many models with one independent index, dated 2026-11-12. Notice that the top scores come from a few different companies, and they are close to each other. Open-weight models, whose weights anyone can download, sit a bit lower. There is no single winner for every job. Keep this in mind for later: use more than one model.

---

## Part 3: Part 2 of the Agent — Giving the Brain a Suit of Tools to Act (Slides 11–13)

### Slide 11 · So What Is Agentic AI? (`Part 2: Giving the Brain a Suit of Tools to Act`)

![Slide 11](docs/public/slides/slide-11.png)

> 🎙️ **Speaker Notes**:
> Now we know how the brain works: it plays word chain, and different models have different strengths. But a brain alone—like a web chatbot—only talks. How did our supercomputer demo actually open files and run programs? That brings us to Part 2: Agentic AI—giving the brain a suit of tools so it can act: reading files, running programs, and checking results. Let's see how it is built.

---

### Slide 12 · What Is Agentic? Brain + Tools = AI Agent

![Slide 12](docs/public/slides/slide-12.png)

> 🎙️ **Speaker Notes**:
> Think of Iron Man. Tony Stark is the brain. The Iron Man suit gives him tools and power. Together they make a hero. In AI, ChatGPT is the brain, and Codex is the suit. The suit lets the brain open files, run code, and fix its own mistakes. The agent works in a loop: think, use a tool, look at the result, and think again. Brain plus tools makes an agent.

---

### Slide 13 · Three Agentic Tools: Don't Trust Just One

![Slide 13](docs/public/slides/slide-13.png)

| Brain (LLM) | Suit (Agentic Tool) | Superhero Analogy |
| --- | --- | --- |
| **ChatGPT** | **Codex** | 🦾 Iron Man |
| **Gemini** | **Antigravity** | 🛡️ Captain America |
| **Claude** | **Claude Code** | 🔮 Doctor Strange |

> 🎙️ **Speaker Notes**:
> There are three big families. Each one pairs a brain with a suit, just like the superheroes on this slide. ChatGPT with Codex is Iron Man. Gemini with Antigravity is Captain America. Claude with Claude Code is Doctor Strange. Each hero has strengths and blind spots. So here is our rule for this course: do not trust just one hero. In our hands-on units today, we will mainly use Antigravity and Claude Code on your laptop—letting one agent do the work and another agent check it.

---

## Part 4: Bring the Agent's Brain into Your Laptop — Unit 00 (Slides 14–15)

### Slide 14 · How Can These AI Agents Do Research with You?

![Slide 14](docs/public/slides/slide-14.png)

> 🎙️ **Speaker Notes**:
> At the start, we saw an agent run brain MRI analysis on a supercomputer. What about your everyday work on your own laptop? Researchers spend hours reading papers, turning data into Excel sheets and slides, processing routine documents, and checking results. So how can these agents work with you on your laptop? Two ideas. First, bring the agent's brain to your laptop. Second, use more than one agent and turn what works into reusable Skills. Let's start with a simple example in Unit 00.

---

### Slide 15 · Unit 00 | Cloud vs. Local: One Paper, Two Ways to Use AI

![Slide 15](docs/public/slides/slide-15.png)

- 📖 **Written Guide**: [Open Unit 00: Cloud vs. Local](00-ai-workshop-openai/)
- 🎬 **YouTube Video**: <https://www.youtube.com/watch?v=sLCBtmZAz2c>

<iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/sLCBtmZAz2c" title="Unit 00 | Cloud vs. Local" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> 🎙️ **Speaker Notes**:
> This is Unit 00: one paper, two ways to use AI. Way one is ChatGPT on the web. Way two is an AI editor, an IDE, on my own laptop. I ask the same three questions in both. Then a second agent, Gemini, checks the report. Please watch the video to see how the two ways compare, and how the second agent catches problems. This is the habit we want: one agent works, another agent checks. Unit 00 showed the habit. Next, let me show you the full learning path.

#### 📋 Unit 00 Demo Prompts

```text
# ChatGPT Web and Local Claude Code
What does "wet-lab science" in this paper's title mean? Why would AI need to handle lab work?

It says 100 lab questions were used to test the AI. What kinds of questions are they? Multiple choice or image-based? Please put it in a simple table.

I'm a graduate student who just joined a biology lab. How can I safely use AI to check my experimental data without being misled?

Please compile the questions and answers above into a Word report named report.docx
```

```text
# Switch to Gemini for Cross-Checking
report.docx is the AI agent's write-up of the questions and answers based on measuring-how-ai-agents-handle-wet-lab-science.pdf. Please check whether it is correct.

Revise it according to your suggestions and save it under a new file name
```

---

## Part 5: From Tool to Skill — Your Learning Path & Units 01–04 (Slides 16–21)

### Slide 16 · 🧭 Your Learning Path (`From Tool to Skill · Units 01–04`)

![Slide 16](docs/public/slides/slide-16.png)

1. **[Unit 01 · Getting Started with Antigravity](01-ai-workshop-agy/)** (`TOOL`) — The tool: an AI agent you talk to in plain language.
2. **[Unit 02 · Frontend Design](02-ai-workshop-frontend-design/)** (`SKILL`) — Use a skill: same request, a better-designed result.
3. **[Unit 03 · Office Document Processing](03-ai-workshop-office-skills/)** (`MORE SKILLS`) — More skills: one CSV becomes Excel, slides, Word, and PDF.
4. **[Unit 04 · Voucher OCR to Excel](04-ai-workshop-voucher-ocr/)** (`BUILD`) — Turn a working workflow into a skill. Bonus: two agents check each other.

> 🎙️ **Speaker Notes**:
> Here is the path for the rest of the course. We start with the tool: Unit 01, an agent you talk to in plain language. Then skills. In Unit 02 we add one skill and see the result get better. In Unit 03 we use four skills for office documents. In Unit 04 we build a skill from a workflow that works, and in the bonus part two agents check each other. All along, the habit from Unit 00 stays the same: one agent works, another agent checks. Everything is on the course website, with a written guide and a video for each unit.

---

### Slide 17 · 🧰 Unit 01 | Getting Started with Antigravity (`Step 1 of 4 · The Tool`)

![Slide 17](docs/public/slides/slide-17.png)

- 📖 **Written Guide**: [Open Unit 01: Getting Started with Antigravity](01-ai-workshop-agy/)
- 🎬 **YouTube Video**: <https://youtu.be/72oCyg8MDLg>

<iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/72oCyg8MDLg" title="Unit 01 | Getting Started with Antigravity" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> 🎙️ **Speaker Notes**:
> Unit 01 is the tool. We install Antigravity, an editor with a built-in AI agent. You chat in plain language, with no coding needed. By the end, you have built a web page and a small game. The video shows every step.

#### 📋 Unit 01 Demo Prompts

```text
# Install Essential Tools
Please help me install Git, uv, and Node.js. Skip any that are already installed, tell me the reason if any fail, and finally list the version of each tool.

# First Web Page
Create a hello.html in this folder that displays "Hello Antigravity" and today's date in large text, then open it in the browser for me.

# Memory Match Game
In this folder, help me build a "Memory Match" card game using the simplest Vite + JS setup: 16 cards arranged randomly; flip two matching cards to clear them, and show move count and timer at the top. When all cards are cleared, display "Congratulations!" and a "Play Again" button. Once finished, start the web server directly and give me the URL so I can click and play.
```

---

### Slide 18 · 🎨 Unit 02 | Frontend Design (`Step 2 of 4 · Skills`)

![Slide 18](docs/public/slides/slide-18.png)

- 📖 **Written Guide**: [Open Unit 02: Frontend Design](02-ai-workshop-frontend-design/)
- 🎬 **YouTube Video**: <https://youtu.be/86bsVsh2tXw>

<iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/86bsVsh2tXw" title="Unit 02 | Frontend Design" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> 🎙️ **Speaker Notes**:
> Unit 02 is about skills. A skill is a set of instructions that teaches an agent how to do a job well. We install Anthropic's frontend-design skill and ask for the same web page again. Compare it with Unit 01: same request, but now the page looks designed instead of looking like a template.

#### 📋 Unit 02 Demo Prompts

```text
# Install the frontend-design skill (in terminal)
npx skills add anthropics/skills@frontend-design -a antigravity -a claude-code --copy -y

# Example 1: Brand Product Landing Page
In the directory output/case01/, build a single-page official website (HTML + CSS) for a Taiwanese artisanal tea brand called "Shanlan Tea Research Institute", saving the main page as output/case01/index.html. The target audience is 30-50 year-old consumers who value origin and craftsmanship. Required sections: Brand Story, Introduction to Three Teas, Tea Origin Map, and Order Button. Do not use a generic SaaS template style—please propose 2 aesthetic directions for me to choose from first.

# Verify Skill Usage
Which Skills did you use in this case?
```

---

### Slide 19 · 📄 Unit 03 | Office Document Processing (`Step 3 of 4 · More Skills`)

![Slide 19](docs/public/slides/slide-19.png)

- 📖 **Written Guide**: [Open Unit 03: Office Document Processing](03-ai-workshop-office-skills/)
- 🎬 **YouTube Video**: <https://youtu.be/sOIg3osiPU4>

<iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/sOIg3osiPU4" title="Unit 03 | Office Document Processing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> 🎙️ **Speaker Notes**:
> Unit 03 is office documents. We use four official skills: docx, pdf, pptx, and xlsx. We start with one CSV file and end with an Excel workbook, slides, a Word report, and a PDF handout. This can save you hours on routine paperwork.

#### 📋 Unit 03 Demo Prompts

```text
# Example 1 (xlsx): CSV -> Excel
Convert example/臺灣採購經理人指數(pmi及nmi).csv into an Excel workbook saved as output/pmi.xlsx: Put the raw data on the first worksheet, calculate the annual average PMI and NMI on the second worksheet, and add a line chart showing the multi-year trend.

# Example 2 (pptx): Excel -> Animated Presentation
Based on output/pmi.xlsx, create a 5-slide presentation saved as output/pmi.pptx explaining the meaning of Taiwan's Purchasing Managers' Index (PMI/NMI), recent trends, and key observations, including charts. All text must be editable in PowerPoint.

# Example 3 (docx) & Example 4 (pdf): Excel -> Word Report -> PDF Handout
Based on output/pmi.xlsx, write a Word analysis report saved as output/pmi-report.docx, then convert it to PDF saved as output/pmi-report.pdf with page numbers and a light gray "Course Handout" watermark.
```

---

### Slide 20 · 🧾 Unit 04 | Voucher OCR to Excel (`Step 4 of 4 · Build Your Own Skill`)

![Slide 20](docs/public/slides/slide-20.png)

- 📖 **Written Guide**: [Open Unit 04: Voucher OCR to Excel](04-ai-workshop-voucher-ocr/)
- 🎬 **YouTube Video**: <https://youtu.be/Kq0HLK2kIQg>

<iframe style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:0;" src="https://www.youtube.com/embed/Kq0HLK2kIQg" title="Unit 04 | Voucher OCR to Excel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> 🎙️ **Speaker Notes**:
> Unit 04 is voucher OCR to Excel. You give the agent a scanned voucher. It reads the voucher and fills in an Excel sheet. When it works, we save the steps as our own skill, so next time one sentence does the whole job. There is also a bonus part with two agents: a second agent double-checks the first. That is our cross-check habit again. Now you can use the same pattern to build skills for your own research.

#### 📋 Unit 04 Demo Prompts

```text
# Step 1: Let AI Understand the Task First
First copy record.example.xlsx to record.xlsx. There are five invoice PDFs in the example_deid folder. Please take a look at what fields need to be filled in the Excel file and check whether they can be found in the PDFs.

# Step 5: Package into a Reusable Skill
Please package the procedure we confirmed today into a skill, including where to read each field from the PDF, the yellow and blue highlighting rules, and how to cross-check the amounts.

# Step 6: Reuse in One Sentence
There are five new invoice PDFs in example_deid, please help me enter these records into Excel

# Bonus: Second Agent Audits the First
Please cross-check the PDFs in example_deid/ against record.xlsx and verify whether everything is accurate.
```

---

### Slide 21 · Thank You for Your Attention & Q&A

![Slide 21](docs/public/slides/slide-21.png)

- 📥 **Download Slides (.pptx)**: [Bring-the-AI-Agent-to-your-laptop-as-your-research-partner.pptx](https://github.com/gemini960114/ai-workshop-ucdavis/raw/main/PPTX/Bring-the-AI-Agent-to-your-laptop-as-your-research-partner.pptx) (or via [Google Drive](https://reurl.cc/5XjzlG))

> 🎙️ **Speaker Notes**:
> Thank you for listening. If you remember only one thing today, remember this: use more than one agent, and always check the result. Scan the QR code to download the slides, and now let's take your questions.
