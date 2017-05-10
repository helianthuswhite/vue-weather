
var express = require('express')

var app = express()

var path = require('path');

var appData = require('./cityList.json');

app.use('/static', express.static(path.join(__dirname,'/dist/static')));

app.get('/',function (req,res) {
  res.sendFile(__dirname + '/dist/index.html');
});

var apiRoutes = express.Router();

var provinceData = [];

var types = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var cityData = {};

for (let i in types) {
  provinceData.push({
    type: types[i],
    values: []
  });
}

for (let i in appData) {
  for (let province of provinceData) {
    if (province.type === appData[i].provinceEn[0]) {
      province.values.push(appData[i].provinceZh);
    }
  }

  cityData[appData[i].provinceZh] = [];
}

for (let province in cityData) {
  for (let i in types) {
    cityData[province].push({
      type: types[i],
      values: []
    });
  }
}

for (let i in appData) {
  for (let city of cityData[appData[i].provinceZh]) {
    if (city.type === appData[i].cityEn[0]) {
      city.values.push(appData[i].cityZh);
    }
  }
}

for (let province of provinceData) {
  var s = new Set(province.values);
  province.values = Array.from(s).map(x => x);
}

apiRoutes.get('/province', function (req, res) {
  res.json({
    errno: 0,
    data: provinceData
  });
});

apiRoutes.get('/city', function (req, res) {
  res.json({
    errno: 0,
    data: cityData
  });
});

app.use('/api', apiRoutes);

console.log('> Starting dev server...');

var server = app.listen(8080);
