var kartyAdatok= [
    {id:1,value:1,sign:''},
    {id:2,value:3,sign:''},
    {id:3,value:0,sign:'hegy'},
    {id:4,value:-4,sign:''},
    {id:5,value:6,sign:''},
    {id:6,value:5,sign:''},
    {id:7,value:0,sign:'sarkany'},
    {id:8,value:4,sign:''},
    {id:9,value:-5,sign:''},
    {id:10,value:0,sign:'hegy'},
    {id:11,value:2,sign:''},
    {id:12,value:0,sign:'taliga'},
    {id:13,value:6,sign:''},
    {id:14,value:-6,sign:''},
    {id:15,value:0,sign:'pap'},
    {id:16,value:3,sign:''},
    {id:17,value:4,sign:''},
    {id:18,value:5,sign:''},
    {id:19,value:2,sign:''},
    {id:20,value:-3,sign:''},
    {id:21,value:1,sign:''},
    {id:22,value:-2,sign:''},
    {id:23,value:-1,sign:''},

];

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


function Main()
{

    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
}

Main();
//console.log(kartyaszam);
//console.log(divid);