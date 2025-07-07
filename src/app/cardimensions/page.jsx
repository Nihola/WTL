
"use client"
import React, { useState } from 'react';
import { truckData } from '../../data';


export default function CardDimensions() {
  const categories = Object.keys(truckData);
  const [activeCategory, setActiveCategory] = useState("Eurofura");
  const [selectedOption, setSelectedOption] = useState(truckData["Eurofura"].options[0]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSelectedOption(truckData[cat].options[0]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Yuk mashinalarimiz <span className="text-blue-600">{activeCategory}</span>
      </h1>
      <p className="text-center text-gray-500 mb-6">
        {selectedOption.capacity}gacha, hajmi {selectedOption.volume}m³gacha
      </p>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${cat === activeCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} shadow`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategories */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {truckData[activeCategory].options.map((opt, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg border ${opt.volume === selectedOption.volume ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            onClick={() => setSelectedOption(opt)}
          >
            {opt.volume} m³
          </button>
        ))}
      </div>

      {/* Truck Info */}
      <div className="bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-8 items-center">
        <img src={truckData[activeCategory].image} alt={activeCategory} className="w-full object-contain h-64" />
        <div>
          <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>
          <p>{selectedOption.desc}</p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Ichki uzunligi:</strong> {selectedOption.length}</li>
            <li><strong>Ichki kengligi:</strong> {selectedOption.width}</li>
            <li><strong>Ichki balandligi:</strong> {selectedOption.height}</li>
            <li><strong>Yuk ko'tarish quvvati:</strong> {selectedOption.capacity}</li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}
