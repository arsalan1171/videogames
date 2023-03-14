import { useState, useEffect, useContext } from "react";
import { IVideoGames } from "../../models/video_games_interface";
import { SearchContext } from "../../contexts/search_context";
import FilterCard from "./card/filter_card";
import Data from "../../api/test";

const VideoGamesList = () => {
    let [videoGameList, setVideoGameList] = useState<IVideoGames[]>([]);

    const searchQuery = useContext(SearchContext);
    const games: IVideoGames[] = Data;

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

    const filtered = !searchQuery?.name && !searchQuery?.score
        ? videoGameList
        : videoGameList.filter((game) =>
            game.name.toLowerCase().includes(searchQuery?.name.toLowerCase())
             || (game.rating === (searchQuery?.score))
        );

    return (
        <>
            {
                filtered.map((game: IVideoGames, index: number) => (
                    <div key={index}>
                        <FilterCard {...game} />
                    </div>
                ))
            }
        </>
    )
}

export default VideoGamesList;