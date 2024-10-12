"use client";
import * as React from "react";
import WelcomeBar from "@/components/welcome"; // Ensure it's imported with the correct case
import Topbar from "@/components/Topbar";
import UploadSection from "@/components/UploadSection";
const Home: React.FC = () => {
  return (
    <div>
      <Topbar />
      <WelcomeBar />
      <UploadSection/>
    </div>
  );
};

export default Home;
