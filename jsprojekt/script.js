var indexek = new Array();
var vare = true;
var aktid=0;
var click=0;

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
    pontBox.setAttribute("onclick","adjalkartyat()");
}

var cellak = new Array();

function Cellakfelotoltese(){
    for (let i = 0; i < 23; i++)
    {
        cellak[i] = {};
        cellak[i].type = "kártya";
        cellak[i].info = kartyAdatok[i];
    }
}


function alsoterTablazat(){
    let k=1;
    let asd=1;
    let idk=1;
    let tablazat=document.createElement("table");
    tablazat.style.width = "70vw"
    var tr=document.createElement("tr")
    tr.style.width = "70vw";
    for(let i = 1; i < 9; i++){
        if(i<8){
            let kep = document.createElement("img");
            let td = document.createElement("td");
            kep.src = "img/var"+i+".png";
            td.style.width = "7vw";
            td.setAttribute("onclick", "varberkas(this)");
            td.appendChild(kep);
            tr.appendChild(td)
            td.id = i;
        }
        else{
            let td = document.createElement("td");
            tr.appendChild(td)
            td.style.width = "7vw";
            td.id="kepid"
        }
    }
        tablazat.appendChild(tr);
        alsoter.appendChild(tablazat);

}

function adjalkartyat(){
    if(click==0){
        let i = velszam(1,23);
        let kep =document.createElement("img")
        if(!indexek.includes(i)){
            aktid = i;
            indexek.push(i);
            vare = false;
            kep.src="img/"+i+".jpg"
            document.getElementById("kepid").appendChild(kep);
            console.log(aktid);
        }
        else{
            (indexek.includes(i))
                i = velszam(1,23);
        }
    }
}

function velszam(also, felso){
    return Math.floor(Math.random()*(felso-also+1)+also);
}



function berakas2(oszlopdiv){
    var kepasd=document.createElement("img");
    if(aktid!=0){
        if(vare == false){
            kepasd.src="img/"+aktid+".jpg"
            vare = true;
        }
        else if(vare == true){
            kepasd.src="img/var"+aktid+".png"
            vare = false;
        }
        oszlopdiv.appendChild(kepasd);
        oszlopdiv.removeAttribute("onclick","berakas2(this)");
        let kepid=document.getElementById("kepid");
        kepid.innerHTML="";
        aktid=0;
        click=0;
    }
}

function varberkas(td){
    if(click==0){
        aktid = td.id;
        console.log(aktid);
        click = 1;
        vare = true;
        td.removeAttribute("onclick","varberkas(this)");
        td.style.boxShadow = "0px 0px 79px 19px rgba(71,20,0,.75)";
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
