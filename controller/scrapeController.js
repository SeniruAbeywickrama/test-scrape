// import puppeteer from "puppeteer";
const puppeteer = require("puppeteer");

const getCoinMarketData = async (req, res) => {
    try {

        // const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate the page to a URL.
        await page.goto("https://coinmarketcap.com/currencies/saveplanetearth/");

        // Wait for the content to load
        await page.waitForSelector('.base-text'); // Replace with the actual CSS class

        // Extract values from the elements with the specified CSS class
        const values = await page.evaluate(() => {
            // Replace with the actual CSS class
            const elements = document.querySelectorAll('.base-text');
            return Array.from(elements).map(element => element.innerText);
        });

        return res.status(200).json({data: values[30]});

        // Close the browser
        await browser.close();

    } catch (e) {/*JSON*/
        return res.status(500).json({error: e});
    }
}

const getPoocoinData = async (req, res) => {
    try {

        // Launch the browser and open a new blank page
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate the page to a URL.
        await page.goto("https://poocoin.app/tokens/0x4ac81e3631dcda62109e3117c4cae7bf70bbbbd2");

        // Wait for the content to load
        await page.waitForSelector('.TokenChart_stats__dICD1'); // Replace with the actual CSS class

        // Extract values from the elements with the specified CSS class
        const values = await page.evaluate(() => {
            // Replace with the actual CSS class
            const elements = document.querySelectorAll('.TokenChart_stats__dICD1');
            return Array.from(elements).map(element => element.innerText);
        });
        //   const indexedArr = values.map((item, index) => `${index}: ${item}`);



        //   console.log(indexedArr);
        return res.status(200).json({data: values});
        // Close the browser
        await browser.close();

    } catch (e) {/*JSON*/
        return res.status(500).json({error: e});
    }
}


module.exports = {
    getCoinMarketData,
    getPoocoinData
};
