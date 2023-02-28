import './landing_page.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import getVideoGamesList from "../../api/video_games_api";
import CardComponent from '../VideoGameList/card/card';
import { IVideoGames } from '../../models/video_games_interface';

const LandingPage = () => {

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
        <div className='container'>
            <Container>
                <Row>
                    <Col>Filter Panel</Col>
                    <Col>
                        {
                            videoGameList.map((game: IVideoGames, index: number) => (
                                <div key={index}>
                                    <CardComponent {...game} />

                                </div>
                            ))
                        }
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;