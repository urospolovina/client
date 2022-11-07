export default async function ({ store, redirect }) {
    // Check if the user is not already in the store.
    if (store.state.user === null) {
      // Call your Laravel API to get the currently authenticated user.
      // It doesn't matter if the store has been wiped out due to a page
      // refresh- the browser still has the cookies, which will be sent
      // along with this request.
      try {
        let rsp = await user.getAuthenticatedUser()
        // If we get the user from the Laravel API, push it back in to
        // the store and carry on to the page.
        store.commit('SET_AUTH_USER', rsp.data)
      } catch (e) {
        // If our API doesn't return the user for any reason, redirect to
        // the login page.
        return redirect('/login')
      }
    }
    // If not, carry on to the page.
  }