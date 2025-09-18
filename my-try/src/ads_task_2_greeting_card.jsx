import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function GreetingCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { fname, lname, email, phone } = location.state || {};

  if (!fname) {
    // If someone directly opens /greeting without filling form
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700 mb-4">No data found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-6">
      <div className="w-full max-w-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-extrabold mb-4">🎉 Greetings 🎉</h2>
        <p className="text-xl">
          Dear <span className="font-bold">{fname} {lname}</span>,
        </p>
        <p className="mt-3">We are so happy to connect with you! 💌</p>
        <div className="mt-6 bg-white text-gray-800 rounded-lg shadow-md p-4">
          <p><span className="font-bold">📧 Email:</span> {email}</p>
          <p><span className="font-bold">📱 Phone:</span> {phone}</p>
        </div>
        <p className="mt-6 italic">Wishing you a wonderful day ahead 🌸</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
}
