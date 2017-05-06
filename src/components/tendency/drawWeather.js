let canvas = null;
let context = null;
let stepXArr = [];
let stepYArr = [];
let xStepWidth = 0;
let xAxisHeight = 0;
let yAxisWidth = 0;
let heightVal = 0;

/**
 * 画X轴
 * */
const drawXAxis = (xAxisData) => {
  context.beginPath();
  context.moveTo(yAxisWidth - 6, canvas.height - xAxisHeight);
  context.lineTo(canvas.width - yAxisWidth, canvas.height - xAxisHeight);
  const len = xAxisData.length;
  xStepWidth = (canvas.width - 2 * yAxisWidth) / len;
  for (let i = 0; i < len; i++) {
    context.moveTo(yAxisWidth + (i + 1) * xStepWidth, canvas.height - xAxisHeight);
    context.lineTo(yAxisWidth + (i + 1) * xStepWidth, canvas.height - xAxisHeight + 6);
    context.font = 'normal normal bold 14px 微软雅黑';
    context.fillText(xAxisData[i], yAxisWidth + (i + 0.5) * xStepWidth - xAxisData[i].length * 14 / 2, canvas.height - xAxisHeight + 24);
    stepXArr.push(yAxisWidth + (i + 1) * xStepWidth);
  }
  context.stroke();
};

/**
 * 画Y轴
 * */
const drawYAxis = (yMax, step) => {
  context.beginPath();
  context.moveTo(yAxisWidth, xAxisHeight);
  context.lineTo(yAxisWidth, canvas.height - xAxisHeight + 6);
  let tickWidth = (canvas.height - 2 * xAxisHeight) / step;
  heightVal = (canvas.height - 2 * xAxisHeight) / yMax;
  for (let i = 0; i <= step; i++) {
    context.moveTo(yAxisWidth, canvas.height - xAxisHeight - tickWidth * i);
    context.lineTo(yAxisWidth - 6, canvas.height - xAxisHeight - tickWidth * i);
    context.font = 'normal normal 14px 微软雅黑';
    context.fillText(yMax / step * i, yAxisWidth - 50, canvas.height - xAxisHeight - tickWidth * i + 7);
    stepYArr.push(canvas.height - xAxisHeight - tickWidth * i);
  }
  context.stroke();
};

/**
 * 画网格
 * */
var drawGrid = function() {
  context.save();
  context.strokeStyle = '#6e6e6e';
  context.fillStyle = 'ffffff';
  context.lineWidth = 0.5;
  let j = 0;
  let stepX = (canvas.width - 2 * yAxisWidth) / 10;
  let stepY = (canvas.height - 2 * xAxisHeight) / 10;
  for (let i = 0, len = stepYArr.length; i < len; i++) {
    context.beginPath();
    for (j = 0; j < stepX; j++) {
      context.moveTo(yAxisWidth + j * 10, stepYArr[i]);
      context.lineTo(yAxisWidth + j * 10 + 6, stepYArr[i]);
    }
    context.stroke();
  }
  for (let i = 0, len = stepXArr.length; i < len; i++) {
    context.beginPath();
    for (j = 0; j < stepY; j++) {
      context.moveTo(stepXArr[i], xAxisHeight + j * 10);
      context.lineTo(stepXArr[i], xAxisHeight + j * 10 + 6);
    }
    context.stroke();
  }
  context.restore();
};

/**
 * 画线条
 * */
const drawLine = (lineData) => {
  context.beginPath();
  context.fillStyle = '#000000';
  context.lineWidth = 2;
  context.moveTo(stepXArr[0] - xStepWidth / 2, canvas.height - xAxisHeight - lineData[0] * heightVal);
  for (let i = 1, len = lineData.length; i < len; i++) {
    context.lineTo(stepXArr[i] - xStepWidth / 2, canvas.height - xAxisHeight - lineData[i] * heightVal);
  }
  context.stroke();
  for (let i = 0, len = lineData.length; i < len; i++) {
    context.beginPath();
    context.fillStyle = 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
      (Math.random() * 255).toFixed(0) + ', ' +
      (Math.random() * 255).toFixed(0) + ', 1.0)';
    context.arc(stepXArr[i] - xStepWidth / 2, canvas.height - xAxisHeight - lineData[i] * heightVal,
        7, 0, Math.PI * 2, true);
    context.fill();
  }
};

/**
 * 画柱子
 * */
const drawBar = (barData, colorArr) => {
  const barWidth = xStepWidth / 2;
  for (let i = 0, len = barData.length; i < len; i++) {
    context.beginPath();
    context.fillStyle = colorArr[i];
    context.fillRect(stepXArr[i] - xStepWidth / 2 - barWidth / 2, canvas.height - xAxisHeight - barData[i] * heightVal,
        barWidth, barData[i] * heightVal);
    context.fill();
  }
};

const init = (settings) => {
  canvas = document.getElementById('canvas');
  canvas.width = settings.width;
  canvas.height = settings.height;
  context = canvas.getContext('2d');
  xAxisHeight = settings.height / 6;
  yAxisWidth = settings.width / 6;
  drawXAxis(settings.xAxis);
  drawYAxis(400, 10);
  drawGrid();
  drawBar(settings.barData, settings.colorArr);
  drawLine(settings.lineData);
};

export { init };
