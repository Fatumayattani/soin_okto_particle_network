import { Book, Video, FileText, Download, Clock, PenTool } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Meditation Basics Guide",
      type: "Guide",
      description: "Learn the fundamentals of meditation and mindfulness practices.",
      icon: Book
    },
    {
      id: 2,
      title: "Stress Management Workshop",
      type: "Video",
      description: "A comprehensive workshop on managing daily stress and anxiety.",
      icon: Video
    },
    {
      id: 3,
      title: "Self-Care Workbook",
      type: "Workbook",
      description: "Interactive exercises to develop your personal self-care routine.",
      icon: FileText
    },
    {
      id: 8,
      title: "Time Management for Busy Moms",
      type: "Video",
      description: "Strategies to maximize productivity and manage family time effectively.",
      icon: Clock
    },
    {
      id: 9,
      title: "Emotional Well-being Journal",
      type: "Journal",
      description: "Daily prompts to reflect on emotional well-being and mental health.",
      icon: PenTool
    },
    {
      id: 6,
      title: "Healthy Eating on a Budget",
      type: "Article",
      description: "Tips and recipes for maintaining a nutritious diet without overspending.",
      icon: ShoppingCart
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Resources</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map(resource => {
            const Icon = resource.icon;
            return (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                    <span className="text-sm text-pink-600">{resource.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="w-full flex items-center justify-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Access Resource</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}