import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger.jsx";
import AccountProvider from './context/AccountProvider.jsx';

function App() {
  const clientId = '984047477247-caaiea1pg79l139kekiu8ce305hbrrg1.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider><Messenger/></AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;