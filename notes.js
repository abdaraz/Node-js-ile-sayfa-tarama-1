const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const fs = require("fs");
const { inverse } = require("chalk");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string
const url = "mongodb+srv://onursefik:1596321abc@mongoproject.uqp9h.mongodb.net/nodejsProject?retryWrites=true&w=majority";
const client = new MongoClient(url);
const util = require("util");
const dbName = "nodejsProject";

let links = [];
let linkJson = [];
let allJson = [];

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const still = function (still) {
  if (still == "classical") {
    console.log(" classical aranıyor");
  } else if (still == "jazz") {
    console.log(" jazz aranıyor");
  } else if (still == "traditional") {
    console.log(" traditional aranıyor");
  } else if (still == "rock") {
    console.log(" rock aranıyor");
  }
  if (still == "christmas") {
    console.log(" christmas aranıyor");
  } else if (still == "word") {
    console.log(" word aranıyor");
  } else {
    console.log("başka stiller aranıyor");
  }
  (async function example() {
    try {
      var driver = new webdriver.Builder().forBrowser("chrome").build();
      var pageMax = 0;
      await driver.get("https://www.8notes.com/all/" + still + "/sheet_music/");

      let pagination = await driver.findElement(By.css(".pagination"));
      let ul = await pagination.findElement(By.tagName("ul"));
      let li = await ul.findElements(By.tagName("li"));

      for (let i of li) {
        let _text = await i.getText();
        if (parseInt(_text) && _text > pageMax) {
          pageMax = parseInt(_text);
        }
      }

      // Navigate to Url
      for (x = 1; x <= pageMax; x++) {
        await driver.get(
          "https://www.8notes.com/all/" + still + "/all/?page=" + x
        );

        let element = await driver.findElement(By.css(".table-responsive"));
        let body = await driver.findElement(By.tagName("tbody"));
        let local_pieces = await body.findElements(By.tagName("tr"));

        for (let e of local_pieces) {
          let link = await e.getAttribute("onclick");
          let link_split = link.split("'")[1];
          let text = await e.getText();
          console.log(text + ": " + link_split);
          links.push(text + ": " + link_split);
        }
      }

      let stiller = links.join("\n");
      fs.writeFileSync("still.txt", stiller, "utf8");
    } catch (error) {
      console.log(error);
    } finally {
      driver.quit();
    }
  })();
};

const bestekar = function (bestekar) {
  if (bestekar == "bach") {
    console.log("bach aranıyor");
  } else if (bestekar == "beethoven") {
    console.log("beethoven aranıyor");
  } else if (bestekar == "mozart") {
    console.log("mozart aranıyor");
  } else if (bestekar == "tchaikovsky") {
    console.log(" tchaikovsky aranıyor");
  } else if (bestekar == "scoottjoplın") {
    console.log("scoott joplin aranıyor");
  } else if (bestekar == "chopın") {
    console.log("chopin aranıyor");
  } else {
    console.log("başka bestekarlar aranıyor");
  }
  (async function example() {
    try {
      var pageMax = 0;
      var driver = new webdriver.Builder().forBrowser("chrome").build();
      await (await driver).get("https://www.8notes.com/" + bestekar + ".asp");
      let pagination = await (await driver).findElement(By.css(".pagination"));
      let ul = await pagination.findElement(By.tagName("ul"));
      let li = await ul.findElements(By.tagName("li"));
      for (let i of li) {
        let _text = await i.getText();
        if (parseInt(_text) && _text > pageMax) {
          pageMax = parseInt(_text);
        }
      }
      // Navigate to Url
      for (y = 1; y < pageMax; y++) {
        await driver.get(
          "https://www.8notes.com/" + bestekar + ".asp?page=" + y
        );
        let element = await driver.findElement(By.css(".table-responsive"));
        let body = await driver.findElement(By.tagName("tbody"));
        let local_pieces = await body.findElements(By.tagName("tr"));
      }
      for (let e of local_pieces) {
        let link = await e.getAttribute("onclick");
        let link_split = link.split("'")[1];
        let text = await e.getText();
        console.log(text + ": " + link_split);
        links.push(text + ": " + link_split);
      }
      let bestekarlar = links.join("\n");
      fs.writeFileSync("bestekarlar.txt", bestekarlar, "utf8");
    } catch (error) {
      console.log(error);
    } finally {
      driver.quit();
    }
  })();
};
var param1;
const enstruman = function (enstruman) {
  console.log("enstruman=", enstruman);
  param1 = enstruman;

  if (enstruman == "piano") {
    console.log("piano aranıyor");
  } else if (enstruman == "violin") {
    console.log("violin aranıyor");
  } else if (enstruman == "guitar") {
    console.log("guitar aranıyor");
  } else if (enstruman == "flute") {
    console.log("flute aranıyor");
  } else if (enstruman == "saxophon") {
    console.log("saxophon aranıyor");
  } else if (enstruman == "voice") {
    console.log("voice aranıyor");
  } else if (enstruman == "clarinet") {
    console.log("clarinet aranıyor");
  } else if (enstruman == "trumpet") {
    console.log("trumpet aranıyor");
  } else {
    console.log("başka enstrümanlar aranıyor");
  }
  (async function example() {
    try {
      var driver = new webdriver.Builder().forBrowser("chrome").build();
      // Navigate to Url
      var pageMax = 0;

      await driver.get(
        "https://www.8notes.com/" + enstruman + "/classical/sheet_music/"
      );

      let pagination = await driver.findElement(By.css(".pagination"));
      let ul = await pagination.findElement(By.tagName("ul"));
      let li = await ul.findElements(By.tagName("li"));
      for (let i of li) {
        let _text = await i.getText();
        if (parseInt(_text) && _text > pageMax) {
          pageMax = parseInt(_text);
        }
      }
      for (z = 1; z <= pageMax; z++) {
        await driver.get(
          "https://www.8notes.com/" +
            enstruman +
            "/classical/sheet_music/?page=" +
            z
        );
        let linkJsonLength = linkJson.length;
        let element = await driver.findElement(By.css(".table-responsive"));
        let body = await driver.findElement(By.tagName("tbody"));
        let local_pieces = await body.findElements(By.tagName("tr"));
        console.log("linkJson length", linkJsonLength);
        // {   Örnek JSon Formatı
        //     artist:"",
        //     title:"",
        //     difficulty:"",
        //     link:""
        // }
        for (let e of local_pieces) {
          let link = await e.getAttribute("onclick");
          
          let eArtist = await (
            await e.findElement(By.css(".artname"))
          ).getText(); //console.log("artname", eArtist)
          let eTitle = await (
            await e.findElement(By.css(".fsmtitle"))
          ).getText();
          
          let eDifficulty = await (
            await (
              await e.findElement(By.className("level_type"))
            ).findElement(By.className("difflevel"))
          ).getAttribute("title");
          let link_split = link.split("'")[1];
          let text = await e.getText();
          // console.log(text + ": "  + link_split);
          links.push(text + ": " + link_split);
          linkJson.push({
            //about: eAbout,

            artist: eArtist,
            title: eTitle,
            difficulty: eDifficulty,
            link: link_split,
            //midi: eMidi,
            //fotoğraf için
            otherLink: "https://www.8notes.com" + link_split,
          });
        }

        //    otherLink= 'https://www.8notes.com'+ link_split;
        for (let index = linkJsonLength; index < linkJson.length; index++) {
          //  const element = linkJson[index];
          //console.log(inverse('Parça linki: ' + linkJson[index].otherLink));
          await driver.get(linkJson[index].otherLink);
          // let main= await driver.findElement(By.tagName('main'));
          // let mainscore=await main.findElement(By.id('mainscore'));
          // let imgdiv=await mainscore.findElements(By.className("img-container"));
          // let img=await imgdiv.findElement(By.id('score'));
          // let imglink=await img.getAttribute('src');

          try {
            let img1 = await (await driver).findElement(By.id("score"));
            if (img1) {
              let imgSrc = await (await img1.getAttribute("src")).toString();
              if (imgSrc) {
                linkJson[index].imageLinks = [imgSrc];
              }
            }
            let img2 = await driver.findElement(By.id("score2"));
            if (img2) {
              let imgSrc = await await img2.getAttribute("src");
              if (imgSrc) {
                linkJson[index].imageLinks.push(imgSrc.toString());
              }
            }
          } catch (error) {
            linkJson[index].imageLinks = "Resim Yok";
          }

          let midiink = "";
         
          try {
            midiink = await (
              await (await driver).findElement(By.className("midi_list"))   
            ).getAttribute("href");
          }
           catch (error) {
            midiink = "Midi Yok";
            
          }
          

          let aboutJson = "";
          try {
            aboutJson = await await (
              await (
                await driver
              ).findElement(
                By.xpath(
                  "/html/body/div[5]/div[2]/div[2]/table/tbody/tr[1]/td/h2"
                )
              )
            ).getText();
          } catch (error) {
              aboutJson = "Başlık Yok ";
            
          }
     

        
          let imgLink1 = linkJson[index].imageLinks[0];
          let imgLink2 = linkJson[index].imageLinks[1];
          let difficultyJson = linkJson[index].difficulty;
          let otherLinkJson = linkJson[index].otherLink;

          allJson.push({
            eImageLink1: imgLink1,
            eImageLink2: imgLink2,
            edifficulty: difficultyJson,
            eLink: otherLinkJson,
            eMidiLink: midiink,
            eAboutJson: aboutJson,
          });
          console.dir(allJson, (color = true));

          await client.connect();
          console.log("Connected correctly to server");
          const db = client.db(dbName);
          const col = db.collection("pieces");
          let piecesDocument = allJson;
          console.log(piecesDocument);
          const p = await col.insertMany(piecesDocument);
          console.log("Success \n");
          allJson = [];
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      driver.quit();
      client.close();
    }
  })();
  /*(async function all_enstruman() {
        try {
            var driver = new webdriver.Builder().forBrowser('chrome').build();
            // Navigate to Url
            var pageMax=0;

            await driver.get('https://www.8notes.com/'+enstruman+'/all/');

            let pagination=await driver.findElement(By.css('.pagination'))
            let ul= await pagination.findElement(By.tagName('ul'))
            let li= await ul.findElements(By.tagName('li'))
            for (let i of li) {
                let _text=await i.getText();
                if(parseInt(_text)&& _text>pageMax){
                    pageMax=parseInt(_text);
                }
                
            }
            for(z=1; z<=pageMax; z++){
                await driver.get('https://www.8notes.com/'+enstruman+'/all/?page='+z);
               
                let element = await driver.findElement(By.css('.table-responsive'));
                let body = await driver.findElement(By.tagName('tbody'));
                let local_pieces = await body.findElements(By.tagName("tr"));
               
                // {   Örnek JSon Formatı
                //     artist:"",
                //     title:"",
                //     difficulty:"",
                //     link:""
                // }
                for (let e of local_pieces) {
                    let link = await e.getAttribute("onclick");
                    let eArtist = await (await e.findElement(By.css('.artname'))).getText(); console.log("artane", eArtist)
                    let eTitle = await (await e.findElement(By.css('.fsmtitle'))).getText();
                    let eDifficulty = await (await (await e.findElement(By.className('level_type'))).findElement(By.className('difflevel'))).getAttribute('title');
                    let link_split = link.split("'")[1];
                    let text = await e.getText();
                    console.log(text + ": "  + link_split);
                    links.push(text + ": "  + link_split);
                    linkJson.push( {
                        artist:eArtist,
                        title:eTitle,
                        difficulty:eDifficulty,
                        link:link_split
                    });
                }
            }
            
            let enstrumanlar = links.join('\n');
            fs.writeFileSync('all-enstrumans.txt', enstrumanlar, "utf8");
            fs.writeFileSync('all-enstrumans.json', JSON.stringify(linkJson, null, 4), "utf8");

        } catch (error){
            console.log(error);
        }
        finally{
            driver.quit();
        }
    })();*/
};

const all = () => {
   

  console.log("enstruman=", enstruman);
  param1 = enstruman;

  const instruments = ['piano','violin','guitar','flute','saxaphone','voice','clarinet','trumpet'];
 
 

  (async function example() {
    try {
      var driver = new webdriver.Builder().forBrowser("chrome").build();

      var pageMax = 0;

      for (const instrumentLoop of instruments) {
       
      

      await driver.get(
        "https://www.8notes.com/" + instrumentLoop + "/classical/sheet_music/"
      );

      let pagination = await driver.findElement(By.css(".pagination"));
      let ul = await pagination.findElement(By.tagName("ul"));
      let li = await ul.findElements(By.tagName("li"));
      for (let i of li) {
        let _text = await i.getText();
        if (parseInt(_text) && _text > pageMax) {
          pageMax = parseInt(_text);
        }
      }
      for (z = 1; z <= pageMax; z++) {
        await driver.get(
          "https://www.8notes.com/" +
          instrumentLoop +
            "/classical/sheet_music/?page=" +
            z
        );
        let linkJsonLength = linkJson.length;
        let element = await driver.findElement(By.css(".table-responsive"));
        let body = await driver.findElement(By.tagName("tbody"));
        let local_pieces = await body.findElements(By.tagName("tr"));
        console.log("linkJson length", linkJsonLength);

        for (let e of local_pieces) {
          let link = await e.getAttribute("onclick");
          let eArtist = await (
            await e.findElement(By.css(".artname"))
          ).getText();
          let eTitle = await (
            await e.findElement(By.css(".fsmtitle"))
          ).getText();

          let eDifficulty = await (
            await (
              await e.findElement(By.className("level_type"))
            ).findElement(By.className("difflevel"))
          ).getAttribute("title");
          let link_split = link.split("'")[1];
          let text = await e.getText();

          links.push(text + ": " + link_split);
          linkJson.push({
            artist: eArtist,
            title: eTitle,
            difficulty: eDifficulty,
            link: link_split,

            otherLink: "https://www.8notes.com" + link_split,
          });
        }

        for (let index = linkJsonLength; index < linkJson.length; index++) {
          await driver.get(linkJson[index].otherLink);

          try {
            let img1 = await (await driver).findElement(By.id("score"));
            if (img1) {
              let imgSrc = await (await img1.getAttribute("src")).toString();
              if (imgSrc) {
                linkJson[index].imageLinks = [imgSrc];
              }
            }
            let img2 = await driver.findElement(By.id("score2"));
            if (img2) {
              let imgSrc = await await img2.getAttribute("src");
              if (imgSrc) {
                linkJson[index].imageLinks.push(imgSrc.toString());
              }
            }
          } catch (error) {
            linkJson[index].imageLinks = "Resim Yok";
          }

          let midiink = await (
            await (await driver).findElement(By.className("midi_list"))
          ).getAttribute("href");
          let aboutJson = await await (
            await (
              await driver
            ).findElement(
              By.xpath(
                "/html/body/div[5]/div[2]/div[2]/table/tbody/tr[1]/td/h2"
              )
            )
          ).getText();
          let imgLinkler = linkJson[index].imageLinks[0];
          let difficultyJson = linkJson[index].difficulty;
          let otherLinkJson = linkJson[index].otherLink;

          allJson.push({
            eImageLink: imgLinkler,
            edifficulty: difficultyJson,
            eLink: otherLinkJson,
            eMidiLink: midiink,
            eAboutJson: aboutJson,
          });
          console.dir(allJson, (color = true));

          await client.connect();
          console.log("Connected correctly to server");
          const db = client.db(dbName);
          const col = db.collection("pieces");
          let piecesDocument = allJson;
          console.log(piecesDocument);
          const p = await col.insertMany(piecesDocument);
          allJson = [];
        }
      } }
    } catch (error) {
      console.log(error);
    } finally {
      driver.quit();
      client.close();
    }
  })();
};

module.exports = {
  still: still,
  bestekar: bestekar,
  enstruman: enstruman,
  all: all

};
