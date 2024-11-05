
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CommunityPage from './pages/CommunityPage';
import SupportGroupsPage from './pages/SupportGroupsPage';
import ResourcesPage from './pages/ResourcesPage';
import PricingPage from './pages/PricingPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-rose-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <UserProvider>
          <AuthPage />
      </UserProvider>
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/support-groups" element={<SupportGroupsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;