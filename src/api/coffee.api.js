import list from '../../public/static/list.json'

export default {
  getList() {
    const url = 'static/list.json'
    return fetch(url).then(res => res.json())
  },

  getListSync() {
    return list
  }
}