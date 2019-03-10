import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import InfoProject from "../InfoProject/InfoProject";

class Carousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}/>
                </div>
            </Slider>
        );
    }
}

export default Carousel;