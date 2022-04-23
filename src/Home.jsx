import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = "Exercise App";
  }, []);

  return (
    <main>
    <h1>Home</h1>
  </main>
  )
}