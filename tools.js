const getDistance=(x1, y1, x2, y2)=>{
    const dx = Math.abs(x2-x1);
    const dy = Math.abs(y2-y1);
    return Math.sqrt(Math.pow(dx, 2)+Math.pow(dy, 2));
}

const getDir=(x1,y1,x2,y2)=>{
    const dx=x2-x1;
    const dy=y2-y1;
    return Math.atan(dx,dy);
}

const isNumber=(x, noStr=false) => (typeof x === 'number' || x instanceof Number || (!noStr && x && typeof x === 'string' && !isNaN(x))) &&
        isFinite(x);

const randomFloat = (min, max) => Math.random() * (max - min) + min;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}