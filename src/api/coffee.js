export default {
    getList () {
      const url = 'https://demo2466260.mockable.io/list'
      return fetch(url).then(res => res.json())
    }
  }