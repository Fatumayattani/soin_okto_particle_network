import React from 'react';
import { Book, Video, FileText, Download } from 'lucide-react';

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
    }
  ];

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
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