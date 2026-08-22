#!/usr/bin/env node
// Driver for the run-pahinga-coffee-landing skill.
// Usage: node driver.mjs [--url http://localhost:5173] [--out <dir>]
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
function flag(name, fallback) {
  const i = args.indexOf(`--${name}`)
  return i !== -1 ? args[i + 1] : fallback
}

const url = flag('url', 'http://localhost:5173')
const outDir = flag(
  'out',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'screenshots'),
)
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const consoleErrors = []

async function shot(viewport, name) {
  const page = await browser.newPage({ viewport })
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`[${name}] ${msg.text()}`)
  })
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true })
  return page
}

await shot({ width: 1280, height: 800 }, 'desktop')
await shot({ width: 390, height: 844 }, 'mobile')

console.log('Screenshots written to', outDir)
console.log('Console errors:', consoleErrors.length ? consoleErrors : 'none')

await browser.close()
process.exit(consoleErrors.length ? 1 : 0)
