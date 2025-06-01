console.log("Hallo")

let leeftijd = "Vul hier je leeftijd in:";
let titel = document.querySelector("h1")
let uitleg = document.querySelector("#uitleg");
let getal = 0;
let teJong = "Helaas, je bent te jong.";
let oudGenoeg = "Welkom! Druk op een willekeurige toets om te beginnen.";
let timer = document.querySelector("#timer")
let timerGestart = false;
let tijdOm = new Audio("./sounds/tijdom.mp3") //https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
let code1 = Math.random() * 9; //creëert een random getal
code1 = Math.round(code1);
console.log(code1);

let code2 = Math.random() * 9;
code2 = Math.round(code2);
console.log(code2);

let code3 = Math.random() * 9;
code3 = Math.round(code3);
console.log(code3);

let code = [code1, code2, code3];
console.log(code);

let juisteCode = code.join(""); // Maakt van [7,7,7] → "777" https://www.w3schools.com/jsref/jsref_join.asp

const button = document.querySelector("#button");
const getalVeld = document.querySelector("h2");
const plusKnop = document.querySelector("#plus");
const minKnop = document.querySelector("#min");
const controleerKnop = document.querySelector("#controleer");
const checkButton = document.querySelector ("#check");
const leeftijdToevoegen = document.querySelector("#leeftijdToevoegen");
const minimumLeeftijd = 16;
const lades = document.querySelector("#lades"); //afbeelding van (en daarna zelf uitgesneden naar 5 losse) https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.leenbakker.nl%2Fkasten%2Fladekasten%2Fladekast-canada-mat-zwart-96x99x40cm&psig=AOvVaw1d5xoptcY9e86yPc0TUPg2&ust=1748087937053000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLChoJ_FuY0DFQAAAAAdAAAAABAE
const lade1 = document.querySelector("#lade1");
const lade2 = document.querySelector("#lade2");
const lade3 = document.querySelector("#lade3");
const lade4 = document.querySelector("#lade4");
const lade5 = document.querySelector("#lade5");
const kluis = document.querySelector("#kluisDicht"); //afbeelding van https://www.bol.com/nl/nl/p/earkings-sleutelkluis-sleutelkastje-inclusief-wandmontage-sleutelkluisje-met-code-voor-buiten-kluisje-met-cijferslot-zwart/9300000094371309/?bltgh=83bb3dff-7ee2-45ae-83b8-bdafc26be032.ProductList_Middle.11.ProductImage&cid=1748001179492-3360030982737
const kluisSlot = document.querySelector("#kluisSlot"); //afbeelding van https://www.bol.com/nl/nl/p/earkings-sleutelkluis-sleutelkastje-inclusief-wandmontage-sleutelkluisje-met-code-voor-buiten-kluisje-met-cijferslot-zwart/9300000094371309/?bltgh=83bb3dff-7ee2-45ae-83b8-bdafc26be032.ProductList_Middle.11.ProductImage&cid=1748001179492-3360030982737
const codeInvullen = document.querySelector("#codeInvullen");
const codeTypen = document.querySelector("#codeTypen");
const codecijfer = document.querySelector("#codecijfer");
const cijferLatenZien = document.querySelector("#cijferLatenZien");
const codeCheck = document.querySelector("#codeCheck");
const afval = document.querySelector("#afval");
const prullenbak = document.querySelector("#prullenbak");
const boek = document.querySelector("#boek");
const puzzel = document.querySelector("#puzzel");
const wc_rol = document.querySelector("#wc_rol");
const terugknop = document.querySelector("#terugknop");
const verstopplekken = document.querySelector("#verstopplekken");

function updateGetal() {
    getalVeld.textContent = getal;
    console.log("getal: " + getal);
}

function toonLeeftijdOpties() {
    console.log("Hoi");
    uitleg.textContent = leeftijd;
    leeftijdToevoegen.style.display = "block";
    button.style.display = "none";
}

function verhoogGetal() {
    getal = getal + 1;
    updateGetal();
}

function verlaagGetal() {
    getal = getal - 1;
    updateGetal();
}

function controleerGetal() {
    console.log("Controleert getal")

    if (getal >= minimumLeeftijd) {
        console.log("Welkom!")
        uitleg.textContent = oudGenoeg;
        leeftijdToevoegen.style.display = "none";
        document.addEventListener("keydown", startEscapeRoom);
    } else {
        console.log("Helaas, je bent te jong")
        leeftijdToevoegen.style.display = "none";
        uitleg.textContent = teJong;
        getalVeld.style.display = "block";
    }
}

function startTimer() {
    let tijdTeGaan = 180;
    let intervalId = setInterval(() => {
        tijdTeGaan--;
        console.log("Nog " + tijdTeGaan)
        timer.textContent = tijdTeGaan;

        if (tijdTeGaan === 0) {
            clearInterval(intervalId);
            console.log("Tijd is om");
            timer.textContent = "Tijd is om";
            timer.classList.add("timerAfgelopen");
            titel.style.display = "none";
            tijdOm.play() //https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
            lades.style.display = "none";
            kluis.style.display = "none";
            boek.style.display = "none";
            puzzel.style.display = "none";
            boek.style.display = "none";
            prullenbak.style.display = "none";
        }
    }, 1000);
}

function startEscapeRoom() {
    if (timerGestart) return; //code van https://www.w3schools.com/js/js_booleans.asp
    timerGestart = true;
    startTimer();
    uitleg.style.display = "none";
    timer.style.display = "flex";
    titel.style.fontSize = "48px";
    verstopplekken.style.display = "flex";
    kluis.style.display = "block";
}

function verwijderAchtergrond() {
    titel.style.display = "block";
    kluis.style.display = "none";
    timer.style.display = "none";
    lades.style.display = "none";
    terugknop.style.display = "flex";
    prullenbak.style.display = "none";
    boek.style.display = "none";
    puzzel.style.display = "none";
    wc_rol.style.display = "none";
}

function toonAchtergrond() {
    titel.style.display = "flex";
    titel.textContent = "Escape Room"
    kluis.style.display = "flex";
    timer.style.display = "flex";
    lades.style.display = "flex";
    prullenbak.style.display = "flex";
    boek.style.display = "flex";
    puzzel.style.display = "flex";
    wc_rol.style.display = "flex";
    terugknop.style.display = "none";
    codecijfer.style.display = "none";
    kluisSlot.style.display = "none";
    codeTypen.style.display = "none";
    afval.style.display = "none";
}

function kluisOpen() {
    kluisSlot.style.display = "flex";
    codeTypen.style.display = "flex";
    verwijderAchtergrond();
}

function controleerCode() {
    let invoer = document.querySelector("#codeInvullen").value; 
    //met behulp van chatGPT. Prompt: 
    // Ik wil dat het tekstvlak hetzelfde als uitkomst moet zijn als de random code dus eerst code1 dan code2 na 
    // elkaar dus stel 1 is 5 en 2 is 3 en 3  is. 5 en 4 is 9. Maar dan moet het de random uitkomst zijn. 
    // Als je dat hebt dan heb je de game uitgespeeld.

    console.log("Gebruiker heeft ingevuld:", invoer);
    console.log("Juiste code is:", juisteCode);

    if (invoer === juisteCode) {
        console.log("Correcte code ingevoerd!");
        codeTypen.style.display = "none";
        titel.style.display = "block";
        titel.textContent = "Je hebt de Escape Room gehaald!";
        timer.style.display = "none";
        kluisSlot.style.display = "none";
        terugknop.style.display = "none";


    } else {
        alert("Verkeerde code. Probeer opnieuw.");
    }
}


function lade1Gevonden() {
    codecijfer.style.display = "flex";
    verwijderAchtergrond();
    cijferLatenZien.textContent = code1 + "..";
}

function helaas() {
    verwijderAchtergrond();
    afval.style.display = "flex";
    titel.textContent = "Helaas. Afval."
}

function lade3Gevonden() {
    codecijfer.style.display = "flex";
    verwijderAchtergrond();
    cijferLatenZien.textContent = "." + code2 + ".";
}

function boekGevonden() {
    verwijderAchtergrond();
    titel.textContent = "Lorem ipsum dolor sit amet. Et aliquam dolorum et omnis .." + code3 + " inventore aut sint omnis est veniam harum et tempora consequatur. Ut voluptatibus nobis quo incidunt aliquid aut sint facilis ex dolorem quod. At suscipit facilis ut placeat inventore sit maiores unde. Eos quasi quis est quaerat consequatur eum ipsum provident et perferendis quia qui quaerat galisum aut sunt porro."
    //https://www.loremipzum.com/nl/tekst-generator
}

function hint1() {
    verwijderAchtergrond();
    titel.textContent = "Je krijgt een hint: kijk in de lades."
}

function hint2() {
    verwijderAchtergrond();
    titel.textContent = "Je krijgt een hint: kijk goed in het boek."
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        verhoogGetal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        verlaagGetal();
    }
});

button.addEventListener("click", toonLeeftijdOpties);
plusKnop.addEventListener("click", verhoogGetal);
minKnop.addEventListener("click", verlaagGetal);
checkButton.addEventListener("click", controleerGetal);
kluis.addEventListener("click", kluisOpen);
codeCheck.addEventListener("click", controleerCode);
lade1.addEventListener("click", lade1Gevonden);
lade2.addEventListener("click", helaas);
lade3.addEventListener("click", lade3Gevonden);
lade4.addEventListener("click", helaas);
prullenbak.addEventListener("click", helaas);
boek.addEventListener("click", boekGevonden);
terugknop.addEventListener("click", toonAchtergrond);
puzzel.addEventListener("click", hint1);
wc_rol.addEventListener("click", hint2);