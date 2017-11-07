
export default {

  loginLoading (state) {
    state.callingAPI = !state.callingAPI
  },
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
  
}
