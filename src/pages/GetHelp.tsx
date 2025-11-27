import { Phone, MessageSquare, Users } from 'lucide-react';

const GetHelp = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Find Support Now</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">If you or someone you know is experiencing violence or bullying, please reach out. You are not alone, and help is available.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center shadow-md">
          <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">National Helpline</h2>
          <p className="mb-4">Speak to a trained counselor 24/7. Your call is confidential.</p>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full w-full hover:bg-pink-600">Call Now</button>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center shadow-md">
          <MessageSquare className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Live Chat Support</h2>
          <p className="mb-4">Chat anonymously with a support specialist for advice and help.</p>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full w-full hover:bg-pink-600">Start Chat</button>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center shadow-md">
          <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Community Forums</h2>
          <p className="mb-4">Connect with others who have similar experiences in a safe, moderated space.</p>
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full w-full hover:bg-pink-600">Join Forum</button>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;