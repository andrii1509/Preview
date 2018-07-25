function max(){
    let arr=[];
    arr[0] = document.getElementById("n1").value;
    arr[0]=+arr[0];
    arr[1] = document.getElementById("n2").value;
    arr[1]=+arr[1];
    arr[2] = document.getElementById("n3").value;
    arr[2]=+arr[2];
    let res=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (res<arr[i]){
            res=arr[i]
        }
    }
    return document.getElementById("res").innerHTML = `Result: ${res}`;
}
function min(){
    let arr=[];
    arr[0] = document.getElementById("n1").value;
    arr[0]=+arr[0];
    arr[1] = document.getElementById("n2").value;
    arr[1]=+arr[1];
    arr[2] = document.getElementById("n3").value;
    arr[2]=+arr[2];
    let res=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (res>arr[i]){
            res=arr[i]
        }
    }
    return document.getElementById("res").innerHTML = `Result: ${res}`;
}

function arrMaxMin(){
    let masInput = document.getElementById("arrEl").value;
    let arr = masInput.split(' ');
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] =+arr[i];
        if (max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i]
        }
    }
    document.getElementById("array").innerHTML = `Your array: ${arr}`;
    document.getElementById("res2").innerHTML = `Max value: ${max}`;
    document.getElementById("res3").innerHTML = `Min value: ${min}`;
    return min
}
function callB(){
    let masInput = document.getElementById("arr2El").value;
    let arr = masInput.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    function arrPrint() {
        document.getElementById("result").innerHTML = `Your arr: [${arr}]`;
    }
    function maxEl(arr){
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(max<arr[i]){
                max=arr[i]
            }
        }
        document.getElementById("result").innerHTML = `Result: ${max}`;
    }
    function minEl(arr){
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(min>arr[i]){
                min=arr[i]
            }
        }
        document.getElementById("result").innerHTML = `Result: ${min}`;
    }
    function sortUp(arr1, arr2){
        return arr1 - arr2
    }

    function sortDown(arr1, arr2){
        return arr2 - arr1
    }
    function srt(arr, foo){
        arr.sort(foo);
    }
    if(document.getElementById("radio3").checked){
        minEl(arr);
    }else if(document.getElementById("radio2").checked){
        maxEl(arr);
    }else if(document.getElementById("radio1").checked){
        arrPrint(arr);
    }else if(document.getElementById("radio4").checked){
        srt(arr, sortUp);
        document.getElementById("result").innerHTML = `Result: [${arr}]`
    }else if(document.getElementById("radio5").checked) {
        srt(arr, sortDown);
        document.getElementById("result").innerHTML = `Result: [${arr}]`
    }
}