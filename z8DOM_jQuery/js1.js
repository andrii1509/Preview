$("div").css({
    "background": "silver",
    "text-align": "center",
    "padding": "50px",
});
$("#consLog").click(function () {
    let x = ($("#inputConsole")).val();
    console.log(x);
});
$("#createTable").click(function () {
    let rowN = +$("#tRow").val();
    let columnN = +$("#tColumn").val();
    let table = $("#table1");
    table.html("");
    table.css({
       "text-align": "center",
       "border": "2px solid black"
    });
    for (let i = 0; i < rowN; i++) {
        let row = $("<tr></tr>");
        for (let j = 0; j < columnN; j++) {
            let columnData=$("<td></td>").text("r: "+(i+1)+" c: "+ (j+1));
            row.append(columnData)
        }
        table.append(row);
    }
});
$("#consLog2").click(function () {
    let masEl = $(".inputToConsole");
    console.log("First input:" + masEl[0].value);
    console.log("Second input:" + masEl[1].value);
    console.log("Third input:" + masEl[2].value);
    console.log("Fourth input:" + masEl[3].value)
});
$("form").css({
    "border": "1px solid black",
    "margin": "0 15%",
    "padding": "20px"
});

function create(id, rowN, colN){
    let table=document.createElement('table');
    for (let i = 0; i < rowN; i++) {
        let tR=document.createElement("tr");
        table.appendChild(tR);
        for (let j = 0; j < colN; j++) {
            let tD=document.createElement("td");
            tD.innerText="esrgverg";
            tR.appendChild(tD);
        }
    }
    console.log(table);
    document.getElementById(id).appendChild(table);
}
window.onload = function(){
    create("qwe", 5, 3);
    create("asd", 5, 3);
    create("zxc", 5, 3);
};
