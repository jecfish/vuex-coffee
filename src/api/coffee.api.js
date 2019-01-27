import list from '../../public/static/list.json'

export default {
  getList() {
    // const url = 'static/list.json'
    const url = 'https://demo2466260.mockable.io/list'
    return fetch(url).then(res => res.json())
  },

  getListSync() {
    return list
  }
}