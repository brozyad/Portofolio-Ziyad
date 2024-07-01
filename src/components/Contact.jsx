import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
