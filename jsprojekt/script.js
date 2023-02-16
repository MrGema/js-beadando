/*var objektum = {
    szam1: 34,
    szam2: 23,
    id: 0,
    ertek: "Zöldvár4",
    Torol: Torol(),
}

function Torol(){
    
    return console.log("töröl");
    
}

console.log(objektum.szam1);
call(objektum.Torol);*/

var jatekTer = document.getElementById("jatekter");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");

function JatekTerBetoltese(){
    leftSide.append(pontBox);
    leftSide.append(kartyaBox);
    jatekTer.appendChild(leftSide);
    jatekTer.appendChild(tabla);
    jatekTer.appendChild(korokBox);
}

function JatekTerElrendezese(){
    leftSide.id = "leftside";
    kartyaBox.id = "kartya";
    pontBox.id = "pontok";
    tabla.id = "tabla";
    korokBox.id = "korok";
    jatekTer.id = "jatekTer"
}

function TablaGeneralasa(){
    var k = 0;
    for (let i = 0; i < 5; i++) {
        var sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (let j = 0; j < 6; j++) 
        {
            var oszlopdiv = document.createElement("div");
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id = k;
            k++;
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
    }
}

var kartyaszam = new Array();
var divid = new Array();
function KartyatTablabageneral(){
    for (let index = 0; index < 23; index++) {
        var velkartyaszam = Math.floor(Math.random()*(23-1+1)+1);
        var veletlendiv = Math.floor(Math.random()*(29-0+1)+0);
        if(!(divid.includes(veletlendiv)) && !(kartyaszam.includes(velkartyaszam)))
        {
            kartyaszam.push(velkartyaszam);
            var kep1 = document.createElement("img");
            kep1.src = "img/"+velkartyaszam+".jpg";
            var hely = document.getElementById(veletlendiv);
            divid.push(veletlendiv);
        }
        else{
            index--;
        }
        hely.appendChild(kep1);
    }
    var varakkepek = new Array();
    var varak = ["S","P","Z","R"];
    for (let j = 1; j < 8; j++) {
        var veletlendiv = Math.floor(Math.random()*(29-0+1)+0);
        var velvarszam = Math.floor(Math.random()*(4-1+1)+1);
        var varszin = Math.floor(Math.random()*(3-0+1)+0);
        var a = velvarszam+varak[varszin];
        //console.log(a);
        if(!(divid.includes(veletlendiv)) && !(varakkepek.includes(a)))
        {
            var kep1 = document.createElement("img");
            kep1.src = "img/"+velvarszam+varak[varszin]+".png";
            var hely = document.getElementById(veletlendiv);
            varakkepek.push(a);
            divid.push(veletlendiv);
        }
        else{
            j--;
            
        }
        hely.appendChild(kep1);
        
    }
    }
    
    function VaneBenne(t,a){
        var j = 0;
        while(j<t.lenght && t[j]!=a)
        {
            j++;
        }
        if(j<t.lenght)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
function Main(){
    
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    KartyatTablabageneral();
    penzosztas(4);
}


function penzosztas(db){
    let ertekek = new Array(1, 5, 10, 50)
    for(let i = 0; i < 4; i++){
        var egysor = document.createElement("div");
        for(let j = 0; j < db; j++){
            var erme = document.createElement("img");
            erme.src="img/"+ertekek[i]+".png";
            erme.style.width="90px";
            erme.style.height="90px";
            egysor.append(erme);
        }
        kartyaBox.appendChild(egysor);
    }
}


Main();
//console.log(kartyaszam);
//console.log(divid);