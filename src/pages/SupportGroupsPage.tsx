import { Users, Heart, MessageCircle } from 'lucide-react';

export default function SupportGroupsPage() {
  const groups = [
    {
      id: 1,
      name: "Working Moms Support",
      members: 234,
      description: "A safe space for working mothers to share experiences and support each other.",
      category: "Parenting"
    },
    {
      id: 2,
      name: "Anxiety & Stress Relief",
      members: 456,
      description: "Learn and share coping strategies for managing anxiety and stress.",
      category: "Mental Health"
    },
    {
      id: 3,
      name: "Career Growth & Balance",
      members: 189,
      description: "Discuss career challenges and work-life balance strategies.",
      category: "Professional"
    },
    {
      id: 4,
      name: "Career Growth & Balance",
      members: 189,
      description: "Discuss career challenges and work-life balance strategies.",
      category: "Professional"
    }
  ];

  return (
    <div 
      className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1591135108731-615592cf231b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Support Groups</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map(group => (
            <div key={group.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{group.name}</h3>
                <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                  {group.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{group.members} members</span>
                </div>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  Join Group
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}