const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.name)) {
        throw { name: 'すでに登録済みの名前です。' }
      }
    })
}

export default asyncValidate