import React, {Component} from 'react';
import CarouselBoxHk from '../Components/CarouselBoxHk';
import {
    Container,
    Card,
    Button,
    CardImg
} from 'react-bootstrap'


class Home extends Component {
    render() {
        return (
            <><CarouselBoxHk />
            <Container>
                
                                    <Container>
                <h2 className="text-center m-4">Наша команда</h2>
                <div className="row">
                    <div className="col">
                    <Card className="m-4 text-center" bg="light" border="primary">
                        <Card.Img
                        variant="top"
                        src="https://illustrators.ru/uploads/illustration/image/1196073/Programmers_alt_col_copy.png"
                            />
                        <Card.Body>
                            <Card.Title>Розробники</Card.Title>
                            <Card.Text>
                                Команда 1
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
               </div>
                    <div className="col">
                <Card className="m-4 text-center" bg="light">
                    <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFNQ3lCJkCCZ9XI8XnSFiOXRWOXFqr90xnAbAKT4AW-Qm8FltBn1asI4tOBFbOVCxx1Y&usqp=CAU"
                    />
                    <Card.Body>
                        <Card.Title>Природознавці</Card.Title>
                        <Card.Text>
                            Команда 2
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>
                            </div>

                                <div className="col">
                <Card className="m-4 text-center" bg="light">
                    <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPU60CiCQig8Chwdm2Tu9UdYWcAxEanu-jDnTa3I0K0lzyfGhl1FARiSeTu_7XoC8qSQ&usqp=CAU"
                    />
                    <Card.Body>
                        <Card.Title>Маркетилоги</Card.Title>
                        <Card.Text>
                            Команда 3
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>
                </div>
                </div>
            </Container>


            </Container></>
        );
    }
}

export default Home;
