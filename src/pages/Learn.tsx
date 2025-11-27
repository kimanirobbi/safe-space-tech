const Learn = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Learn About Digital Safety</h1>
      <div className="max-w-4xl mx-auto prose dark:prose-invert lg:prose-xl">
        <p className="text-lg mb-4">
          Welcome to the learning hub. Here you can find information to help you navigate the digital world safely and confidently. Our goal is to empower you with knowledge to protect yourself and others from online harm.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Topics</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identifying Online Harassment:</strong> Learn to recognize different forms of online abuse, from cyberbullying to hate speech.</li>
          <li><strong>Digital Consent:</strong> Understand the importance of consent in online interactions and sharing of personal information.</li>
          <li><strong>Privacy and Security:</strong> Discover tools and practices to keep your online accounts and personal data secure.</li>
          <li><strong>Being an Upstander:</strong> Find out how you can safely support someone who is being harassed online.</li>
        </ul>
        <p className="mt-6">
          We are continuously adding new modules and resources. Check back often for the latest information.
        </p>
      </div>
    </div>
  );
};

export default Learn;