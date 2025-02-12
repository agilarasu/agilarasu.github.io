"use client";
import { Link } from "react-scroll";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import img from "@/assets/img.jpg";
export default function Intro({
  primary = "white",
  secondary = "white-600",
  background = "black",
  buttonColor = "white-600",
}) {
  const [currentProfession, setCurrentProfession] = useState(0);
  const professions = ["Indie Hacker","Security Researcher", "Backend Developer"];
  const professionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession(
        (prevProfession) => (prevProfession + 1) % professions.length
      );
    }, 3000); // Change profession every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (professionRef.current) {
      professionRef.current.style.animation = "slideDown 0.5s ease-in-out";
      setTimeout(() => {
        professionRef.current.style.animation = "";
      }, 500); // Reset animation after it completes
    }
  }, [currentProfession]);

  return (
    <section
      className={`w-[80%] mx-auto container w-full flex flex-col md:flex-row items-center justify-center min-h-screen px-4 bg-${background}`}
    >
      <div
        className={`text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2 text-${primary}`}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Hi 👋
          <br /> I'm <span className={`text-blue-400`}>Agilarasu</span>
        </h1>
        <p ref={professionRef} className="text-lg md:text-xl mb-6">
          {professions[currentProfession]}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <Link to="connect" smooth={true} duration={500}>
            <Button
              className={`bg-white text-black px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-2 md:mb-0 md:mr-4`}
            >
              Get in touch
            </Button>
          </Link>
          {/* <Button
            variant="outline"
            className={`text-white bg-black px-6 py-3 rounded-full border border-white-200 border-opacity-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            My CV
          </Button> */}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div
          className={`rounded-full bg-white w-36 h-36 md:w-72 md:h-72 mx-auto relative flex items-center justify-center`}
        >
          <Avatar className="w-32 h-32 md:w-64 md:h-64 border-4 border-gray-600">
            <AvatarImage src={img} alt="Profile picture" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
