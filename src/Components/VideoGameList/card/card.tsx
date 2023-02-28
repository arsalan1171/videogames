import Card from 'react-bootstrap/Card';
import { IVideoGames } from '../../../models/video_games_interface';
import './card.css';

const CardComponent = (props: IVideoGames) => {
    return (

        <Card
            style={{ width: '55rem' }}
            className="mb-2"
        >
            <Card.Header>{props.name} <div style={{ float: 'right', fontWeight: 'bold' }}> {props.rating}</div> </Card.Header>
            <Card.Body>
                <Card.Title style={{ fontSize: 12 }}>Release Date:{props.first_release_date} </Card.Title>
                <Card.Text>
                    {props.summary}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;