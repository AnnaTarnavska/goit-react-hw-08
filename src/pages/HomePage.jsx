const HomePage = () => {

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Book</h1>

      <p className="text-lg text-center mb-6">
        Save, add, and search for contacts with ease. This app helps you manage all your personal and business connections in one place.
      </p>

      <ul className="list-disc list-inside mb-8 text-lg space-y-2">
        <li>✅ Add contacts quickly</li>
        <li>✅ Securely store contact information</li>
        <li>✅ Search instantly by name or number</li>
      </ul>
    </div>
  );
};

export default HomePage;
