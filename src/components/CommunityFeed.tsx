import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function CommunityFeed() {
  const posts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      content: "Just completed my first meditation session using SoinHealth's guided meditation. Feeling so peaceful and centered! 🧘‍♀️",
      likes: 24,
      comments: 5,
      timeAgo: "2h"
    },
    {
      id: 2,
      author: "Emily R.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      content: "Found an amazing support group here for working moms. It's so comforting to know we're not alone in our journey. 💪",
      likes: 42,
      comments: 8,
      timeAgo: "4h"
    }
  ];

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-800">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.timeAgo}</p>
            </div>
          </div>
          
          <p className="text-gray-800 mb-4">{post.content}</p>
          
          <div className="flex items-center space-x-6 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-pink-600">
              <Heart className="h-5 w-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-pink-600">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-pink-600">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}