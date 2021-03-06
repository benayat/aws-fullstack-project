const puppeteer = require("puppeteer");

(async () => {
  let recipeURL = "https://www.iamcook.ru/showrecipe/814";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(recipeURL, { waitUntil: "networkidle2" });
  let data = await page.evaluate(() => {
    let title = document.querySelector('h1[itemprop="name"]').textContent;
    let description = document.querySelector('span[itemprop="description"]')
      .textContent;
    let ingredients = Array.from(
      document.querySelectorAll("p[itemprop='recipeIngredient'  ]")
    ).map((elem) => elem.innerText);

    console.log(ingredients);
    const time = document.querySelector(
      "#recbody > div.ingredients > div > ul > li.time.tt"
    ).textContent;
    const calories = document.querySelector(
      "#recbody > div.ingredients > div > ul > li.kkal.tt > span"
    ).textContent;
    const howToMake = Array.from(
      document.querySelectorAll("#recbody > div.instructions > div > p")
    )
      .filter((elem, index) => index % 3 === 0)
      .map((elem) => elem.innerText);
    const picture = document.querySelector(
      "#recbody > div.resulphotoandsnaps > figure > img"
    ).baseURI;

    return {
      title,
      description,
      ingredients,
      time,
      calories,
      howToMake,
      picture,
    };
  });

  console.log(JSON.stringify(data));
})();
