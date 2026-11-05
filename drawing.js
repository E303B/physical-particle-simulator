CanvasRenderingContext2D.prototype.drawRotated = function(image, x, y, degrees, size) {
  this.save();
  this.translate(x, y);
  this.rotate(degrees * Math.PI / 180);
  this.drawImage(image, -(image.width * size) / 2, -(image.height * size) / 2, image.width * size, image.height * size);
  this.restore();
}

CanvasRenderingContext2D.prototype.drawText = function(text, color, x, y, font, size) {
  this.font = size + "px " + font;
  this.fillStyle = color;
  this.fillText(text, x - (text.length / 4 * size), y - (size / 2));
}

CanvasRenderingContext2D.prototype.drawRect=function(color, x, y, width, height) {
  this.beginPath()
  this.rect(x, y, width, height)
  this.fillStyle = color
  this.fill()
  this.closePath()
}

CanvasRenderingContext2D.prototype.drawCircle=function(color, x, y, radius) {
  this.beginPath()
  this.arc(x, y, radius, 0, Math.PI*2)
  this.fillStyle = color
  this.fill()
  this.closePath()
}

CanvasRenderingContext2D.prototype.drawLine=function(color, x, y, dx, dy, lineWidth=1){
  this.beginPath()
  this.moveTo(x,y)
  this.lineTo(x+dx, y+dy)
  this.strokeStyle = color;
  this.lineWidth=lineWidth;
  this.stroke()
  this.closePath()

}

CanvasRenderingContext2D.prototype.drawArc=function(color, x, y, radius, direction, angle) {
  this.beginPath()
  this.arc(x, y, radius, direction-angle/2, direction+angle/2)
  this.fillStyle = color
  this.fill()
  this.closePath()
}

CanvasRenderingContext2D.prototype.drawSquare=function(color, x, y, size) {
  drawRect(color, x, y, size, size)
}