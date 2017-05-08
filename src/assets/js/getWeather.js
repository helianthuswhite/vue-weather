import Vue from 'vue';

const apikey = '1aa0be9a6fb48e3bcf5d7060a6c201af';
const baiduKey = '8XXHbc9FpQC6nnH780fbzhgbG7vOtust';

const getWeather = () => {
  return new Promise((resolve, reject) => {
    Vue.http.jsonp(`http://api.map.baidu.com/location/ip?ak=${baiduKey}&coor=bd09ll`)
    .then((response) => {
      let city = response.body.content.address_detail.city.split('市')[0];
      Vue.http.options.headers = {
        'apikey': apikey
      };
      Vue.http.get(`http://apis.baidu.com/heweather/pro/weather?city=${city}`)
        .then((res) => {
          if (res.status === 200) {
            resolve(res.body['HeWeather data service 3.0'][0]);
          }
        });
    });
  });
};

export {
  getWeather
};
