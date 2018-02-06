import Vue from 'vue';
import cityList from './cityList';

const apikey = '58dbdb3c33524f6ab7c906ba18354d1f';
const baiduKey = '8XXHbc9FpQC6nnH780fbzhgbG7vOtust';
const Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const provinceData = [];
const cityData = {};

for (let i in Letters) {
  provinceData.push({
    type: Letters[i],
    values: []
  });
}

for (let i in cityList) {
  for (let province of provinceData) {
    if (province.type === cityList[i].provinceEn[0]) {
      province.values.push(cityList[i].provinceZh);
    }
  }
  cityData[cityList[i].provinceZh] = [];
}

for (let province in cityData) {
  for (let i in Letters) {
    cityData[province].push({
      type: Letters[i],
      values: []
    });
  }
}

for (let i in cityList) {
  for (let city of cityData[cityList[i].provinceZh]) {
    if (city.type === cityList[i].cityEn[0]) {
      city.values.push(cityList[i].cityZh);
    }
  }
}

for (let province of provinceData) {
  const s = new Set(province.values);
  province.values = Array.from(s).map(x => x);
}

const getCity = () => Vue.http.jsonp(`http://api.map.baidu.com/location/ip?ak=${baiduKey}&coor=bd09ll`)
  .then(response => response.body.content.address_detail.city.split('市')[0]);

const queryWeather = (resolve, city) => Vue.http.get(`https://free-api.heweather.com/s6/weather?key=${apikey}&location=${city}`)
  .then(res => resolve(res.body['HeWeather6'][0]));

export const getWeather = args => new Promise((resolve, reject) => args
  ? queryWeather(resolve, args) : getCity().then(city => queryWeather(resolve, city)));

export const loadProvince = args => new Promise((resolve, reject) => resolve({errno: 0, data: provinceData}));

export const loadCity = args => new Promise((resolve, reject) => resolve({errno: 0, data: cityData}));
