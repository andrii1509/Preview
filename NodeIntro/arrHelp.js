function pr(arr){
    arr = Array.isArray(arr) ? arr : [];
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i} - ${arr[i]}`);

    }
}
module.exports.pr = pr;
function add(a , b) {
    return a+b
}
module.exports.add = add;