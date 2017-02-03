module.exports = {
  path: 'balance',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      console.log('## balance');
      cb(null, require('./Balance').default)
    })
  }
}
