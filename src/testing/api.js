
export default {
  get: () => new Promise( async (resolve, reject) => {
    setTimeout(() => {
      resolve({data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ]})
    }, 1000)
  })
}