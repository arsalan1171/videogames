import Card from 'react-bootstrap/Card';
import { IVideoGames } from '../../../models/video_games_interface';
import './filter_card.css';

const FilterCard = (props: IVideoGames) => {

    const dateFormatter = (): string => {
        var date = new Date(props.first_release_date);
        return date.toLocaleDateString();
    }

    return (
        <Card className="mb-2">
            <Card.Header>{props.name} <div style={{ float: 'right', fontWeight: 'bold' }}> {props.rating}</div> </Card.Header>
            <Card.Body>
                <Card.Title style={{ fontSize: 12 }}>Release Date: {dateFormatter()} </Card.Title>
                <Card.Text>
                    {props.summary}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FilterCard;