function Apple(type){
    this.type=type;
    this.color;
    this.getInfo=function(){
        return this.type + " " + this.color;
    }
    this.setType=function(type){
        this.type=type;
    }
    this.setColor=function(color){
        this.color=color;
    }
}

let apple1=new Apple("tao1");
apple1.setColor("yellow");
document.write(apple1.getInfo());
let apple2=new Apple("tao2");
apple2.setColor("blue");
apple2.setType("Tao thu 2");
document.write(apple2.getInfo());
