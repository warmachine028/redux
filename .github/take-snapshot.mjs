import puppeteer from 'puppeteer'
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const takeSnapShot = async () => {
    const url = 'https://reduux.vercel.app' // Replace with your actual deployed URL
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
    await page.goto(url)
    await sleep(3000)
    await page.screenshot({ path: '.github/preview.png' })
    await browser.close()
}

takeSnapShot()
