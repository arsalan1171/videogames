import './landing_page.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import getVideoGamesList from "../../api/video_games_api";
const LandingPage = () => {

    let [videoGameList, setVideoGameList] = useState<any[]>([]);

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
    }, [videoGameList]);

    return (
        <div className='container'>
            <Container>
                <Row>
                    <Col>Filter Panel</Col>
                    <Col>List</Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;