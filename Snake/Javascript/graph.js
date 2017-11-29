function LineChart(con) {
  // user defined properties, these is the data that the user puts in
  this.canvas = document.getElementById(con.canvasId);
  this.minX = con.minX;
  this.minY = con.minY;
  this.maxX = con.maxX;
  this.maxY = con.maxY;
  this.unitsPerTickX = con.unitsPerTickX;
  this.unitsPerTickY = con.unitsPerTickY;

  // Konstanter
  this.padding = 15;
  this.tickSize = 10;
  this.axisColor = "#555";
  this.pointRadius = 5;
  this.font = "12pt Calibri";
  this.fontHeight = 12;


  // relationships, this is how everything corelates, by using the user inputs nothing has to be hard-coded
  this.context = this.canvas.getContext("2d");
  this.rangeX = this.maxX - this.minY;
  this.rangeY = this.maxY - this.minY;

  // counts how many ticks it should be on the line
  this.numXTicks = Math.round(this.rangeX / this.unitsPerTickX);
  this.numYTicks = Math.round(this.rangeY / this.unitsPerTickY);

  this.x = this.getLongestValueWidth() + this.padding * 2;
  this.y = this.padding * 2;
  this.width = this.canvas.width - this.x - this.padding * 2;
  this.height = this.canvas.height - this.y - this.padding - this.fontHeight;
  this.scaleX = this.width / this.rangeX;
  this.scaleY = this.height / this.rangeY;

  // draw x y axis and tick marks
  this.drawXAxis();
  this.drawYAxis();
}
//get the value of the longest width
LineChart.prototype.getLongestValueWidth = function() {
  this.context.font = this.font;
  var longestValueWidth = 0;
  for (var n = 0; n <= this.numYTicks; n++) {
    var value = this.maxY - (n * this.unitsPerTickY);
    longestValueWidth = Math.max(longestValueWidth, this.context.measureText(value).width);

  }
  return longestValueWidth;
};
//function for drawing the x-Axis
LineChart.prototype.drawXAxis = function() {
  var context = this.context;
  context.save();
  context.beginPath();

  //plots the start point
  context.moveTo(this.x, this.y + this.height);
  //plot where the line should move to
  context.lineTo(this.x + this.width, this.y + this.height);

  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  //context.stroke is what then draws the plotted line
  context.stroke();

  // draw tick marks on the axis
  for (var n = 0; n < this.numXTicks; n++) {
    context.beginPath();
    context.moveTo((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height);
    context.lineTo((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height - this.tickSize);
    context.stroke();
  }

  // draw labels, In this codes default state it writes out the unitsPerTickx

  context.font = this.font;
  context.fillStyle = "black";
  context.textAlign = "center";
  context.textBaseline = "middle";

  for (var n = 0; n < this.numXTicks; n++) {
    var label = ["Mån", "Tis", "Ons", "Tors", "Fre"];
    //Math.round((n + 1) * this.maxX / this.numXTicks);
    context.save();
    // translate sätter en ny (0,0)
    context.translate((n + 1) * this.width / this.numXTicks + this.x, this.y + this.height + this.padding);
    //filltext skriver ut text
    context.fillText(label[n], 0, 0);
    context.restore();
  }
  context.restore();
};

//Drawing the Y-axis works in the same way as the X axis

LineChart.prototype.drawYAxis = function() {
  var context = this.context;
  context.save();
  context.beginPath();
  context.moveTo(this.x, this.y);
  context.lineTo(this.x, this.y + this.height);
  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  context.stroke();
  context.restore();

  // draw tick marks
  for (var n = 0; n < this.numYTicks; n++) {
    context.beginPath();
    context.moveTo(this.x, n * this.height / this.numYTicks + this.y);
    context.lineTo(this.x + this.tickSize, n * this.height / this.numYTicks + this.y);
    context.stroke();
  }

  // draw values
  context.font = this.font;
  context.fillStyle = "black";
  context.textAlign = "right";
  context.textBaseline = "middle";

  for (var n = 0; n < this.numYTicks; n++) {
    var value = Math.round(this.maxY - n * this.maxY / this.numYTicks);
    context.save();
    context.translate(this.x - this.padding, n * this.height / this.numYTicks + this.y);
    context.fillText(value + "%", 0, 0);
    context.restore();
  }
  context.restore();
};

//Here we draw the line, it takes in 3 parameters
LineChart.prototype.drawLine = function(data, color, width) {
  var context = this.context;
  context.save();
  this.transformContext();
  context.lineWidth = width;
  context.strokeStyle = color;
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(data[0].x * this.scaleX, data[0].y * this.scaleY);

  for (var n = 0; n < data.length; n++) {
    var point = data[n];

    // draw segment
    context.lineTo(point.x * this.scaleX, point.y * this.scaleY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.arc(point.x * this.scaleX, point.y * this.scaleY, this.pointRadius, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();

    // position for next segment
    context.beginPath();
    context.moveTo(point.x * this.scaleX, point.y * this.scaleY);
  }
  context.restore();
};

LineChart.prototype.transformContext = function() {
  var context = this.context;

  // move context to center of canvas
  this.context.translate(this.x, this.y + this.height);

  // invert the y scale so that it increments
  // as you move upwards
  context.scale(1, -1);
};

function func1() {
  var myLineChart = new LineChart({
    canvasId: "myCanvas",
    minX: 0,
    minY: 0,
    maxX: 5,
    maxY: 100,
    unitsPerTickX: 1,
    unitsPerTickY: 25,
  });

  var data = [{
    x: 1,
    y: 90
  }, {
    x: 2,
    y: 85
  }, {
    x: 3,
    y: 70
  }, {
    x: 4,
    y: 92
  }, {
    x: 5,
    y: 100
  }];

  myLineChart.drawLine(data, "blue", 1);


};

function func2() {
  var myLineChart = new LineChart({
    canvasId: "myCanvas2",
    minX: 0,
    minY: 0,
    maxX: 5,
    maxY: 100,
    unitsPerTickX: 1,
    unitsPerTickY: 25,
  });

  var data = [{
    x: 1,
    y: 50
  }, {
    x: 2,
    y: 75
  }, {
    x: 3,
    y: 80
  }, {
    x: 4,
    y: 32
  }, {
    x: 5,
    y: 50
  }];

  myLineChart.drawLine(data, "blue", 1);


}

function func3() {
  var myLineChart = new LineChart({
    canvasId: "myCanvas3",
    minX: 0,
    minY: 0,
    maxX: 5,
    maxY: 100,
    unitsPerTickX: 1,
    unitsPerTickY: 25,
  });

  var data = [{
    x: 1,
    y: 60
  }, {
    x: 2,
    y: 80
  }, {
    x: 3,
    y: 86
  }, {
    x: 4,
    y: 75
  }, {
    x: 5,
    y: 60
  }];

  myLineChart.drawLine(data, "blue", 1);


}


function addLoadEvent(func) {
  var oldonload = window.onload; // Save the current onload handler

  if (typeof window.onload != 'function') // If there was no existing handler...
    {
    window.onload = func; // assign the new handler to window.onload
  } else {
    window.onload = function() // Overwrite existing handler with a new handler, consisting of...
    {
      oldonload(); // a call to the old saved handler plus...
      func(); // a call to the new specified handler.
    }
  }
}
addLoadEvent(func1);
addLoadEvent(func2);
addLoadEvent(func3);
