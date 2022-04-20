
// Exercise made in: https://www.linkedin.com/learning-login/share?account=37488348&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Freact-hooks%2Fsending-interactions-up-component-trees%3Ftrk%3Dshare_video_url%26shareId%3DV57MAj0pSaGnmnNb7obt7g%253D%253D

import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

// Creates an empty array that is {length} long.
const createArray = (length) => [...Array(length)];

// Creates a red star if true or gray star if false.
// Clicking a star runs the onSelect fn.
const Star = ( {selected = false, onSelect} ) => (
  <FaStar 
    color={selected ? "red" : "gray"}
    onClick={onSelect} />
);

// Creates row of stars thats {totalStars} long.
export const StarRating = ({totalStars = 5}) => { 
  const [selectedStars, setSelectedStars] = useState(0);

  return ( 
    <main>
      <h1>
        { createArray(totalStars).map((n, i) => 
      <Star
        key={i} 
        // Sends true if selectedStars is greater than or equal to i.
        selected={selectedStars > i} 
        // Sets selectedStars to a value equals to the clicked star's position.
        onSelect={() => setSelectedStars(i + 1)} /> )}
      </h1>
        <h2>{selectedStars} of {totalStars}</h2>
    </main>
    
  );
}