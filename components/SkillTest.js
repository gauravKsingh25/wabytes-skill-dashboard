"use client"; // Mark this as a client component

import { useState } from "react";
import Image from "next/image";
import QuickStatistics from "./QuickStatistics";
import SyllabusAnalysis from "./SyllabusAnalysis";
import ComparisonGraph from "./ComparisonGraph";
import QuestionAnalysis from "./QuestionAnalysis";

export default function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: "1",
    percentile: "30",
    currentScore: "10 / 15",
  });

  const [formData, setFormData] = useState(statistics);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setStatistics(formData); // Update the statistics with modal data
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Skill Test</h1>
        <div className="flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML5 Logo"
            width={48}
            height={48}
            className="mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">
              Hyper Text Markup Language
            </h2>
            <p className="text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
          <button
            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)} // Open the modal
          >
            Update
          </button>
        </div>
      </div>
      <QuickStatistics
        rank={statistics.rank}
        percentile={statistics.percentile}
        correctAnswers={statistics.currentScore}
      />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <SyllabusAnalysis />
        </div>
        <div className="w-full md:w-1/2">
          <ComparisonGraph />
        </div>
      </div>
      <QuestionAnalysis />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Update Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Rank:</label>
                <input
                  type="number"
                  name="rank"
                  value={formData.rank}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter rank"
                />
              </div>
              <div>
                <label className="block text-gray-700">Percentile:</label>
                <input
                  type="number"
                  name="percentile"
                  value={formData.percentile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter percentile"
                />
              </div>
              <div>
                <label className="block text-gray-700">Current Score:</label>
                <input
                  type="text"
                  name="currentScore"
                  value={formData.currentScore}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter current score"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
