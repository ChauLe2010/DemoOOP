function Car(name,color,model){
    this.name=name;
    this.color=color;
    this.model=model;
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
carFer.display();
carBMW.display();
carFer.start();
carBMW.start();
carFer.stop();
document.write("<br>"+carFer.name);

