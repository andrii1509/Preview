$("#qwe").click(function () {
    console.log("ergerherh");
    let x = $("#asd").val();
    console.log(x)
});
// $("#asd").input(function () {
//     console.log($("#asd").val())
// });
let x = document.getElementById("asd");
x.oninput = function () {
    console.log(x.value)
};
let el = document.getElementById("zxc");
    el.onmousedown = function (e1) {
        document.onmousemove = function(e2){
            console.log(e2.clientY, e2.clientX);
            el.style.top = e2.clientY - e1.clientY + "px";
            el.style.left = e2.clientX - e1.clientX + "px";
        }
    };
    el.onmouseup = function () {
        // x.style.position = "relative";
        document.onmousemove = false;
    };

let p = document.createElement("p");
    p.innerText = "ergerg";
    document.body.appendChild(p);
    p.ondblclick = function () {
        let input = document.createElement("input");
        p.replaceWith(input);
        input.focus();
        input.onblur = function () {
            p.innerText = input.value;
            input.replaceWith(p);
        }
    };

let classEls =[];
let idEls = [];
function rec(element){
    if (element.hasAttribute("class")){
        classEls.push(element)
    }
    if (element.hasAttribute("id")){
        idEls.push(element)
    }
    if (element.children){
        for (let child  of element.children) {
            rec(child)
        }
    }else{
        rec(element.nextElementSibling)
    }
}
rec(document.body);
console.log(classEls);
console.log("_____________");
console.log(idEls);
