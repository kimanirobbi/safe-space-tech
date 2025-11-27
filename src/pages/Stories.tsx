const Stories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Shared Stories</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">Reading the experiences of others can be a source of strength and solidarity. Here, community members share their stories. All submissions are anonymized to protect privacy.</p>
      
      <div className="text-center mb-12">
        <button className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition duration-300">Share Your Story Anonymously</button>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="italic">"I used to feel so isolated after what happened online. Reading other stories here made me realize I wasn't alone. It gave me the courage to seek help."</p>
          <p className="text-right mt-4 font-semibold">- Amani, 22</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="italic">"Learning to set boundaries online was a game-changer for me. The articles in the Learn section were incredibly helpful."</p>
          <p className="text-right mt-4 font-semibold">- Baraka, 19</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;