function Car(name,color,model){
    this.name=name;
    this.color=color;
    this.model=model;
    this.getName=function(){
        return this.name;
    }
    this.getColor=function () {
        return this.color;
    }
    this.getModel=function () {
        return this.model;
    }
    this.setName=function (name) {
        this.name=name;
    }
    this.setColor=function (color) {
        this.color=color;
    }
    this.setModel=function (model) {
        this.model=model;
    }

    this.start=function(){
        document.write("<br>Khoi dong xe");
    }
    this.stop=function(){
        document.write("<br>Dung xe");
    }
    this.display=function(){
        document.write("<br>"+this.name+" "+this.color+" "+this.model);
    }
}
let carFer=new Car("Nguyen","blue","Fer");
let carBMW=new Car("Quan","pink","BMW");

document.write("<br>"+carFer.name);
//carFer.name="Audi";
carFer.setName("Audi");
document.write("<br>"+carFer.getName());
