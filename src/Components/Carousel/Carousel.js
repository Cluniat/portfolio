import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import InfoProject from "../InfoProject/InfoProject";
import PropTypes from "prop-types";
import polytech_2018 from "../../Assets/designs/logo-polytech.jpg"
import bal from "../../Assets/designs/affiche-bal.jpg"
import gala from "../../Assets/designs/affiche-gala.jpg"
import gone from "../../Assets/designs/affiche-gone.jpg"
import mimi from "../../Assets/designs/logo-mimi.png"
import telethon from "../../Assets/designs/affiche-telethon.jpg"
import logo_bal from "../../Assets/designs/logo-bal.png"
import sauciflard from "../../Assets/designs/logo-saucifflard.png"
import gmd from "../../Assets/designs/logo-gmd.png"
import halloween from "../../Assets/designs/affiche-halloween.jpg"
import hogwec from "../../Assets/designs/logo-hogwec.png"
import irhumman from "../../Assets/designs/logo-irhumman.png"
import logo_gone from "../../Assets/designs/logo-gone.png"
import pds from "../../Assets/designs/logo-pds.png"
import slc from "../../Assets/designs/logo-slc.png"
import paques from "../../Assets/designs/affiche-paques.jpg"
import tigresse from "../../Assets/designs/logo-tigresse.jpg"
import mtm from "../../Assets/designs/logo-mtm.png"

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nextSlide: 0, settings: null};
    }

    toDisplay() {
        if(this.props.isProject) {
            return  <Slider {...this.state.settings}>
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
                        description={"Site web portfolio. Développé en ReactJS et Laravel, entièrement administrable."}
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
                <div>
                    <InfoProject
                        title={"Serveur"}
                        description={"Création d'un serveur pour héberger un site web depuis un raspberry PI"}
                        technos={"Raspbian"}
                        collapse={this.state.nextSlide !== 4}/>
                </div>
            </Slider>
        }
        else if (this.props.isLogo) {
            return  <Slider {...this.state.settings}>
                <div>
                    <img className={"design"} src={polytech_2018} alt={"polytech_2018"}/>
                </div>
                <div>
                    <img className={"design"} src={mimi} alt={"mimi"}/>
                </div>
                <div>
                    <img className={"design"} src={sauciflard} alt={"sauciflard"}/>
                </div>
                <div>
                    <img className={"design"} src={gmd} alt={"gmd"}/>
                </div>
                <div>
                    <img className={"design"} src={pds} alt={"pds"}/>
                </div>
                <div>
                    <img className={"design"} src={slc} alt={"slc"}/>
                </div>
                <div>
                    <img className={"design"} src={hogwec} alt={"hogwec"}/>
                </div>
                <div>
                    <img className={"design"} src={mtm} alt={"mtm"}/>
                </div>
                <div>
                    <img className={"design"} src={irhumman} alt={"irhumman"}/>
                </div>
                <div>
                    <img className={"design"} src={tigresse} alt={"tigresse"}/>
                </div>
                <div>
                    <img className={"design"} src={logo_gone} alt={"logo_gone"}/>
                </div>
                <div>
                    <img className={"design"} src={logo_bal} alt={"logo_bal"}/>
                </div>
            </Slider>
        }
        else {
            return  <Slider {...this.state.settings}>
                <div>
                    <img className={"design"} src={bal} alt={"bal"}/>
                </div>
                <div>
                    <img className={"design"} src={gala} alt={"gala"}/>
                </div>
                <div>
                    <img className={"design"} src={gone} alt={"gone"}/>
                </div>
                <div>
                    <img className={"design"} src={telethon} alt={"telethon"}/>
                </div>
                <div>
                    <img className={"design"} src={halloween} alt={"halloween"}/>
                </div>
                <div>
                    <img className={"design"} src={paques} alt={"paques"}/>
                </div>
            </Slider>
        }
    }

    render() {

        this.state.settings = {
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
                    breakpoint: 1020,
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
           this.toDisplay()
        );
    }
}

Carousel.propTypes = {
    isProject: PropTypes.bool,
    isLogo: PropTypes.bool,
    isPoster: PropTypes.bool,
};

Carousel.defaultProps = {
    isProject: false,
    isLogo: false,
    isPoster: false,

}

export default Carousel;