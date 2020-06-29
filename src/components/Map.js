import React, { Component } from 'react';
import App from '../App';

class Map extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <div class="page-container">
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                               
                                <div className="map-data m-b-40">
                                    <h3 className="title-3 m-b-30">
                                        <i className="fas fa-wifi"></i>Manage Resource</h3>
                                    <div className="filters">
                                        <div className="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                            <select className="js-select2" name="property">
                                                <option selected="selected">All Properties</option>
                                                <option value="">Products</option>
                                                <option value="">Services</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                        <div className="rs-select2--dark rs-select2--sm rs-select2--border">
                                            <select className="js-select2 au-select-dark" name="time">
                                                <option selected="selected">All Time</option>
                                                <option valueName="">By Month</option>
                                                <option valueName="">By Day</option>
                                            </select>
                                            <div className="dropDownSelect2"></div>
                                        </div>
                                    </div>
                                    <div className="map-wrap m-t-45 m-b-20">
                                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.3239608231399!2d11.49957482600996!3d3.862661897190293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfa23aace247%3A0xe07671abb10169f9!2s%C3%89cole%20Nationale%20Sup%C3%A9rieur%20Polytechnique%20de%20Yaound%C3%A9!5e1!3m2!1sfr!2scm!4v1593274932490!5m2!1sfr!2scm" height="500" width="900" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Map