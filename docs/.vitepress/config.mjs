import { defineConfig } from 'vitepress'
import { githubSlugify } from '../../scripts/slugify.mjs'

const units = [
  { text: '00. Cloud vs. Local', link: '/guide/00_cloud_vs_local' },
  { text: '01. Getting Started with Antigravity', link: '/guide/01_antigravity' },
  { text: '02. Frontend Design Skill', link: '/guide/02_frontend_design' },
  { text: '03. Office Document Processing', link: '/guide/03_office_skills' },
  { text: '04. Voucher OCR: Build Your Own Skill', link: '/guide/04_voucher_ocr' },
]

export default defineConfig({
  title: 'AI Agent Research Partner',
  description: 'Bring the AI Agent to your laptop as your research partner — Multiple agents, cross-checked, then build your own Skill',
  lang: 'en-US',
  head: [['meta', { name: 'theme-color', content: '#15803d' }]],
  base: '/ai-workshop-ucdavis/',
  ignoreDeadLinks: true,
  markdown: { anchor: { slugify: githubSlugify } },
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/gemini960114/ai-workshop-ucdavis' }],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Keynote Slides', link: '/guide/keynote' },
      { text: 'Overview', link: '/guide/overview' },
      { text: '5 Units', items: units },
      { text: 'Prompt Cheat Sheet', link: '/guide/prompts' },
    ],
    sidebar: [
      {
        text: 'Keynote & Overview',
        items: [
          { text: '🎤 Keynote Presentation (16 Slides)', link: '/guide/keynote' },
          { text: '📖 Course Overview & Setup', link: '/guide/overview' },
        ],
      },
      {
        text: 'Hands-On Units (From Tool to Skill)',
        items: units,
      },
      {
        text: 'Appendix',
        items: [{ text: '📋 Prompt Cheat Sheet (Units 00–04)', link: '/guide/prompts' }],
      },
    ],
    footer: {
      message: 'Bring the AI Agent to Your Laptop as Your Research Partner',
      copyright: 'Copyright © 2026 National Center for High-performance Computing (NCHC) · AI Research Workshop',
    },
  },
})
