import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 sm:px-6 lg:px-8"
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1591135108731-615592cf231b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
    }}
    >
      <div className="text-center max-w-7xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Your Safe Space for
          <span className="text-pink-800"> Mental Wellness</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join our supportive community of women empowering each other through mental health awareness, emotional support, and personal growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/community')}
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors text-lg font-medium"
          >
            Join Our Community
          </button>
          <button 
            onClick={() => navigate('/resources')}
            className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors text-lg font-medium border border-pink-200"
          >
            Explore Resources
          </button>
        </div>
      </div>
    </div>
  );
}
