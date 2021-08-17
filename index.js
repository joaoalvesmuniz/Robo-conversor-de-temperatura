const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function robo()  {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const tipoBase = readlineSync.question('Informe o tipo de temperatura:');
  const tipoFinal = readlineSync.question('Informe o tipo de temperatura para comparar:');
  const valorBase = readlineSync.question('Informe o valor para conversao:');
  const url = `https://www.google.com/search?q=quanto+%C3%A9+${valorBase}+${tipoBase}+em+${tipoFinal}&sxsrf=ALeKk02jtJBkDNZ3_gefGgCf8rgDj5lt5w%3A1629205846641&ei=VrUbYcCqJorY1sQP-6a2iAc&oq=quanto+%C3%A9+30+celsius+em+fahrenheit&gs_lcp=Cgdnd3Mtd2l6EAwyBAgjECcyBggAEAcQHjoHCAAQRxCwAzoRCAAQsAMQigMQtwMQ1AMQ5QJKBAhBGABQ3hhY3hhg5jBoAXACeACAAewCiAHfA5IBBzAuMS4wLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjArYTekLjyAhUKrJUCHXuTDXEQ4dUDCA4`
  await page.goto(url);
  
  const resultado = await page.evaluate(() => {
    return document.querySelectorAll('.vXQmIe.gsrt')[1].value;
  });
  
  console.log(`A conversao de ${valorBase} ${tipoBase} para ${tipoFinal} é ${resultado}`);
}





robo();