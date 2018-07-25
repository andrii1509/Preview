let db = firebase.firestore();
// let arr;
// arr = [
//     ["subaru", "wrx", 2010, "blue", "sedan", "ej204x", 2, 400],
//     ["subaru", "legacy", 2007, "silver", "sedan", "ez30", 3, 250],
//     ["subaru", "tribeca", 2011, "white", "jeep", "ej20", 2, 300],
//     ["subaru", "leone", 1998, "yellow", "sedan", "ez20x", 2, 140],
//     ["subaru", "impreza", 2014, "red", "sedan", "ej204x", 2, 200],
//     ["subaru", "outback", 2014, "red", "hachback", "ej204", 2, 165],
//     ["bmw", "115", 2013, "red", "hachback", "f15", 1.5, 120],
//     ["bmw", "315", 2010, "white", "sedan", "f15", 1.5, 120],
//     ["bmw", "650", 2009, "black", "coupe", "f60", 6, 350],
//     ["mercedes", "e200", 1990, "silver", "sedan", "eng200", 2, 180],
//     ["bmw", "320", 2012, "red", "sedan", "f20", 2, 180],
//     ["mercedes", "e6.3", 2017, "yellow", "sedan", "amg6.3", 6, 400],
//     ["mercedes", "c250", 2017, "red", "sedan", "eng25", 2.5, 230]
// ];
// let cars = db.collection("cars");
// for (let i = 0; i < arr.length; i++) {
//     cars.add({
//         name : arr[i][0],
//         model : arr[i][1],
//         year : arr[i][2],
//         color : arr[i][3],
//         body : arr[i][4],
//         engModel : arr[i][5],
//         engCapacity : arr[i][6],
//         power : arr[i][7]
//     })
// }
$(".bShow")[0].onclick = show;
function show(){
    $("#content2").css("padding", "30px 0")
                .html("");
    let carArr=[];
    let table = $("<table>");
    table.html("");
    db
        .collection("cars")
        .get()
        .then((docs) =>{
            docs.forEach(doc =>{
                carArr.push(doc.data())
            });
            for (let i = 0; i < carArr.length; i++) {
                let tr = $("<tr>");
                let keys = Object.keys(carArr[i]);
                for (let j = 0; j < 8; j++) {
                    let td = $("<td>");
                    td.text(carArr[i][keys[j]]);
                    tr.append(td)
                }
                table.append(tr);
            }
            $("#content2").append(table);
        });
}
$(".bFilterOn")[0].onclick = function () {
    $("#content1").html("")
        .css("padding", "30px 0");
    let el = $(`<form action="" name="filter">
        <input type="text" name="name" placeholder="name" value="">
        <input type="text" name="model" placeholder="model">
        <input type="text" name="year" placeholder="year">
        <input type="text" name="blue" placeholder="color">
        <input type="text" name="body" placeholder="body type">
        <input type="text" name="eModel" placeholder="engine model">
        <input type="text" name="eCap" placeholder="engine capacity">
        <input type="text" name="power" placeholder="power">
    </form>
    <button class="button1 bFilter">Filter</button>`);
    $("#content1").append(el);
    $(".bFilter")[0].onclick = function () {
        let allInputs = $("form :input");
        let name = allInputs[0].value;
        let model = allInputs[1].value;
        let year = +allInputs[2].value;
        let color = allInputs[3].value;
        let body = allInputs[4].value;
        let eMod = allInputs[5].value;
        let eCap = +allInputs[6].value;
        let power = +allInputs[7].value;
        let filterArr=[];
        let mas=[];
        db
            .collection("cars")
            .get()
            .then(docs =>{
               docs.forEach(doc=>{
                   filterArr.push(doc.data())
               });
                    mas = filterArr.filter(function (elem) {
                        if (elem.name === name) {
                            return elem
                        }
                    });
                if (name!=""){
                    mas = filterArr.filter(arr=>{
                        if(arr.name===name){
                            return arr
                        }
                    })
                }
                    if (model!=""){
                        mas = filterArr.filter(arr=>{
                            if(arr.model===model){
                                return arr
                            }
                        })
                    }
                    if(year!=""){
                        mas=filterArr.filter(arr=>{
                            if(+arr.year===year){
                                return arr
                            }
                        })
                    }
                    if(color!=""){
                        mas=filterArr.filter(arr=>{
                            if(arr.color===color){
                                return arr
                            }
                        })
                    }
                    if(body!=""){
                        mas=filterArr.filter(arr=>{
                            if(arr.body===body){
                                return arr
                            }
                        })
                    }
                    if(eMod!=""){
                        mas=filterArr.filter(arr=>{
                            if(arr.engModel===eMod){
                                return arr
                            }
                        })
                    }
                    if(eCap!=""){
                        mas=filterArr.filter(arr=>{
                            if(+arr.engCapacity===eCap){
                                return arr
                            }
                        })
                    }
                    if(power!=""){
                        mas=filterArr.filter(arr=>{
                            if(+arr.power===power){
                                return arr
                            }
                        })
                    }
                console.log(mas);
                $("#content2").html("");
                mas.map(elem =>{
                    let keys=Object.keys(elem);
                    console.log(keys);
                    let container = (`<div class="container">
                        <h3>${elem.name} Model: ${elem.model}</h3>
                        <img src="img/car_prew.jpg" alt="">
                        <table>
                            <tr>
                                <td>Year:</td>
                                <td>${elem.year}</td>
                            </tr>
                            <tr>
                                <td>color:</td>
                                <td>${elem.color}</td>
                            </tr>
                            <tr>
                                <td>body:</td>
                                <td>${elem.body}</td>
                            </tr>
                            <tr>
                                <td>engine model:</td>
                                <td>${elem.engModel}</td>
                            </tr>
                            <tr>
                                <td>engine capacity:</td>
                                <td>${elem.engCapacity}</td>
                            </tr>
                            <tr>
                                <td>Power:</td>
                                <td>${elem.power}</td>
                            </tr>
                        </table>
                        </div>`);
                    $("#content2").append(container)
                })
            });
    };

};
$(".bAdd")[0].onclick = function () {
    $("#content1").html("")
        .css("padding", "30px 0");
    let el = $(`<form action="" name="filter">
        <input type="text" name="name" placeholder="name" value="">
        <input type="text" name="model" placeholder="model">
        <input type="text" name="year" placeholder="year">
        <input type="text" name="blue" placeholder="color">
        <input type="text" name="body" placeholder="body type">
        <input type="text" name="eModel" placeholder="engine model">
        <input type="text" name="eCap" placeholder="engine capacity">
        <input type="text" name="power" placeholder="power">
    </form>
    <button class="button1 bAddCar">Add</button>`);
    $("#content1").append(el);
    $(".bAddCar")[0].onclick = function () {
        let allInputs = $("form :input");
        let name = $("input")[0].value;
        let model = allInputs[1].value;
        let year = allInputs[2].value;
        let color = allInputs[3].value;
        let body = allInputs[4].value;
        let eMod = allInputs[5].value;
        let eCap = allInputs[6].value;
        let power = allInputs[7].value;
        console.log(name, model, year);
        let cars = db.collection("cars");
            cars.add({
                name : name,
                model : model,
                year : year,
                color : color,
                body : body,
                engModel : eMod,
                engCapacity : eCap,
                 power : power
            })
                .then(function () {
                        let el = $("<h3>");
                        el.text("Your car is added successful!");
                        $("#content1").append(el);
                        show();
                    }
                );
    };
};
