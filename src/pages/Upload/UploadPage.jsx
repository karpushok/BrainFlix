import Header from "../../components/Header/Header";
import Upload from "../../components/Upload/Upload";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./UploadPage.css";

function UploadPage() {
  return (
    <div className="UploadPage">
      <Upload />
    </div>
  );
}
export default UploadPage;
