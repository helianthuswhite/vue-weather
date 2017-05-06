let canvas = null;
let context = null;
let stepXArr = [];
let stepYArr = [];
let xStepWidth = 0;
let xAxisHeight = 0;
let yAxisWidth = 0;
let heightVal = 0;
let minTmp = 0;
let maxTmp = 0;

/**
 * 画X轴
 * */
const drawXAxis = (xAxisData) => {
  context.beginPath();
  context.moveTo(yAxisWidth, canvas.height - xAxisHeight);
  context.lineTo(canvas.width - yAxisWidth, canvas.height - xAxisHeight);
  const len = xAxisData.length;
  xStepWidth = (canvas.width - 2 * yAxisWidth) / len;
  for (let i = 0; i < len; i++) {
    context.font = 'normal normal 12px';
    context.fillText(xAxisData[i], yAxisWidth + (i + 0.5) * xStepWidth - xAxisData[i].length * 12 / 2, canvas.height - xAxisHeight + 20);
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
  context.lineTo(yAxisWidth, canvas.height - xAxisHeight);
  let tickWidth = (canvas.height - 2 * xAxisHeight) / step;
  heightVal = (canvas.height - 2 * xAxisHeight) / yMax;
  for (let i = 0; i <= step; i++) {
    context.font = 'normal normal 12px';
    context.fillText(yMax / step * i + Math.min.apply(Math, minTmp) - 3, yAxisWidth - 25, canvas.height - xAxisHeight - tickWidth * i + 6);
    stepYArr.push(canvas.height - xAxisHeight - tickWidth * i);
  }
  context.stroke();
};

/**
 * 画线条
 * */
const drawLine = (lineData) => {
  context.beginPath();
  context.fillStyle = '#ffffff';
  context.lineWidth = 1;
  context.moveTo(stepXArr[0] - xStepWidth / 2, canvas.height - xAxisHeight - (lineData[0] - Math.min.apply(Math, minTmp) + 3) * heightVal);
  for (let i = 1, len = lineData.length; i < len; i++) {
    context.lineTo(stepXArr[i] - xStepWidth / 2, canvas.height - xAxisHeight - (lineData[i] - Math.min.apply(Math, minTmp) + 3) * heightVal);
  }
  context.stroke();
  for (let i = 0, len = lineData.length; i < len; i++) {
    context.beginPath();
    context.font = 'normal normal 12px';
    context.fillText(lineData[i], stepXArr[i] - xStepWidth / 2 - 7, canvas.height - xAxisHeight - (lineData[i] - Math.min.apply(Math, minTmp) + 3) * heightVal - 7);
    context.arc(stepXArr[i] - xStepWidth / 2, canvas.height - xAxisHeight - (lineData[i] - Math.min.apply(Math, minTmp) + 3) * heightVal,
        3, 0, Math.PI * 2, true);
    context.fill();
  }
};

const init = (settings) => {
  canvas = document.getElementById('canvas');
  canvas.width = settings.width;
  canvas.height = settings.height;
  context = canvas.getContext('2d');
  context.fillStyle = settings.color;
  context.strokeStyle = settings.color;
  xAxisHeight = settings.height / 6;
  yAxisWidth = settings.width / 8;
  minTmp = settings.minTmp;
  maxTmp = settings.maxTmp;
  drawXAxis(settings.xAxis);
  drawYAxis(settings.heightMax, settings.heightNum);
  drawLine(maxTmp);
  drawLine(minTmp);
};

export { init };
