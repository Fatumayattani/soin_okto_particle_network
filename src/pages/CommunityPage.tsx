import React from 'react';
import CommunityFeed from '../components/CommunityFeed';

export default function CommunityPage() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Community Stories</h1>
        <CommunityFeed />
      </div>
    </div>
  );
}