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
import MembersLayout from 'src/layouts/MembersLayout'
import MessagesLayout from 'src/layouts/MessagesLayout'
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

      <Set wrap={MessagesLayout}>
        <Route path="/messages/new" page={MessageNewMessagePage} name="newMessage" />
        <Route path="/messages/{id:Int}/edit" page={MessageEditMessagePage} name="editMessage" />
        <Route path="/messages/{id:Int}" page={MessageMessagePage} name="message" />
        <Route path="/messages" page={MessageMessagesPage} name="messages" />
      </Set>
      {/* <Set wrap={ChannelsLayout}>
        <Route path="/channels/new" page={ChannelNewChannelPage} name="newChannel" />
        <Route path="/channels/{id:Int}/edit" page={ChannelEditChannelPage} name="editChannel" />
        <Route path="/channels/{id:Int}" page={ChannelChannelPage} name="channel" />
        <Route path="/channels" page={ChannelChannelsPage} name="channels" />
      </Set> */}
      <Set wrap={MembersLayout}>
        <Route path="/members/new" page={MemberNewMemberPage} name="newMember" />
        <Route path="/members/{id:Int}/edit" page={MemberEditMemberPage} name="editMember" />
        <Route path="/members/{id:Int}" page={MemberMemberPage} name="member" />
        <Route path="/members" page={MemberMembersPage} name="members" />
      </Set>
    </Router>
  )
}

export default Routes
