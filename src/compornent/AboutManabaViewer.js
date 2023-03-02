import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const AboutManabaViewer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => { navigate("/aboutManabaViewer") }}>here</Button>
      <p>ManabaViewerについて</p>
    </div>
  );
}

export default AboutManabaViewer;