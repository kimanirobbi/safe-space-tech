import { BookOpen, Shield, HeartHandshake } from 'lucide-react';

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resource Library</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">A curated list of organizations and materials to provide further support and information.</p>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-start space-x-4">
          <BookOpen className="w-10 h-10 text-pink-500 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Educational Materials</h2>
            <p className="text-gray-600 dark:text-gray-400">Links to in-depth guides, videos, and research on digital safety and GBV prevention.</p>
            <a href="#" className="text-pink-500 hover:underline">Explore Materials &rarr;</a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Shield className="w-10 h-10 text-pink-500 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Legal Aid & Reporting</h2>
            <p className="text-gray-600 dark:text-gray-400">Find organizations that offer legal advice and assistance with reporting online crimes.</p>
            <a href="#" className="text-pink-500 hover:underline">Find Legal Support &rarr;</a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <HeartHandshake className="w-10 h-10 text-pink-500 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Mental Health & Wellness</h2>
            <p className="text-gray-600 dark:text-gray-400">Connect with mental health professionals and wellness resources to support your healing journey.</p>
            <a href="#" className="text-pink-500 hover:underline">Access Wellness Resources &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;