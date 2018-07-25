class Car{
    constructor(name, model, year, color, bodyType, engineSN, engineCapacity, power){
        this.name=name;
        this.model=model;
        this.year=year;
        this.color=color;
        this.bodyType=bodyType;
        this.engineSN=engineSN;
        this.engineCapacity=engineCapacity;
        this.power=power;
    }
}

let cars = [
    new Car("subaru", "wrx", 2010, "blue", "sedan", "ej204x", 2, 400),
    new Car("subaru", "legacy", 2007, "silver", "sedan", "ez30", 3, 250),
    new Car("subaru", "tribeca", 2011, "white", "jeep", "ej20", 2, 300),
    new Car("subaru", "leone", 1998, "yellow", "sedan", "ez20x", 2, 140),
    new Car("subaru", "impreza", 2014, "red", "sedan", "ej204x", 2, 200),
    new Car("subaru", "outback", 2014, "red", "hachback", "ej204", 2, 165),
    new Car("bmw", "115", 2013, "red", "hachback", "f15", 1.5, 120),
    new Car("bmw", "315", 2010, "white", "sedan", "f15", 1.5, 120),
    new Car("bmw", "650", 2009, "black", "coupe", "f60", 6, 350),
    new Car("bmw", "320", 2012, "red", "sedan", "f20", 2, 180),
    new Car("mercedes", "e200", 1990, "silver", "sedan", "eng200", 2, 180),
    new Car("mercedes", "e6.3", 2017, "yellow", "sedan", "amg6.3", 6, 400),
    new Car("mercedes", "c250", 2017, "red", "sedan", "eng25", 2.5, 230),
];

function showCar(arr) {
    let x=document.getElementById("root");
    x.innerHTML='';
    arr.map(function(arr){
        let name=arr.name;
        let model=arr.model;
        let year=arr.year;
        let color=arr.color;
        let body=arr.bodyType;
        let eSN=arr.engineSN;
        let eC=arr.engineCapacity;
        let power=arr.power;
        let table = document.createElement("tr");
        table.className="t1";
        table.innerHTML =
               `<th>${name}</th>
                <th>${model}</th>
                <th>${year}</th>
                <th>${color}</th>
                <th>${body}</th>
                <th>${eSN}</th>
                <th>${eC}</th>
                <th>${power}</th>`;
    document.getElementById("root").appendChild(table);
    });
}
function push(){
    let name=document.getElementById("ip1").value;
    let model=document.getElementById("ip2").value;
    let year=document.getElementById("ip3").value;
    let color=document.getElementById("ip4").value;
    let bt=document.getElementById("ip5").value;
    let eSN=document.getElementById("ip6").value;
    let eC=document.getElementById("ip7").value;
    let power=document.getElementById("ip8").value;
    let x=new Car(name, model, year, color, bt, eSN, eC, power);
    cars.push(x);
    showCar(cars);
}
function showFiltered(arr) {
    let x=document.getElementById("root2");
    x.innerHTML='';
    arr.map(function(arr){
        let name=arr.name;
        let model=arr.model;
        let year=arr.year;
        let color=arr.color;
        let body=arr.bodyType;
        let eSN=arr.engineSN;
        let eC=arr.engineCapacity;
        let power=arr.power;
        let table = document.createElement("tr");
        table.className="t1";
        table.innerHTML =
            `<th>${name}</th>
                <th>${model}</th>
                <th>${year}</th>
                <th>${color}</th>
                <th>${body}</th>
                <th>${eSN}</th>
                <th>${eC}</th>
                <th>${power}</th>`;
        document.getElementById("root2").appendChild(table);
    });
}
function filterName(arr){
    let y = document.getElementById("name").value;
    let mas = arr.filter(function(elem){
        if(elem.name === y){
            return elem
        }
    });
    showFiltered(mas);
}

function filterCar(){
    filterName(cars)
}
