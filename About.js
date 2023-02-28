import React, {Component} from 'react';
import { Container, Tab, Col, Nav, Row } from "react-bootstrap";

export class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Басейн Амазонки </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                             <Nav.Link eventKey="second">Подорож у джунглі річки Амазонки</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                            <Nav.Link eventKey="third">Дикий світ джунглів</Nav.Link>
                                </Nav.Item>

                                 <Nav.Item>
                            <Nav.Link eventKey="fourth">Рослини</Nav.Link>
                                </Nav.Item>

                                 <Nav.Item>
                          <Nav.Link eventKey="fifth">Хижаки</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">   {/* Клас для відступу фото від панелі навігації */}
                                <Tab.Pane eventKey="first">
                                    <img src="https://100dorog.ru/upload/contents/432/2008/Braziliya_Tropichesk-03403118.jpg?width=795&scale=both" />
                                    <h3>Басейн Амазонки в північній Бразилії тягнеться від андських висот до атлантичного узбережжя і включає великі простори, що живлять численні притоки цієї могутньої річки. В області небагато доріг, але багато посадкових майданчиків для повітряного транспорту.</h3>
                                    <p>
                                    Річка Амазонка простяглася на 6565 км, це друга за довжиною річка після Нілу (6648 км). У басейні Амазонки розкинувся найбільший у світі вологий тропічний ліс, що займає неосяжну територію, майже 6 мільйонів кв. км., поділену між дев'ятьма різними країнами. Кровоносною системою цього безкрайнього лісу є могутня Амазонка та її притоки; разом вони несуть приблизно 25% води, що міститься у всіх річках світу.

                     </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://cdn.fishki.net/upload/post/201312/06/1231682/45_image.jpg" />
                                    <h3>
                                        Красивий міст Амазонки
                                    </h3>
                                    <p> </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://tn.fishki.net/26/upload/post/201312/06/1231682/53_image.jpg" />
                                    <h3>Різноманіття дикої природи в джунглях</h3>
                                    <img src="https://tn.fishki.net/26/upload/post/201312/06/1231682/55_image.jpg" />
                                    <p> </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://tn.fishki.net/26/upload/post/201312/06/1231682/67_image.jpg" />
                                    <h3>Різноманітні рослини Амазонки</h3>
                                    <p> </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://tn.fishki.net/26/upload/post/201312/06/1231682/66_image.jpg" />
                                    <h3>Хижаки дикої природи Амазонки</h3>
                                    <p> </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
