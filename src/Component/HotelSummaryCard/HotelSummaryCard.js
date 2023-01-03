import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaAward,FaBookmark, FaStar,FaEye} from "react-icons/fa";
const HotelSummaryCard = ({ data }) => {
    const { title, _id, architect, total_view, image_url, details,rating } = data;
    console.log(data);
    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image roundedCircle
                    src={architect?.img}
                    style={{height:'50px'}}
                    >
                    </Image>
                    <div className='-ml-64'>
                        <p>{architect?.name}</p>
                        <p className='-mt-4'>{architect?.Opended_date}</p>
                        </div>
                    <div className='d-flex'>
                        <FaAward></FaAward>
                        <FaBookmark></FaBookmark>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text className='text-justify'>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + '...'}<Link to={`/hotel/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div >
                    <FaStar className='text-warning'></FaStar>
                    <span>{rating?.number}</span>
                    </div>
                    <div>
                    <div>
                       <FaEye></FaEye>
                        <span className='-ml-1'>{total_view}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default HotelSummaryCard;