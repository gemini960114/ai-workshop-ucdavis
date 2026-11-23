# Bring the AI Agent to Your Laptop as Your Research Partner

**Multiple agents, cross-checked — then build your own Skill.**

Bring an AI Agent onto your own laptop and project folders: chat in plain language to ask it to read papers, analyze data, process Office documents, extract scanned vouchers into Excel, and package your verified workflow into a reusable Skill that can be triggered with a single sentence.

> 📖 **Online Workshop Website**: <https://gemini960114.github.io/ai-workshop-ucdavis/>
> 🎤 **Keynote Presentation (Web Format, 23 Slides + Notes + Demo Videos)**: [Open Keynote Slides](keynote.md)
> 📥 **Download Keynote Slide Deck (.pptx)**: <https://reurl.cc/5XjzlG>

## Clone the Repository

```bash
git clone https://github.com/gemini960114/ai-workshop-ucdavis.git
```

> [!IMPORTANT]
> **For every unit, use Antigravity's `Open Folder` to open that specific unit's folder** (e.g., `04-ai-workshop-voucher-ocr`). **Do NOT open the outer `ai-workshop-ucdavis` folder.**
> The AI Agent only reads the skills and configuration inside the folder currently opened as the workspace; opening the root folder will prevent it from finding unit-specific skills.

## Keynote & Hands-On Units (`From Tool to Skill`)

| Section / Unit | Stage | Content | What You Will Learn |
| --- | :---: | --- | --- |
| [🎤 Keynote Presentation](keynote.md) | **KEYNOTE** | *Bring the AI Agent to Your Laptop as Your Research Partner* (23 slides + speaker notes + Nano4 15-MRI demo) | How Generative AI (word chain & hallucinations) and Agentic AI (Brain + Tools) work, and why multiple agents should cross-check each other |
| [00 Cloud vs. Local](00-ai-workshop-openai/) | **HABIT** | Give the same wet-lab science paper and the same three questions to ChatGPT Web and a local AI IDE, then cross-check with Gemini | Local AI Agents can read/write files directly in your folder and cross-check across models |
| [01 Getting Started with Antigravity](01-ai-workshop-agy/) | **1 · TOOL** | Install Antigravity and tools, build your first web page and a playable Memory Match card game | Chat with an AI Agent in plain language and ask AI to install development tools |
| [02 Frontend Design](02-ai-workshop-frontend-design/) | **2 · SKILL** | Install Anthropic's `frontend-design` skill, build a branded landing page, and remake the Memory Match game | What a Skill (`SKILL.md`) is, how to install it, and the difference with vs. without a skill |
| [03 Office Document Processing](03-ai-workshop-office-skills/) | **3 · MORE SKILLS** | CSV → Excel workbook → Animated Slides, Word Report → PDF Handout | Produce polished documents using official `docx`, `pdf`, `pptx`, and `xlsx` skills |
| [04 Voucher OCR to Excel](04-ai-workshop-voucher-ocr/) | **4 · BUILD** | Read scanned invoice PDFs → fill in Excel → save the workflow as a skill (`voucher-to-excel`) | **Build your own Skill** for one-sentence reuse; let a second AI Agent audit the first |

> 📋 **Prompt Cheat Sheet**: All prompts used across Units 00–04 are collected in [`tutorial.md`](tutorial.md) so you can copy and paste them in order during the workshop.

## Slides & Tutorial Videos

Each hands-on unit includes a downloadable slide deck (with speaker notes) and an English narrated tutorial video on YouTube:

| Unit | Title | Unit Slides (.pptx) | Tutorial Video (YouTube) |
| :---: | --- | --- | --- |
| **Keynote** | Bring the AI Agent to Your Laptop as Your Research Partner | [Web Slides](keynote.md) · [Download PPTX](https://reurl.cc/5XjzlG) | Embedded in [Keynote Page](keynote.md) |
| **00** | Cloud vs. Local — One Paper, Two Ways to Use AI | [00-cloud-vs-local.en.pptx](https://github.com/gemini960114/ai-workshop-research/raw/main/PPTX/00-cloud-vs-local.en.pptx) | [Watch on YouTube](https://youtu.be/sLCBtmZAz2c) (2:00) |
| **01** | Getting Started with Antigravity | [01-antigravity.en.pptx](https://github.com/gemini960114/ai-workshop-research/raw/main/PPTX/01-antigravity.en.pptx) | [Watch on YouTube](https://youtu.be/72oCyg8MDLg) (3:59) |
| **02** | Frontend Design (`frontend-design` Skill) | [02-frontend-design.en.pptx](https://github.com/gemini960114/ai-workshop-research/raw/main/PPTX/02-frontend-design.en.pptx) | [Watch on YouTube](https://youtu.be/86bsVsh2tXw) (3:02) |
| **03** | Office Document Processing (`docx`, `pdf`, `pptx`, `xlsx`) | [03-office-skills.en.pptx](https://github.com/gemini960114/ai-workshop-research/raw/main/PPTX/03-office-skills.en.pptx) | [Watch on YouTube](https://youtu.be/sOIg3osiPU4) (3:34) |
| **04** | Voucher OCR to Excel (`voucher-to-excel` Skill) | [04-voucher-ocr.en.pptx](https://github.com/gemini960114/ai-workshop-research/raw/main/PPTX/04-voucher-ocr.en.pptx) | [Watch on YouTube](https://youtu.be/Kq0HLK2kIQg) (4:45) |

## Prerequisites

- Classroom computers already have Antigravity and required tools installed (Git, Node.js, uv, LibreOffice, ffmpeg). On your own laptop, follow the steps in [Unit 01](01-ai-workshop-agy/) to install them through plain-language chat.

## Core Habit to Remember

- **AI sounds confident, but it can make mistakes (hallucinations).**
- **Never trust just one agent**: let one agent do the work and let a second agent check the result against the raw files.
- **Turn what works into a Skill**: once a workflow is verified, save it as a `SKILL.md` so next time one plain sentence does the whole job.
