import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <head>
                <base href="/"></base>
            </head>
            <div>
                <Link to="/aboutManabaViewer">ManabaViewerについて</Link>
                <Link to="/aboutMySkills">私の持っている技術</Link>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => { navigate("/aboutManabaViewer") }}
                >
                    ManabaViewerについて
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => { navigate("/aboutMySkills") }}
                >
                    私の持っている技術
                </Button>
                <h1>Home</h1>
            </div>
        </>
    );
}

export default Home;