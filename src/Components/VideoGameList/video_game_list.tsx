import { IVideoGames } from "../../models/video_games_interface";
import CardComponent from "./card/card";
import { useState, useEffect } from "react";
import Data from "../../api/test";
const VideoGamesList = () => {
    let [videoGameList, setVideoGameList] = useState<any[]>([]);

    useEffect(() => {
        let isComponentMounted = true;
        const loadGames = async () => {
            const games = Data;
            if (isComponentMounted) {
                setVideoGameList(games);
            }
        };
        loadGames();

        return () => {
            isComponentMounted = false;
        };
    });

    return (
        <>
            {
                videoGameList.map((game: IVideoGames, index: number) => (
                    <div key={index}>
                        <CardComponent {...game} />
                    </div>
                ))
            }
        </>
    )

}

export default VideoGamesList;