import debounce from './debounce'

export default {
  name: 'debounce',
  install (Vue) {
    Vue.directive('debounce', {
      bind (el, { value, arg }) {
        el.oninput = debounce(({ target }) => {
          value(target.value)
        }, arg)
      }
    })
  }
}