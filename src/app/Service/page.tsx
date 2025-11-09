"use client"
import React, { useEffect } from 'react';
import S1 from '@/Component/S1';





export default function ServicePage() {
  useEffect(() => {
    // Scroll to the specific section if a hash is present in the URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial scroll on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <S1 />
     
    </div>
  );
}