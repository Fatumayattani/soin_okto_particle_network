import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Safe Space for
          <span className="text-pink-600"> Mental Wellness</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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