import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
           
                <section className="we-offer-area text-center bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>What I <span>provide</span></h2>
                        <h4>"I want to put a ding in the universe."</h4>
                    </div>
                </div>
            </div>
                <div className="row our-offer-items less-carousel">
                    {/* <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                        <i className="fas fa-shopping-cart"></i>
                            <h4>Ecommerce Website</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                        <i className="fas fa-mobile-alt"></i>
                            <h4>Mobile App Development</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                        <i className="fas fa-code"></i>
                            <h4>Web App Development</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                        <i className="far fa-smile"></i>
                            <h4>UI Designing</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                        <i className="fas fa-chalkboard-teacher"></i>
                            <h4>Teaching Code</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item -->

                    <!-- Single Item --> */}
                    <div className="col-md-4 col-sm-6 equal-height">
                        <div className="item">
                            <i className="fas fa-headset"></i>
                            <h4>IT Support</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}
                </div>
        </div>
    </section>
            
        )
    }
}

export default Services
