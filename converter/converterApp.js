// let btnBuy = document.getElementById("buy");
// let btnSell = document.getElementById("sell");
// btnBuy.onclick = function () {
//     document.getElementById("place").innerText ="buy"
// };
// btnSell.onclick = function () {
//     document.getElementById("place").innerText ="sell"
// };
// document.onmousedown = function () {
//     document.onmousemove = function (e) {
//         console.log(e.clientX, e.clientY)
//     }
// };
// document.onmouseup = function () {
//     document.onmousemove = null;
// };
// console.log(1);
// console.log(2);
// try {
//     throw new Error("esfewgweg");
// }catch (e) {
//     console.log(e)
// }
// setTimeout(function () {
//     console.log("ergerherh");
// },5000);
// console.log(3);
// function add(a, b , call){
//     setTimeout(function(){
//         console.log("in add");
//         console.log(a + b);
//         call(a+b);
//     }, 500);
//     return(a-b);
// }
// add(5, 5, function (res) {
//     console.log("in main");
//     console.log(res);
// });
// let x = add(10, 5);
// console.log("_________");
// console.log(x);
// function hello(call) {
//     setTimeout(function () {
//         call("hello")
//     },500)
// }
// function world(call){
//     setTimeout(function () {
//         call("world")
//     },500)
// }
// hello(function (hello) {
//     console.log(hello);
//     world(function (world) {
//         console.log(world);
//     });
// });
// function hello() {
//     return new Promise(function (resolve, reject){
//         setTimeout(function () {
//             resolve("hello")
//         },600)
//     })
// }
// function world() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("world ")
//         },500)
//     })
// }
// let helloP = hello();
// let worldP = world();
// helloP.then(function (res) {
//     console.log(res);
//     return worldP
// }).then(function (res) {
//     console.log(res);
// });

// worldP.then(function (res) {
//     console.log(res);
// });
// Promise.all([helloP, worldP]).then(function (arr) {
//     console.log(arr[0]);
//     console.log(arr[1]);
// });
// function generate() {
//     return new Promise(function (resolve, reject){setTimeout(function () {
//         let num = Math.floor(Math.random()*100);
//         resolve(num)
//     },1000)})
// }
// async function generateArr(length){
//     let arr =[];
//     for (let i = 0; i < length; i++) {
//         let num = await generate();
//         arr.push(num)
//     }
//     return arr
//     // console.log(arr);
// }
// generateArr(10).then(function (arr) {
//     console.log(arr);
// });
function convert(obj, ident){
    let val = document.getElementById("sum").value;
    if (val<0){
        throw new Error("value < 0")
    }
    let typeArrIn = document.getElementById("typeIn");
    let typeIn = typeArrIn[typeArrIn.selectedIndex].value;
    let oneObjIn = obj.filter(function (el) {
        if (el.ccy === typeIn){
            return obj
        }
    });
    let res = 0;
    let typeArrOut = document.getElementById("typeOut");
    let typeOut = typeArrOut[typeArrOut.selectedIndex].value;
    let oneObjOut = obj.filter(function (el) {
        if (el.ccy === typeOut){
            return obj
        }
    });
    if (typeOut === "UAH"){
        if (ident === 0){
            res = val*+oneObjIn[0].buy;
        }
        if (ident === 1){
            res = val*+oneObjIn[0].sale;
        }
        document.getElementById("description").innerText = `${val} ${oneObjIn[0].ccy} ==>`;
        document.getElementById("resTarget").innerText = `${res} UAH`;
    }else{
        if (ident === 0){
            res = val*+oneObjIn[0].sale;
            res = res/oneObjOut[0].sale;
        }
        if (ident === 1){
            res = val*+oneObjIn[0].buy;
            res = res/oneObjOut[0].buy;
        }
        document.getElementById("description").innerText = `${val} ${oneObjIn[0].ccy} ==>`;
        document.getElementById("resTarget").innerText = `${res} ${oneObjOut[0].ccy}`;
    }
}
let myJson = fetch( "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(function (res) {
    return res.json()
});
myJson.then(function (all) {
    document.getElementById("sell").onclick = function () {
        convert(all, 0);
        console.log($("#sum").val());
    };
    document.getElementById("buy").onclick = function () {
        convert(all, 1);
        console.log($("#sum").val());
    };

});
