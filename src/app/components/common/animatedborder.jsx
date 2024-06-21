"use client"
import React, { useState, useEffect } from 'react';

const AnimatedBorder = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`border border-transparent rounded overflow-hidden ${isVisible ? 'animate-border' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedBorder;