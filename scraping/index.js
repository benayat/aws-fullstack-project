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
    )
      .map((elem) => elem.innerText)
      .join("\n");

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
      .map((elem) => elem.innerText)
      .join("\n");
    const picture = document.querySelector(
      "#recbody > div.resulphotoandsnaps > figure > img"
    );
    // function getBase64Image(img) {
    //   var canvas = document.createElement("canvas");
    //   canvas.width = img.width;
    //   canvas.height = img.height;
    //   var ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0);
    //   var dataURL = canvas.toDataURL("image/png");
    //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }
    console.log(picture);

    return {
      title,
      description,
      ingredients,
      time,
      calories,
      howToMake,
      picture,
      //   base64,
    };
  });

  console.log(data);
})();
