// $("button").click(function () {
//    tanks.map(function tankList(tank){
//        console.log(tank)
//    });
// });
function tanksList(tanks) {
    $("#root").html("");
    tanks.map(function (tank){
        let $link = $("<a>");
        $link.addClass("main")
            .attr("href", "#"+tank.id);
        let $block = $("<div></div>");
        // $block.attr("onclick", "foo()");
        let $name = $("<p>");
            $name.text(tank.model);
        let $prew = $("<img>");
            $prew.attr("src", tank.preview)
                .attr("class", "prew_Im");
        let $country = $("<p>");
            $country.text(tank.country)
                .css({"display" : "inline-block",
                    "float" : "left",
                    "margin" : "0 10px"
                });
        let $c_im = $("<img>");
            $c_im.attr("src", tank.country_image)
                .css({
                    "margin" : "0 15px",
                    "float" : "right"
                });
        let $level = $("<p>");
        $block.append($name);
        $block.append($level);
        $block.append($prew);
        $block.append($country);
        $block.append($c_im);
        $link.append($block);
        $("#root").append($link);
    });
}
$("#button").click(
    function () {
        tanksList(tanks);
        $("#button").remove();
    }
);
// function foo() {
//     console.log(tanks);
//     tankInfo(tanks[0]);
// }
function tankInfo(tank){
    console.log(tank.model);
    $("#root").html("");
    let $prewText=$("<h2>");
        $prewText.text("Tank preview")
                .css("font-style", "italic");
    let $block = $("<div>");
        $block.addClass("Info");
    let $c_im = $("<img>");
        $c_im.attr("src", tank.country_image);
    let $name = $("<h2>");
        $name.text(tank.model+" (Level :"+tank.level+")");
    let $preview = $("<img>");
    let $preview1 = $preview;
        $preview1.addClass("mainImg")
                .attr("src", tank.preview);
    let $table = $('<table>');
    for (let i = 0; i < 5; i++) {
        let $tr=$("<tr>");
        for (let j = 0; j < 2; j++) {
            let $td=$("<td>");
            if (j===0){
                $td.text(Object.keys(tank.details)[i]);
            }
            else{
                console.log(tank.details[Object.keys(tank.details)[i]]);
                $td.text(tank.details[Object.keys(tank.details)[i]])
            }
            $tr.append($td);
        }
        $table.append($tr)
    }
    console.log($table);
    $block.append($prewText, $c_im, $name, $preview1);
    $("#root").append($block, $table)
}
function findById(id){
    function find(tank) {
        if (tank.id === id){
            return true
        }
    }
    return tanks.filter(find)[0];
}
function clearTankList(){
    $("root").html("");
}
window.addEventListener("hashchange", function () {
    clearTankList();
    if (window.location.hash === ""){
        clearTankList();
       tanksList(tanks);
    }else{
       let tankName = location.hash.split("#");
       tankInfo(findById(tankName[1]))
    }
});