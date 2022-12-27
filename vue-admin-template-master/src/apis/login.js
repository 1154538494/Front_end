import axios from 'axios'
import qs from 'querystring'
export const user_login = async function(username1, password1) {
  let res
  axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/login/',
    data: qs.stringify({
      username: username1,
      password: password1
    })
  })
    .then(function(response) {
      console.log('哈哈哈')
      console.log(response)
      res = response.data.code
      console.log(res)
    })
    .catch(function(error) {
      console.log(error)
    })
  return res
}
