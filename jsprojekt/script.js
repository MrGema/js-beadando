var div = document.getElementById("divi")
var table=document.createElement("table")
for (let index = 0; index <6; index++) {
    var tr=document.createElement("tr")
    table.appendChild(tr)
    for (let index = 0; index < 5; index++) {
        var td=document.createElement("td")
        var img=document.createElement("img")
        img.src="img/"+(Math.floor(Math.random()*23)+1)+".png"
        img.style.width="100px"
        img.style.height="100px"
        img.alt="KEP"
        img.title="kep"
        td.appendChild(img)
        tr.appendChild(td)

    }
}
div.appendChild(table)