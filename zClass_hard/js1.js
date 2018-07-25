class SlotMachine {
    constructor(moneyInMachine){
        this.moneyInMachine=moneyInMachine;
    }
    showMoneyInMachine(){
        console.log(this.moneyInMachine);
        return this.moneyInMachine
    }
    takeMoneyFromMachine(sum){
        this.moneyInMachine-=sum;
        return this.moneyInMachine;
    }
    addMoneyToMachine(sum){
        this.moneyInMachine+=sum;
        return this.moneyInMachine;
    }
    play(sum){

        // console.log(this.moneyInMachine);
        if (sum>this.moneyInMachine){
            console.log("wrong sum");
        }
        // this.moneyInMachine += sum;
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        let z = Math.floor(Math.random() * 9);
        console.log(x+"   "+y+"    "+z);
        if(x===y || y===z || x===z){
            console.log("Win x2____"+sum*2);
            this.moneyInMachine += sum*2;
            // this.moneyInMachine -= sum;
        }else if(x===y===z){
            console.log("Win x5____"+sum*5);
            this.moneyInMachine += sum*5;
            // this.moneyInMachine -= sum;
        }else{
            this.moneyInMachine -= sum;
            console.log("LOST"+sum);
        }
        if (this.moneyInMachine<=0){
            console.log('LOST......The end');
        }
    }
}
class Casino{
    constructor(slotMachinesNum, money){
        this.slotMachinesNum=slotMachinesNum;
        this.money=money;
        this.masMachines=[];
    }
    machinesCreate(){
        let oneMachineMoney=Math.floor(this.money / this.slotMachinesNum);
        for (let i = 0; i < this.slotMachinesNum; i++) {
            this.masMachines.push(new SlotMachine(oneMachineMoney))
        }
        this.masMachines[0].moneyInMachine += this.money % this.slotMachinesNum;
        console.log(this.masMachines);
        return this.masMachines;
    }
    showMoney(){
        return this.money;
    }
    showMachines(){
        return this.masMachines;
    }
    addMachine(){
        let max=0;
        for (let i = 0; i < this.masMachines.length; i++) {
            if(max<this.masMachines[i].moneyInMachine){
                max=this.masMachines[i].moneyInMachine;
            }
            if(max===this.masMachines[i].moneyInMachine){
                this.masMachines[i].moneyInMachine=max/2;
            }
        }
        let x=(max/2);
        this.masMachines.push(new SlotMachine(x));
    }
    deleteMachine(x){
        let money=this.masMachines[x].moneyInMachine;
        this.masMachines.splice(x,1);
        for (let i = 0; i < this.masMachines.length; i++) {
         this.masMachines[i].moneyInMachine +=Math.floor(money / this.masMachines.length);
        }
    }
    takeMoney(sum){
        let max=0;
        let min=0;
        for (let i = 0; i < this.masMachines.length; i++) {
            if (max < this.masMachines[i].moneyInMachine) {
                max = this.masMachines[i].moneyInMachine;
            }
            if (min > this.masMachines[i].moneyInMachine) {
                min = this.masMachines[i].moneyInMachine;
            }
            if (max === this.masMachines[i].moneyInMachine) {
                this.masMachines[i].moneyInMachine -= sum;
            }
            if (min === this.masMachines[i].moneyInMachine) {
                this.masMachines[i].moneyInMachine += sum;
            }
        }
    }

}
let a=new Casino(3, 1000);
a.machinesCreate();