module.exports = {
  path: 'payment',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      console.log('## payment');
      cb(null, require('./Payment').default)
    })
  }
}
