let config = null; //eslint-disable-line

config = {
  API_ADDRESS: 'http://85.143.104.47:25227',
  HOST_ADDRESS: 'http://85.143.104.47:25227',
};

if (process.env.HOST_ID === 'staging') { // eslint-disable-line
  console.log('staging'); // eslint-disable-line
  config.API_ADDRESS = 'http://185.204.0.35:5000';
  config.HOST_ADDRESS = 'http://185.204.0.35';
}

export default config;
