import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import InfoProject from "../InfoProject/InfoProject";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nextSlide: 0};
    }

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            beforeChange: (current, next) => (this.state.nextSlide !== next)? setTimeout( () => this.setState({ nextSlide: next }), 10) : null ,
            responsive: [
                {
                    breakpoint: 2130,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 1005,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        arrows: false
                    }
                },
            ]
            };
        return (
            <Slider {...settings}>
                <div>
                    <InfoProject
                        title={"Video Game"}
                        description={"Site web permettant l'affichage et la recherche de jeux vidéos depuis une API. Développé en VueJS 2 (visuels, gestion de projet)"}
                        technos={"VueJS Axios VueX Git Trello"}
                        collapse={this.state.nextSlide !== 0}
                        link={"https://github.com/Cluniat/VideoGame"}
                    />

                </div>
                <div>
                    <InfoProject
                        title={"Portfolio"}
                        description={"Site web portfolio. Développé en ReactJS et Laravel, entièrement administrable. Hébergé sur Raspberry PI"}
                        technos={"ReactJS Laravel Redux Git"}
                        collapse={this.state.nextSlide !== 1}
                        link={"https://github.com/Cluniat/portfolio"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Projet Web"}
                        description={"Création d'un site e-commerce sous le framework Laravel. Création d'une architecture SASS pour les feuilles de style"}
                        technos={"laravel sass php blade git"}
                        collapse={this.state.nextSlide !== 2}
                        link={"https://github.com/Cluniat/Laravel-SASS"}/>
                </div>
                <div>
                    <InfoProject
                        title={"Graphes"}
                        description={"Implémentation, optimisation et comparaison d'algorithmes de coloration de graphes"}
                        technos={"java theorie des graphes"}
                        collapse={this.state.nextSlide !== 3}
                        link={"https://github.com/Cluniat/GraphColo"}/>
                </div>
            </Slider>
        );
    }
}

export default Carousel;