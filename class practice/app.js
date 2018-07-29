console.log("i am working");
class Fighter {
    constructor(name, attack, hitpoints){
        this.name = name;
        this.attack = attack;
        this.hitpoints = hitpoints;
        this.totalHitpoints = hitpoints;
        if (this.hitpoints > this.totalHitpoints){
            this.hitpoints = this.totalHitpoints;
        }
    }
    geetHitpoints(){
        return this.hitpoints;
    }
    setHitpoints(set){
        this.hitpoints = set;
    }
    getTotalHitpoints(){
        return this.totalHitpoints;
    }
    setTotalHitpoints(set){
        this.totalHitpoints = set;
    }
    getAtack(){
        return this.attack;
    }
    setAttack(set){
        this.attack = set;
    }
    fight(obj){
        if (this.type === "Champion") {
            if (obj.isAlive()) {
                obj.hitpoints -= this.attack;
                this.attack += 1;
            }else{
                console.log(`${obj.name}`+" dead!!!");
            }
        }
        if (this.type === "Monster"){
            if (this.dblDamage > 0){
                if (obj.isAlive()) {
                    obj.hitpoints -= this.attack*2;
                    this.dblDamage -=1;
                }else{
                    console.log(`${obj.name}`+" dead!!!");
                }
            }else{
                if (obj.isAlive()) {
                    obj.hitpoints -= this.attack;
                }else{
                    console.log(`${obj.name}`+" dead!!!");
                }
            }
        }
    }
    isAlive(){
        if (this.hitpoints > 0){
            return true;
        } else {
            return false;
        }
    }
}
class Monster extends Fighter{
    constructor(name, attack, hitpoints){
        super(name, attack, hitpoints);
        this.dblDamage = 0;
        this.type = "Monster"
    }
    enrage(){
        this.dblDamage = 2
    }
}
class Chempion extends Fighter {
    constructor(name, attack, hitpoints){
        super(name, attack, hitpoints);
        this.def = 0;
        this.type = "Champion";
    }
    rest(){
        this.setHitpoints(this.hitpoints + 5)
    }
    defence(){
        this.def = 1
    }

}
let mon = new Monster("egwg", 15, 60);
let ch = new Chempion("wefweg", 10, 100);