'use client'

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import RealDigital from "@/components/RealDigital";
import Technology from "@/components/Technology";
import Engc from "@/components/Engc";
import Potential from "@/components/Potential";
import Navigating from "@/components/Navigating";
import JoinUs from "@/components/JoinUs";

export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      delay: 300,
      duration: 600
    });
  }, []);
  
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main className="min-h-screen p-4">
      {/* hero section */}
      <Hero />
      {/* real and digital worlds */}
      <RealDigital />
      {/* our technology in detail section */}
      <Technology />
      {/* Find out what investors appreciate most about ENGC */}
      <Engc />
      {/* Uncover Your Earning Potential with ENGC */}
      <Potential />
      {/* Navigating the Path to a Greener Future */}
      <Navigating />
      {/* Join Us in Pioneering Green Investments */}
      <JoinUs />
    </main>
  );
}
