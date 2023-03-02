var kartyAdatok = [
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

var varAdatok = [
    {id:1,color:1,value:1},
    {id:2,color:1,value:2},
    {id:3,color:1,value:3},
    {id:4,color:1,value:4},
    {id:5,color:2,value:1},
    {id:6,color:2,value:2},
    {id:7,color:2,value:3},
    {id:8,color:2,value:4},
    {id:9,color:3,value:1},
    {id:10,color:3,value:2},
    {id:11,color:3,value:3},
    {id:12,color:3,value:4},
    {id:13,color:4,value:1},
    {id:14,color:4,value:2},
    {id:15,color:4,value:3},
    {id:16,color:4,value:4},
];

var jatekTer = document.getElementById("jatekter");
var tabla = document.createElement("div");
var leftSide = document.createElement("div");
var kartyaBox = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");
var imgid=new Array();

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

var cellak = new Array();

function Cellakfelotoltese(){
    for (let i = 0; i < 23; i++)
    {
        cellak[i] = {};
        cellak[i].type = "kártya";
        cellak[i].info = kartyAdatok[i];
    }
    for (let i = 23; i < 30; i++) {
        cellak[i] = {};
        cellak[i].type = "vár";
        cellak[i].info = varAdatok[i-23];
    }
}

function Cellakmegjelenitese(){
    let k=0;
    for(let i = 0; i < cellak.length; i++)
    {
        var kep = document.createElement("img");
        if(cellak[i].type == "kártya")
        {
            var szam = cellak[i].info.id;
            kep.src = "img/"+szam+".jpg";
            kep.dataset.ertek = cellak[i].info.value;
            document.getElementById(i).appendChild(kep);
        }
        if(cellak[i].type == "vár")
        {
            var szam  = Math.floor(Math.random()*16-01+1)+1;
            kep.src = "img/var"+szam+".png";
            kep.dataset.ertek = varAdatok[szam-1].value;
            document.getElementById(i).appendChild(kep)
        }
        k++;
    }    
}

function Cellakmegkeverese(){
    for (let i = 0; i < cellak.length; i++) 
    {
        var a = Math.floor(Math.random()*29-0+1)+0;
        var b = Math.floor(Math.random()*29-0+1)+0;
        var sv = cellak[a];
        cellak[a] = cellak[b];
        cellak[b] = sv;
    }
}

function soroszlopertek(){
    console.log("Sorok összege:");
    for (let i = 0; i < 5; i++) {
        let sorosszeg = 0;
        for (let j = 0; j < 6; j++) {
            let kep = document.getElementById(i*6+j).getElementsByTagName("img");
            sorosszeg += Number(kep[0].dataset.ertek);
        }
        console.log(sorosszeg);
    }
    console.log("Oszlopok összege:");
    for (let i = 0; i < 6; i++) {
        let oszloposszeg = 0;
        for (let j = 0; j < 5; j++) {
            let kep = document.getElementById(j*6+i).getElementsByTagName("img");
            oszloposszeg += Number(kep[0].dataset.ertek);
        }
        console.log(oszloposszeg);
    }
}


function Main()
{
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    Cellakfelotoltese();
    Cellakmegkeverese();
    Cellakmegjelenitese();
    soroszlopertek();
}

Main();
