import React, { useState, createContext } from "react";
import Groovy from "../mp3/groovy-ambient-funk-201745.mp3";
import Jazzy from "../mp3/jazzy-abstract-beat-11254.mp3";
import LetItGo from "../mp3/let-it-go-12279.mp3";
import Moment from "../mp3/moment-14023.mp3";
import TheBest from "../mp3/the-best-jazz-club-in-new-orleans-164472.mp3";
import Weekend from "../mp3/weeknds-122592.mp3";
const MusicPlayerContext = createContext();

const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: "Groovy Ambient Funk",
            file: Groovy,
        },
        {
            name: "Jazzy Abstract Beat",
            file: Jazzy,
        },
        {
            name: "Let It Go",
            file: LetItGo,
        },
        {
            name: "Moment",
            file: Moment,
        },
        {
            name: "The Best Jazz Club In New Orleans",
            file: TheBest,
        },
        {
            name: "Weekends",
            file: Weekend,
        },
    ],
    currentTrackIndex: null,
    isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState(defaultValues);
    return (
        <MusicPlayerContext.Provider value={{ state, setState }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };