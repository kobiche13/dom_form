import puppeteer from 'puppeteer'


describe('validate', () =>{
    let browser;
    let page;
    beforeEach(async ()=>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        })

        page = await browser.newPage();
    })


    test('testing tooltip', async ()=>{
        await page.goto('http://localhost:9000')
        await page.waitForSelector('.container-popover')

        const container = await page.$('.container-popover')
        const btn = await container.$('.btn-popover')

        await btn.click()
        await page.waitForSelector('.popover-tooltip')

    }, 10000)


    afterEach(async () => {
        await browser.close();
    })
})