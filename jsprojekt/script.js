var indexek = new Array();
var vare = true;
var aktid=0, click=0, telivan = 0, aktidtd=0;
var cellak = new Array();

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
    pontBox.setAttribute("onmouseover", "hover()");
    pontBox.setAttribute("onmoouseleave", "hatter()");
    tabla.id = "tabla";
    korokBox.id = "korok";
    jatekTer.id = "jatekTer"
}

function TablaGeneralasa(){
    var k = 0;
    for (let i = 1; i < 6; i++) {
        var sordiv = document.createElement("div");
        sordiv.id=i;
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
function hover(){
    document.getElementById("pontok").style.background = "url('img/kartyhover.png')";
    document.getElementById("pontok").style.backgroundSize = "cover";
    document.getElementById("pontok").style.backgroundRepeat = "no-repeat";
}
function hatter(){
    document.getElementById("pontok").style.background = "url('img/kartyaalap.jpg')";
    document.getElementById("pontok").style.backgroundSize = "cover";
    document.getElementById("pontok").style.backgroundRepeat = "no-repeat";
}
function velszam(also, felso){
    return Math.floor(Math.random()*(felso-also+1)+also);
}
function Cellakfelotoltese(){
    for (let i = 0; i < 23; i++)
    {
        cellak[i] = {};
        cellak[i].type = "kártya";
        cellak[i].info = kartyAdatok[i];
    }
}


function alsoterTablazat(){
    let tablazat=document.createElement("table");
    tablazat.style.width = "70vw"
    var tr=document.createElement("tr")
    tr.style.width = "70vw";
    tr.style.display = "flex";
    for(let i = 1; i < 9; i++){
        let kep=document.createElement("img")
        let td = document.createElement("td");
        td.setAttribute("onclick", "varberkas(this)");
        td.style.width = "7vw";
        td.style.display = "flex";
        td.style.alignContent ="center";
        td.style.justifyContent ="center";
        td.id = i+"t";
        if(i<8){
            if(i<4){
                kep.src="img/var1.png"; 
                kep.dataset.ertek = 1
            }
            else if(i<6 && i>=4){
                kep.src="img/var2.png";
                kep.dataset.ertek = 2
            }
            else if(i==6){
                kep.src="img/var3.png";
                kep.dataset.ertek = 3
            }
            else if(i==7){
                kep.src="img/var4.png";
                kep.dataset.ertek = 4
            }
        }
        else{
            tr.appendChild(td)
            td.style.width = "7vw";
            td.id="kepid"
        }
        td.appendChild(kep)
        tr.appendChild(td)
    }
        tablazat.appendChild(tr);
        alsoter.appendChild(tablazat);
}

function adjalkartyat(){
    let i = velszam(1,23);
    let kep =document.createElement("img")
    if(click==0){
        document.getElementById("pontok").style.background = "url('img/kartyaeldob.png')";
        document.getElementById("pontok").style.backgroundSize = "cover";
        document.getElementById("pontok").style.backgroundRepeat = "no-repeat";
        let i = velszam(1,23);
        let kep = document.createElement("img")
        if(!indexek.includes(i)){
            indexek.push(i);
            vare = false;
            kep.src="img/"+i+".jpg";
            document.getElementById("kepid").appendChild(kep); 
            kep.dataset.ertek = kartyAdatok[i-1].value;
            click++;
            aktid = kep;
        }
        else{
            while(!indexek.includes(i)){
                i=velszam(1, 23)
            }
        }
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
            oszchrloposszeg += Number(kep[0].dataset.ertek);
        }
        console.log(oszloposszeg);
    }
}

function berakas2(oszlopdiv){
    let kepasd = document.createElement("img");
    let sordividvalue=0;
    if(oszlopdiv.id<=5){
        sordividvalue=1;
    }
    else if(oszlopdiv.id>=6 && oszlopdiv.id<=11){
        sordividvalue=2;
    }
    else if(oszlopdiv.id>=12 && oszlopdiv.id<=17){
        sordividvalue=3;
    }
    else if(oszlopdiv.id>=18 && oszlopdiv.id<=23){
        sordividvalue=4;
    }
    else if(oszlopdiv.id>=24 && oszlopdiv.id<=29){
        sordividvalue=5;
    }
    if(aktid!=0){
        kepasd  = aktid;
        if(vare == false){
            vare = true;
            kepasd.style.borderRadius = "44px";
        }
        else if(vare == true){
            vare = false;
            kepasd.dataset.ertek=kepasd.dataset.ertek*sordividvalue;
            let aktd = document.getElementById(aktidtd+"t");
            aktd.style.visibility = "hidden";
        }
        telivan++;
        if(telivan==30){
            soroszlopertek();
        }
        oszlopdiv.appendChild(kepasd);
        oszlopdiv.removeAttribute("onclick","berakas2(this)");
        let kepid=document.getElementById("kepid");
        kepid.innerHTML="";
        aktid, click=0;
        console.log(telivan);
        let kartyak = document.getElementById("pontok");
        kartyak.style.background = "url('img/kartyaalap.jpg')";
        kartyak.style.backgroundSize = "cover";
        kartyak.style.backgroundRepeat = "no-repeat";
    }
}

function varberkas(td){
    if(click==0){
        let a = td.id;
        aktidtd = a.slice(0,1);
        aktid=td.getElementsByTagName("img")[0];
        click++;
        vare = true;
        td.removeAttribute("onclick","varberkas(this)");
        td.style.background = "rgba(0,0,0,0.75)";
        td.style.borderRadius = "44px";
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