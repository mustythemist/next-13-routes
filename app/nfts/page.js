'use client';

import { useState } from "react";

const Nfts = () => {

  const [desc, setDesc] = useState();

  const getDetails = async () => {
    console.log('log ');

    try {
      const response = await fetch('/posts');
      const data = await response.json();
      console.log('Response:', data);
      setDesc(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h2>NFTS</h2>

      <button onClick={() => getDetails()}>blick</button>
    </div>
  );
}

export default Nfts;