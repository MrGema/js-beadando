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
var alsoter=document.getElementById("alsoter");



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
            oszlopdiv.setAttribute("onclick", "berakas2(this)");    
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


function alsoterTablazat(){
    let k=1;
    let asd=1;
    let idk=1;
    let tablazat=document.createElement("table");
    tablazat.style.width = "70vw"
    for(let i = 0; i < 4; i++){
        var tr=document.createElement("tr")
        tr.style.width = "70vw"
        for(let j = 0; j < 10; j++){
            var td=document.createElement("td");
            td.style.width = "7vw"
            td.setAttribute("onclick", "berakas(this)");
            let kep=document.createElement("img")
            if(k<=23){
                kep.src="img/"+k+".jpg"
                //kep.dataset.ertek = kartyAdatok[k].value; ennek valami baja van
                td.id=idk;
                k++;      
                idk++;     
             }
            if(k>23 && asd<=16){
                kep.src="img/var"+asd+".png"
                //kep.dataset.ertek = varAdatok[asd].value; ennek is 
                td.id=idk;
                asd++;
                idk++;
            }
            td.appendChild(kep);
            tr.appendChild(td);
        }
        tablazat.appendChild(tr);
        }
        alsoter.appendChild(tablazat);

}

var aktid=0;
var click=0;
function berakas(td){
    if(click==0){
        td.style.display="none";
        aktid=td.id;
        click++;
    }
}

function berakas2(oszlopdiv){
    var kepasd=document.createElement("img");
    if(aktid!=0){
        if(aktid<=23){
            kepasd.src="img/"+aktid+".jpg"
        }
        else{
            kepasd.src="img/var"+Number(aktid-23)+".png"
        }
        oszlopdiv.appendChild(kepasd);
        oszlopdiv.removeAttribute("onclick","berakas2(this)");
        aktid=0;
        click=0;
    }
}


function Main()
{
    JatekTerBetoltese();
    JatekTerElrendezese();
    TablaGeneralasa();
    Cellakfelotoltese();
    alsoterTablazat();
}

Main();
