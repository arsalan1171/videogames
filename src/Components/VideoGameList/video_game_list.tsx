import { IVideoGames } from "../../models/video_games_interface";
import CardComponent from "./card/card";
import { useState, useEffect } from "react";
import getVideoGamesList from "../../api/video_games_api";
const VideoGamesList = () => {
    let [videoGameList, setVideoGameList] = useState<IVideoGames[]>([]);

    useEffect(() => {
        let isComponentMounted = true;
        const loadGames = async () => {
            const games = await getVideoGamesList();
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
            }</>
    )

}

export default VideoGamesList;