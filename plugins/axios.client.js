export default function({$axios, store,redirect}){
  $axios.onRequest(request => {
    let access_token = localStorage.getItem('access_token')
    if(access_token){
      request.headers.common['Authorization'] = `Bearer ${access_token}`
    }
    return request
  })
}