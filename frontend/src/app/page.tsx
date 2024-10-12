"use client";
import * as React from "react";
import WelcomeBar from "@/components/welcome"; // Ensure it's imported with the correct case
import Topbar from "@/components/Topbar";

const Home: React.FC = () => {
  return (
    <div>
      <Topbar />
      <WelcomeBar />
    </div>
  );
};

export default Home;
