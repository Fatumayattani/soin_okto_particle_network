import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import App from './App';
import './index.css';

const GOOGLE_CLIENT_ID = '809424109258-oecvao8rj793m1mhkav5kht508mn9tk4.apps.googleusercontent.com';
const OKTO_CLIENT_API_KEY = 'your-okto-api-key';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
        <App />
      </OktoProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);