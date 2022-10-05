// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

// import ChannelsLayout from 'src/layouts/ChannelsLayout'
import MainLayout from 'src/layouts/MainLayout'
import ServerLayout from 'src/layouts/ServerLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={MainLayout} private unauthenticated="login">
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ServerLayout}>
          <Route path="/server/{serverId:Int}/channel/{channelId:Int}" page={ChannelPage} name="channel" />
          <Route path="/server/{serverId:Int}" page={ServerServerPage} name="server" />
        </Set>
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
