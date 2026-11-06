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
        G_value=parseFloat(e.target.value);
        G_value_range.value=e.target.value;
    });
}
const G_power_range=document.getElementById("G-power-range");
const G_power_num=document.getElementById("G-power-number");
if(G_power_range){
    G_power_range.value=G_power;
    G_power_range.addEventListener("change", (e)=>{
        G_power=parseInt(e.target.value);
        G_power_num.value=e.target.value;
    });
}
if(G_power_num){
    G_power_num.value=G_power;
    G_power_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value))
        G_power=parseInt(e.target.value);
        G_power_range.value=e.target.value;
    });
}


const C_value_range=document.getElementById("C-value-range");
const C_value_num=document.getElementById("C-value-number");
if(C_value_range){
    C_value_range.value=C_value;
    C_value_range.addEventListener("change", (e)=>{
        C_value=parseInt(e.target.value);
        C_value_num.value=e.target.value;
    });
}
if(C_value_num){
    C_value_num.value=C_value;
    C_value_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value)&&parseFloat(e.target.value)>0)
        C_value=parseFloat(e.target.value);
        C_value_range.value=e.target.value;
    });
}
const C_power_range=document.getElementById("C-power-range");
const C_power_num=document.getElementById("C-power-number");
if(C_power_range){
    C_power_range.value=C_power;
    C_power_range.addEventListener("change", (e)=>{
        C_power=parseInt(e.target.value);
        C_power_num.value=e.target.value;
    });
}
if(C_power_num){
    C_power_num.value=C_power;
    C_power_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value))
        C_power=parseInt(e.target.value);
        C_power_range.value=e.target.value;
    });
}


const Temperature_range=document.getElementById("Temperature-range");
const Temperature_num=document.getElementById("Temperature-number");
if(Temperature_range){
    Temperature_range.value=temperature;
    Temperature_range.addEventListener("change", (e)=>{
        temperature=parseInt(e.target.value);
        Temperature_num.value=e.target.value;
    });
}
if(Temperature_num){
    Temperature_num.value=temperature;
    Temperature_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value)&&parseFloat(e.target.value)>0)
        temperature=parseFloat(e.target.value);
        Temperature_range.value=e.target.value;
    });
}
const Friction_range=document.getElementById("Friction-range");
const Friction_num=document.getElementById("Friction-number");
if(Friction_range){
    Friction_range.value=friction;
    Friction_range.addEventListener("change", (e)=>{
        friction=parseFloat(e.target.value);
        Friction_num.value=e.target.value;
    });
}
if(Friction_num){
    Friction_num.value=friction;
    Friction_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value))
        friction=parseFloat(e.target.value);
        Friction_range.value=e.target.value;
    });
}


const Min_dist_range=document.getElementById("Min-dist-range");
const Min_dist_num=document.getElementById("Min-dist-number");
if(Min_dist_range){
    Min_dist_range.value=minDist;
    Min_dist_range.addEventListener("change", (e)=>{
        minDist=parseFloat(e.target.value);
        Min_dist_num.value=e.target.value;
    });
}
if(Min_dist_num){
    Min_dist_num.value=minDist;
    Min_dist_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value)&&parseFloat(e.target.value)>=0)
        minDist=parseFloat(e.target.value);
        Min_dist_range.value=e.target.value;
    });
}
const Max_dist_range=document.getElementById("Max-dist-range");
const Max_dist_num=document.getElementById("Max-dist-number");
if(Max_dist_range){
    Max_dist_range.value=maxDist;
    Max_dist_range.addEventListener("change", (e)=>{
        maxDist=parseFloat(e.target.value);
        Max_dist_num.value=e.target.value;
    });
}
if(Max_dist_num){
    Max_dist_num.value=maxDist;
    Max_dist_num.addEventListener("change", (e)=>{
        if(e.target.value.length>0&&isNumber(e.target.value))
        maxDist=parseFloat(e.target.value);
        Max_dist_range.value=e.target.value;
    });
}