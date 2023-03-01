import { IVideoGames } from "../../models/video_games_interface";
import CardComponent from "./card/card";
import { useState, useEffect, useContext } from "react";
import Data from "../../api/test";
import { CustomContext } from "../context";

const VideoGamesList = () => {
    let [videoGameList, setVideoGameList] = useState<any[]>([]);

    const msg = useContext(CustomContext);
    const games = Data;

    useEffect(() => {
        let isComponentMounted = true;

        const loadGames = async () => {

            if (isComponentMounted) {
                setVideoGameList(games);
            }
        };
        loadGames();

        return () => {
            isComponentMounted = false;
        };
    });

    const filtered = !msg?.name && !msg?.score
        ? videoGameList
        : videoGameList.filter((game) =>
            game.name.toLowerCase().includes(msg?.name.toLowerCase()) || (game.rating === (msg?.score))
        );

    return (
        <>
            {
                filtered.map((game: IVideoGames, index: number) => (
                    <div key={index}>
                        <CardComponent {...game} />
                    </div>
                ))
            }
        </>
    )
}

export default VideoGamesList;