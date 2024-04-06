import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () =>  {
  const [darkMode, setDarkMode] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const bodyComputedStyle = window.getComputedStyle(document.body);
    const colorValue = bodyComputedStyle.getPropertyValue('--color').trim();
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkMode(colorValue === '#FFF' ? false : prefersDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.style.setProperty('--color', darkMode ? '#1a1a1a' : '#FFF');
    document.documentElement.style.setProperty('--button-color', darkMode ? '#FFF' : '#1a1a1a');
    document.documentElement.style.setProperty('--text-color', darkMode ? '#FFF' : '#3e4554');
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center min-h-[90vh] my-[5vh] mx-7 text-[color:var(--text-color)]">
      <div className="w-full min-h-[90vh] gap-5 max-w-3xl border-[1px] border-dashed border-[color:var(--text-color)] py-[5rem] px-14 flex flex-col justify-between">
        <div className="font-[500]">
          <h1 className="text-6xl sm:text-7xl font-bold">デファクト</h1>
          <p className="mt-6 opacity-70">Nenad Petrović • @defakuto</p>
          <p className="mt-6">this is my website</p>
          <p className="mt-4">embrace adrenaline, music, and every moment. 
  Live each day like it's your last drive. 
  Unforgettable adventures ahead!</p> 
          <p className="mt-4">I deal with design, web design, development and social networks.</p>
          <p className="mt-4">studied Web design, Development & Social Media at <strong>London App Brewery</strong> school</p>
          <div className="flex flex-col gap-1 mt-4 items-start">
            <Link to="/about"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">About me</button></Link>
            <Link to="/projects"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">Projects</button></Link>
            <a href="mailto:defakutonaith@gmail.com"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">Contact me</button></a>
            <button className="bg-[color:var(--button-color)] text-[color:var(--color)] rounded-md px-3 py-1 font-medium" onClick={toggleDarkMode}>{darkMode ? "light" : "dark"}</button>
          </div>
        </div>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/defakuto">@instagram</a>
          <a href="https://www.youtube.com/@defakuto">@youtube</a>
          <a href="https://www.tiktok.com/@defakuto">@tiktok</a>
          <a href="https://github.com/defakuto">@github</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
