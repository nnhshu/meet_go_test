"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="back-page text-white flex gap-2 items-center" onClick={handleBack}>
        <FiArrowLeft />
        <span>Back</span>
    </div>
  );
};

export default BackButton;
