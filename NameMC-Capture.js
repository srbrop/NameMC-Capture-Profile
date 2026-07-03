const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // ✏️ EDIT THIS: Replace with your NameMC username
    const username = 'Dream'; 
    const url = `https://namemc.com/profile/${username}`;

    console.log(`🚀 Starting browser (Perfect Crop Mode) for: ${username}...`);

    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null 
    });
    
    const page = await browser.browserContexts()[0].newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    // 🎯 Keep the giant height and 4x zoom for brutal quality
    await page.setViewport({
        width: 1920,
        height: 3000, 
        deviceScaleFactor: 4 
    });

    // Native Ad Blocker to prevent layout shifts
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        const urlReq = request.url();
        if (urlReq.includes('googleads') || urlReq.includes('doubleclick') || urlReq.includes('ads')) {
            request.abort(); 
        } else {
            request.continue(); 
        }
    });

    try {
        console.log(`🌐 Entering NameMC...`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        await page.waitForSelector('h1', { timeout: 60000 });
        await page.waitForSelector('canvas', { timeout: 60000 });

        console.log(`📐 Applying exact crop measurements...`);
        
        await new Promise(r => setTimeout(r, 2000)); 

        const clipRegion = await page.evaluate(() => {
            const nameEl = document.querySelector('h1');
            const cards = Array.from(document.querySelectorAll('.card'));

            const skinCard = cards.find(c => c.querySelector('canvas'));
            // Look for the mosaic card in both English and Spanish formats
            const mosaicCard = cards.find(c => c.innerText.includes('Skins') || c.innerText.includes('Aspectos'));

            if (!nameEl || !skinCard || !mosaicCard) return null;

            // Get bounding boxes for each target element
            const nRect = nameEl.getBoundingClientRect();
            const sRect = skinCard.getBoundingClientRect();
            const mRect = mosaicCard.getBoundingClientRect();

            // Calculate extreme boundaries for the perfect box
            const left = Math.min(nRect.left, sRect.left, mRect.left);
            const right = Math.max(nRect.right, sRect.right, mRect.right);
            const top = nRect.top;
            const bottom = mRect.bottom;

            // ✂️ FINE EDGE ADJUSTMENT (Custom applied measurements)
            const marginLeft = 5;  // Minimum margin to not cut the first letter
            const marginRight = 0;   
            const marginTop = 0;    
            const marginBottom = 0; 

            return {
                x: left - marginLeft,
                y: top - marginTop, 
                width: (right - left) + marginLeft + marginRight,
                height: (bottom - top) + marginTop + marginBottom 
            };
        });

        if (clipRegion) {
            const savePath = path.join(__dirname, `${username}_perfect_profile.png`);
            await page.screenshot({
                path: savePath,
                clip: clipRegion 
            });
            console.log(`📸 DONE! Millimetric screenshot saved as: ${username}_perfect_profile.png`);
        } else {
            console.log(`❌ Error: Could not calculate the clipping area.`);
        }

    } catch (error) {
        console.error('❌ An error occurred:', error);
    } finally {
        await browser.close();
        console.log('🏁 Process finished. Check your image file.');
    }
})();
