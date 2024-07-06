import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger.jsx";
import AccountProvider from './context/AccountProvider.jsx';

function App() {
  const clientId = '******************************************************************************';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider><Messenger/></AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;
