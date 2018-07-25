$("#btn0").click(()=>{
    $("#text").remove();
});
$("#btn1").click(() =>{
    $("#btn1").remove()
});
$("#btn2").click(() =>{
    $("#conf").remove();
    let age = $("#age").val();
    let confirm = $("<h1>");
    confirm.attr("id", "conf");
    console.log(age);
    if (age<18){
        confirm.text("Your age is less than 18")
    } else{
        confirm.text("Everything is Ok")
    }
    $("#textPlace").append(confirm)
});
// $("#size").change(() => {
//    $("#redBlock").css("width", $("#size").val())
// });
let size = document.getElementById("size");
let redBox = document.getElementById("redBlock");
size.oninput = function () {
    redBox.style.width = size.value + "px"
};
// $("#btn3").click(() => {
//     let showBtn = $("#btn3");
//     let list = $(`    <ul id="qwe">
//         <li>ewfewfewfwfwf</li>
//         <li>wfwfwfwfwfw</li>
//         <li>wfwfwfwwfwf</li>
//         <li>fwfwfwfwfwfw</li>
//         <li>wfwfwfwfwwfwfw</li>
//     </ul>`)
//     list.css("list-style", "none");
//     $("#list").append(list);
//     let hideBtn = $(`<button id="btn4">Hide</button>`);
//     showBtn.replaceWith(hideBtn);
//     $('#btn4').click(() =>{
//         $("#qwe").remove();
//         hideBtn.replaceWith(showBtn);
//     });
// });
$("#changeText").dblclick(() =>{
    let changeText = $("#changeText");
    let input = $('<input type="text" id="change">');
    changeText.replaceWith(input);
    input.focus();
    input.blur(() =>{
        changeText.text(input.val());
        input.replaceWith(changeText);
    });
});
let qwe = $("#qwe");
let pos = 0;
qwe.css("display", "none");
$("#btn3").click(() =>{
    if (pos === 1){
        qwe.css("display", "none");
        pos = 0
    }
    else{
        qwe.css("display", "block");
        pos = 1
    }
});
// let zxcList = document.getElementsByClassName("zxc");
// for (let i = 0; i < zxcList.length; i++) {
//     let btn = document.createElement("button");
//     btn.innerText = "Remove";
//     btn.setAttribute("class", "rem");
//     zxcList[i].appendChild(btn);
// }
// let remList = document.getElementsByClassName("rem");
// for (let i = 0; i < remList.length+1; i++) {
//     remList[i].onclick = function () {
//         // zxcList[i].innerHTML = '';
//         zxcList[i].remove();
//     }
// }
let els =[];
function rec(element){
    els.push(element);
    if (element.children){
        for (let child  of element.children) {
            rec(child)
        }
    }else{
        rec(element.nextElementSibling)
    }
}
rec(document.body);
console.log(els);
console.log("_____________");
let iterationNum = 0;
$("#next").click(() =>{
    console.log(els[iterationNum]);
    iterationNum +=1;
    if (iterationNum > els.length){
        iterationNum = els.length;
        console.log("NO MORE ELEMENTS =====>>>>>");
    }
});
$("#prev").click(() =>{
    console.log(els[iterationNum-2]);
    iterationNum -=1;
    if (iterationNum < 0){
        iterationNum = 0;
        console.log("NO MORE ELEMENTS <<<<<<<=======");
    }
});
$("#create").click(() =>{
    $("#dynamicTable").html("");
    let rowQan = $("#row").val();
    let colQan = $("#col").val();
    for (let i = 0; i < rowQan; i++) {
        let row = $("<tr>");
        for (let j = 0; j < colQan; j++) {
            let col = $("<td>");
            col.text("ergegerh");
            row.append(col);
            function fin() {
                change(col);
            }
            col.click(fin);
        }
        $("#dynamicTable").append(row);
    }
});

function change(col) {
    let input = $(`<input type="text">`);
    col.replaceWith(input);
    input.css({
        "width" : "20%",
        "margin" : "0",
    });
    input.focus();
    input.blur(()=>{
        col.text(input.val());
        input.replaceWith(col)
    });
}
