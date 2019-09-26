import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import InfoProject from "../InfoProject/InfoProject";
import PropTypes from "prop-types";
import {connect} from "react-redux";

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
import ProjectActions from "../../Store/Project/actions";
import {withRouter} from "react-router-dom";

class Carousel extends React.Component {

    componentDidMount() {
        this.props.getAllProjects()
    }

    constructor(props) {
        super(props);
        this.state = {nextSlide: 0, settings: null};
    }

    toDisplay() {
        if(this.props.isProject && this.props.projects && !this.props.projects.loading) {
            return<Slider {...this.state.settings}>
                { this.props.projects.data.map((project, index) => (
                    <div key={`project-${index}`}>
                        <InfoProject
                            title={project.name}
                            description={project.description}
                            technos={project.technos.toString()}
                            collapse={this.state.nextSlide !== index}
                            link={project.link}
                        />
                    </div>
                ))}

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

const mapStateToProps = state => ({
    projects: state.projects.projects,
});

const mapDispatchToProps = dispatch => ({
    getAllProjects: () => dispatch(ProjectActions.allProjects())
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel));
