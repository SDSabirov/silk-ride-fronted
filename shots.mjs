// Screenshot harness for the redesigned homepage (replaces the MCP browser).
// Usage: node shots.mjs <url> <outPrefix> [mobile]
import { chromium } from 'playwright-core'

const exePath = 'C:/Users/saido/AppData/Local/ms-playwright/chromium-1208/chrome-win64/chrome.exe'
const [, , url = 'http://localhost:3000', prefix = 'shot', mode = 'desktop'] = process.argv

const browser = await chromium.launch({ executablePath: exePath })
const page = await browser.newPage({
  viewport: mode === 'mobile' ? { width: 390, height: 844 } : { width: 1440, height: 900 },
})

await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(1500)

// viewport (hero) shot
await page.screenshot({ path: `${prefix}-hero.jpeg`, type: 'jpeg', quality: 88 })

// scroll through to trigger IntersectionObserver reveals, then full-page shot
await page.evaluate(async () => {
  const h = document.body.scrollHeight
  for (let y = 0; y < h; y += 350) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 70))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(1000)
await page.screenshot({ path: `${prefix}-full.jpeg`, type: 'jpeg', quality: 85, fullPage: true })

// report section presence for verification
const report = await page.evaluate(() => {
  const ids = ['main-hero', 'services', 'why-choose-us', 'testimonials']
  const out = {}
  for (const id of ids) out[id] = !!document.getElementById(id)
  out.sections = [...document.querySelectorAll('section')].map(
    (s) => (s.id || s.className.split(' ').slice(0, 2).join(' ')) + ':' + s.offsetHeight
  )
  return out
})
console.log(JSON.stringify(report, null, 1))

await browser.close()
