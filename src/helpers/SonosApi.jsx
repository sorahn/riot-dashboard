import agent from 'superagent';

const SONOS_URL = 'http://localhost:5005';

const SonosApi = {
  getZones() {
    return new Promise(function (resolve, reject) {
      agent
        .get(`${SONOS_URL}/zones`)
        .accept('json')
        .end((err, res) => {
          if (!err) {
            resolve(JSON.parse(res.text));
          } else {
            reject(err, res);
          }
        });
    });
  },

  getFavorites() {
    return new Promise(function (resolve, reject) {
      agent
        .get(`${SONOS_URL}/favorites`)
        .accept('json')
        .end((err, res) => {
          if (!err) {
            resolve(JSON.parse(res.text));
          } else {
            reject(err, res);
          }
        });
    });
  }
};

export default SonosApi;