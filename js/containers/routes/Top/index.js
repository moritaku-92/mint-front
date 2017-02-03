module.exports = {
  path: 'top',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      console.log('## top');
      cb(null, require('./Top').default)
    })
  }
}
