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

    /*tabla.innerHTML="tabla";
    kartyaBox.innerHTML="kartya box";
    pontBox.innerHTML="pontok";
    korokBox.innerHTML="korok";*/

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
            kep1.src = "img/"+velkartyaszam+".png";
            var hely = document.getElementById(veletlendiv);
            divid.push(veletlendiv);
        }
        else{
            index--;
        }
        hely.appendChild(kep1);
        
    }
        /*
        {
            divid.push(veletlendiv);
            var kep1 = document.createElement("img");
            kep1.src = "img/"+velkartyaszam+".png";
            hely.appendChild(kep1);
        }
        */
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
    
//hazi: dizajn - kepek,divek - ne legyen ismetlodes(helyek, szamok)

function Main(){
    
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    KartyatTablabageneral();
}

Main();
console.log(kartyaszam);
console.log(divid);