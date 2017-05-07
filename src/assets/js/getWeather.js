import superagent from 'superagent';

const apikey = '1aa0be9a6fb48e3bcf5d7060a6c201af';

const getWeather = () => {
  return superagent
  .get('http://apis.baidu.com/heweather/pro/weather?city=haerbin')
  .set('apikey', apikey)
  .set('Accept', 'application/json')
  .then((res) => {
    if (res.status === 200) {
      return res.body['HeWeather data service 3.0'][0];
    }
  });
};

export {
  getWeather
};
