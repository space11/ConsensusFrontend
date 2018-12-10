const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values /* , dispatch */) =>
  sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' }; //eslint-disable-line
    }
  });

export default asyncValidate;