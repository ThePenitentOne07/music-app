import React from "react";
import useMusicPlayer from "../hook/usePlayerProvider";

function Header() {
    const { currentTrackName } = useMusicPlayer();
    return (
        <div className="header">
            <div className="scrolling-text">{currentTrackName}</div>
        </div>
    );
}

export default Header;
