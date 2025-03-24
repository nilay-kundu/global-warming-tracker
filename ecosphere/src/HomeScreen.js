import React, { useEffect, useState } from 'react';

const HomeScreen = ({ onStart }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = (count) => {
      const starArray = [];
      for (let i = 0; i < count; i++) {
        starArray.push({
          id: i,
          x: Math.random() * window.innerWidth, 
          y: Math.random() * window.innerHeight, 
          size: Math.random() * 3 + 1, // Random size between 1px and 4px
          animationDelay: `${Math.random() * 5}s`, // Random start delay
          animationDuration: `${Math.random() * 2 + 2}s`, // Random duration between 2s and 4s
        });
      }
      setStars(starArray);
    };

    generateStars(125); 
  }, []);

  return (
    <div style={styles.container}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.y,
            left: star.x,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0,
            animation: `twinkle ${star.animationDuration} infinite alternate`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}

      {/* Welcome Text */}
      <h1 style={styles.title}>Welcome to Ecosphere</h1>
      <p style={styles.description}>
        Learn about the world's ecological factors on a country-by-country basis.
      </p>

      {/* Earth Button */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        alt="Earth"
        style={styles.earthButton}
        onClick={onStart}
      />

      {/* Inject keyframe animations */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    marginBottom: '10px',
    color: 'white',
  },
  description: {
    fontWeight: 'normal',
    fontSize: '18px',
    maxWidth: '60%',
    lineHeight: '1.5',
    color: 'white',
  },
  earthButton: {
    // marginTop: '30px',
    width: '250px',
    height: '250px',
    cursor: 'grab',
    borderRadius: '50%',
  },
};

export default HomeScreen;
