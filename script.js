const docHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
const docWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);

const canvas=document.getElementById("canvas");
canvas.width=docWidth*0.7
canvas.height=docHeight*0.975
const context = canvas.getContext("2d");

const dots = [];

let G_value=6.67;
let G_power=-8;
let minDist=5;
let maxDist=50;
let friction=0.9999;

let C_value = 9;
let C_power=-6;

let temperature=1;

class Dot{
    constructor(x, y, mass, color, size, charge){
        this.x=x;
        this.y=y;
        this.speedX=0;
        this.speedY=0;
        this.mass=mass;
        this.color=color;
        this.size=size;
        this.charge=charge;
    }
    render(cameraX, cameraY, cameraSize){
        context.drawCircle(this.color, (this.x-cameraX)*cameraSize, (this.y-cameraY)*cameraSize, cameraSize*this.size);
    }
    tick(tps){
        this.x+=this.speedX/tps*temperature;
        if (this.x>105)
            this.x=5;
        if (this.y<5)
            this.x=105;
        this.y+=this.speedY/tps*temperature;
        if (this.y>85)
            this.y=5;
        if (this.y<5)
            this.y=85;
        this.speedX*=Math.pow(friction,1/tps);
        this.speedY*=Math.pow(friction,1/tps)
    }
}

let currentTick=null;

const calculateForces=function(dots, tps){
    if(dots.length<2)return;
    for(let i=0;i<dots.length;i++){
        const doti=dots[i]
        if(doti==null)continue;
        for(let j=i+1;j<dots.length;j++){
            const dotj=dots[j]
            if(dotj==null)continue;
            const r=getDistance(doti.x, doti.y, dotj.x, dotj.y);
            const d=getDir(doti.x, doti.y, dotj.x,dotj.y);
            if(r<doti.size+dotj.size){
                const centerX=(doti.x+dotj.x)/2;
                const centerY=(doti.y+dotj.y)/2;
                dotj.x=centerX+Math.sin(d)*(doti.size+dotj.size+1)/2;
                dotj.y=centerY-Math.cos(d)*(doti.size+dotj.size+1)/2;
                doti.x=centerX-Math.sin(d)*(doti.size+dotj.size+1)/2;
                doti.y=centerY+Math.cos(d)*(doti.size+dotj.size+1)/2;
                context.drawLine("#000000", dotj.x*cameraSize, dotj.y*cameraSize, (doti.x-dotj.x)*cameraSize, (doti.y-dotj.y)*cameraSize, 10)
            }
            if(r<minDist||r>maxDist)continue;


            const gravity=G_value*Math.pow(10, G_power)*doti.mass*dotj.mass/Math.pow(r, 2);
            doti.speedX+=Math.sin(d)*gravity/tps;
            doti.speedY+=Math.cos(d)*gravity/tps;
            dotj.speedX-=Math.sin(d)*gravity/tps;
            dotj.speedY-=Math.cos(d)*gravity/tps;

            const coulomb=C_value*Math.pow(10, C_power)*doti.charge*doti.charge/Math.pow(r, 2);
            doti.speedX-=Math.sin(d)*coulomb/tps;
            doti.speedY-=Math.cos(d)*coulomb/tps;
            dotj.speedX+=Math.sin(d)*coulomb/tps;
            dotj.speedY+=Math.cos(d)*coulomb/tps;
        }
    }
}

let cameraSize=10;
let cameraX=0,cameraY=0;

const tick = function(tps){
    context.drawRect("#f5f5f5", 0, 0, docWidth, docHeight)
    for(let i in dots){
        let dot = dots[i]
        dot.render(cameraX, cameraY, cameraSize);
    }
    for(let i in dots){
        let dot = dots[i];
        dot.tick(tps);
    }
    calculateForces(dots, tps)
    currentTick=setInterval(tick, 1000/tps, tps)
}


const generateRandomDots=(N, rweight=-1)=>{

    for(let i=0;i<N;i++){
        let weight;
        if(rweight==-1)weight=randomFloat(0.1, 100);
        else weight=rweight
        let charge=randomFloat(-10, 10);
        dots.push(new Dot(randomFloat(0, 100), randomFloat(0, 100), weight, rgbToHex(255-Math.round((charge+10)/20*255), 0, Math.round((charge+10)/20*255)), Math.pow(weight, 1/8), charge))
    }
}


generateRandomDots(50, 1)
tick(50);

const G_value_range=document.getElementById("G-value-range");
const G_value_num=document.getElementById("G-value-number");
if(G_value_range){
    G_value_range.value=G_value;
    G_value_range.addEventListener("change", (e)=>{
        G_value=parseInt(e.target.value);
        G_value_num.value=e.target.value;
    });
}
if(G_value_num){
    G_value_num.value=G_value;
    G_value_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value)&&parseFloat(e.target.value)>0)
        G_value=parseInt(e.target.value);
        G_value_range.value=e.target.value;
    });
}