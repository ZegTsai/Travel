
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (ex) {}

export default {
  city: defaultCity
}
