'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const weatherImages = {
  'Clear': '/Clear.png',
  'Few clouds': '/Few_clouds.png',
  'Scattered clouds': '/Scattered_clouds.png',
  'Broken clouds': '/Scattered_clouds.png',
  'Shower rain': '/Shower_rain.png',
  'Rain': '/Rain.jpeg',
  'Thunderstorm': '/Thunderstorm.png',
  'Snow': '/Snow.png',
  'Mist': '/Mist.png',
};


const About = () => {
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '42466030b943aa032ef02e4851947b6a';
  const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${API_KEY}`;

  const handleSearch = async () => {
    try {
      setError('');
      const geocodingResponse = await fetch(API_URL);
      const geocodingData = await geocodingResponse.json();
  
      if (geocodingData.length > 0) {
        const { lat, lon } = geocodingData[0];
        const ONE_CALL_API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  
        const response = await fetch(ONE_CALL_API_URL);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setWeatherData(data);
        } else {
          setError('Error fetching weather data');
        }
      } else {
        setError('City not found');
      }
    } catch (error) {
      setError('An error occurred');
      console.error('Error fetching weather data:', error);
    }
  };

  const getRainStartTime = (hourlyData) => {
    const rainyHour = hourlyData.find(hour => hour.weather[0].main === "Rain");
    return rainyHour
      ? new Date(rainyHour.dt * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric"
        })
      : "unknown";
  };
  
  const getRainEndTime = (hourlyData) => {
    let rainyPeriodStarted = false;
    let endTime = "unknown";
  
    for (const hour of hourlyData) {
      if (hour.weather[0].main === "Rain") {
        if (!rainyPeriodStarted) {
          rainyPeriodStarted = true;
          endTime = new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric"
          });
        }
      } else if (rainyPeriodStarted) {
        endTime = new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric"
        });
        break;
      }
    }
  
    return endTime;
  };  
  
  return (
    <section className="items-center justify-center">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.xPaddings} py-8 relative`}
        >
          <div className=" flex">
            <input
              type="text"
              placeholder="Search for a city"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="px-4 py-2 border w-full bg-white"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-8 py-4 bg-zinc-800 text-white hover:bg-blue-800"
            >
              Search
            </button>
          </div>
          <img
            src="/clouds.jpeg"
            alt="hero_cover"
            className="w-full sm:h-[300px] h-[200px] object-cover relative"
          />
          <div>
            
          </div>
          <div className='flex'>
        {error ? (
        <div className="mt-4">
          {/* Display error message */}
          <p className="text-red-500">{error}</p>
        </div>
      ) : weatherData ? (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
              <p className="mb-4">{`Weather in ${weatherData.timezone}: ${weatherData.current.weather[0].description}`}</p>
              <p className="mb-4">{`Current Temperature: ${weatherData.current.temp}°C`}</p>
              <p className="mb-4">{`Daily Summary: ${weatherData.daily[0].weather[0].main} - ${weatherData.daily[0].weather[0].description}`}</p>
              {weatherData.hourly && (
                <p>
                  Likely rainy period from{" "}
                  {getRainStartTime(weatherData.hourly)}
                  {" to "}
                  {getRainEndTime(weatherData.hourly)}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src={weatherImages[weatherData.daily[0].weather[0].main]}
                alt="Weather"
                className="w-f h-f"
                
              />
            </div>
          </div>
      ) : null}
      </div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
