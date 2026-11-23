// Generate docs/guide/*.md from the root markdown files and each unit's README.md,
// so the repository markdown files stay the single source of truth.
// Run automatically by `npm run docs:dev|docs:build`.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const REPO = 'https://github.com/gemini960114/ai-workshop-ucdavis'

const CHAPTERS = {
  '00-ai-workshop-openai': '00_cloud_vs_local',
  '01-ai-workshop-agy': '01_antigravity',
  '02-ai-workshop-frontend-design': '02_frontend_design',
  '03-ai-workshop-office-skills': '03_office_skills',
  '04-ai-workshop-voucher-ocr': '04_voucher_ocr',
}

mkdirSync(join(ROOT, 'docs', 'guide'), { recursive: true })

function rewriteLinks(markdown, rewrite) {
  return markdown.replace(/\]\(([^)\s]+)\)/g, (match, target) => {
    const next = rewrite(target)
    return next === undefined ? match : `](${next})`
  })
}

function chapterPage(target, prefix) {
  const m = target.match(new RegExp(`^${prefix}(\\d\\d-[a-z0-9-]+)(?:/README\\.md|/)?(#.*)?$`))
  if (m && CHAPTERS[m[1]]) return `./${CHAPTERS[m[1]]}${m[2] ?? ''}`
  return undefined
}

function fromChapter(dir, target) {
  if (/^(https?:|mailto:|#)/.test(target)) return undefined
  if (target === '../README.md' || target === '../') return './overview'
  if (target === '../keynote.md') return './keynote'
  if (target === '../tutorial.md') return './prompts'
  const cp = chapterPage(target, '\\.\\./')
  if (cp) return cp
  const clean = target.replace(/^\.\//, '')
  const kind = clean.endsWith('/') || clean === '' ? 'tree' : 'blob'
  return `${REPO}/${kind}/main/${dir}/${clean.replace(/\/$/, '')}`
}

function fromRoot(target) {
  if (/^(https?:|mailto:|#)/.test(target)) return undefined
  if (/^(\.\/)?tutorial\.md$/.test(target)) return './prompts'
  if (/^(\.\/)?keynote\.md$/.test(target)) return './keynote'
  if (/^(\.\/)?README\.md$/.test(target)) return './overview'
  if (target.startsWith('docs/public/')) return '/' + target.slice('docs/public/'.length)
  if (target.startsWith('./docs/public/')) return '/' + target.slice('./docs/public/'.length)
  const cp = chapterPage(target, '(?:\\./)?')
  if (cp) return cp
  const clean = target.replace(/^\.\//, '')
  const kind = clean.endsWith('/') || clean === '' ? 'tree' : 'blob'
  return `${REPO}/${kind}/main/${clean.replace(/\/$/, '')}`
}

const write = (relDir, page, content) => {
  writeFileSync(join(ROOT, relDir, `${page}.md`), content)
  console.log(`synced ${relDir}/${page}.md`)
}

for (const [dir, page] of Object.entries(CHAPTERS)) {
  const sourceEn = readFileSync(join(ROOT, dir, 'README.md'), 'utf8')
  write('docs/guide', page, rewriteLinks(sourceEn, (t) => fromChapter(dir, t)))
}

write('docs/guide', 'overview', rewriteLinks(readFileSync(join(ROOT, 'README.md'), 'utf8'), (t) => fromRoot(t)))
write('docs/guide', 'prompts', rewriteLinks(readFileSync(join(ROOT, 'tutorial.md'), 'utf8'), (t) => fromRoot(t)))

const keynoteSrc = rewriteLinks(readFileSync(join(ROOT, 'keynote.md'), 'utf8'), (t) => fromRoot(t))
  .replace(
    '<!-- DECK_PLAYER -->',
    '<script setup>\nimport DeckPlayer from "../.vitepress/components/DeckPlayer.vue"\nimport { withBase } from "vitepress"\n</script>\n\n<DeckPlayer />'
  )
  .replace(
    '<!-- NANO4_VIDEO -->',
    '<video style="width:100%;aspect-ratio:16/9;border-radius:8px;margin:12px 0;border:1px solid var(--vp-c-divider);" :src="withBase(\'/videos/nano4-mri-demo.mp4\')" :poster="withBase(\'/slides/slide-06.png\')" controls preload="metadata"></video>'
  )
write('docs/guide', 'keynote', keynoteSrc)
