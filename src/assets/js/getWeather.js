import Vue from 'vue';

const apikey = '58dbdb3c33524f6ab7c906ba18354d1f';
const baiduKey = '8XXHbc9FpQC6nnH780fbzhgbG7vOtust';

const getCity = () => Vue.http.jsonp(`http://api.map.baidu.com/location/ip?ak=${baiduKey}&coor=bd09ll`)
  .then((response) => response.body.content.address_detail.city.split('市')[0]);

const queryWeather = (resolve, city) => Vue.http.get(`https://free-api.heweather.com/s6/weather?key=${apikey}&location=${city}`)
  .then(res => resolve(res.body['HeWeather6'][0]));

export const getWeather = args => new Promise((resolve, reject) => args
    ? queryWeather(resolve, args) : getCity().then(city => queryWeather(resolve, city)));

