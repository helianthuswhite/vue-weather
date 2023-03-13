import Vue from 'vue';
import cityList from './cityList';

const apikey = '58dbdb3c33524f6ab7c906ba18354d1f';
const baiduKey = '8XXHbc9FpQC6nnH780fbzhgbG7vOtust';
const Letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
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
      city.values.push(cityList[i]);
    }
  }
}

for (let province of provinceData) {
  const s = new Set(province.values);
  province.values = Array.from(s).map((x) => x);
}

const getCity = () =>
  Vue.http
    .jsonp(`https://api.map.baidu.com/location/ip?ak=${baiduKey}&coor=bd09ll`)
    .then(
      (response) => response.body.content.point
    ).catch(() => {
      console.error('根据IP获取城市信息失败');
      return { x: '116.41338370', y: '39.91092455' };
    });

export const getCityByLocation = (location) => Vue.http
  .get(`https://geoapi.qweather.com/v2/city/lookup?key=${apikey}&location=${location}`)
  .then(
    (response) => response.body.location[0]
  ).catch(() => {
    console.error('根据经纬度获取城市信息失败');
  });

const queryWeather = (resolve, city) => {
  Promise.all([
    Vue.http.get(
      `https://devapi.qweather.com/v7/weather/now?key=${apikey}&location=${city}`
    ),
    Vue.http.get(
      `https://devapi.qweather.com/v7/weather/7d?key=${apikey}&location=${city}`
    ),
    Vue.http.get(
      `https://devapi.qweather.com/v7/weather/24h?key=${apikey}&location=${city}`
    ),
    Vue.http.get(
      `https://devapi.qweather.com/v7/indices/1d?key=${apikey}&location=${city}&type=10,3,9,1`
    )
  ]).then((res) => {
    resolve({
      location: city,
      now: res[0].body.now,
      daily_forecast: res[1].body.daily,
      hourly: res[2].body.hourly,
      lifestyle: res[3].body.daily
    });
  });
};

export const getWeather = (args) =>
  new Promise((resolve, reject) =>
    args
      ? queryWeather(resolve, `${args.lon},${args.lat}`)
      : getCity().then((city) => queryWeather(resolve, `${city.x},${city.y}`))
  );

export const loadProvince = (args) =>
  new Promise((resolve, reject) => resolve({ errno: 0, data: provinceData }));

export const loadCity = (args) =>
  new Promise((resolve, reject) => resolve({ errno: 0, data: cityData }));
