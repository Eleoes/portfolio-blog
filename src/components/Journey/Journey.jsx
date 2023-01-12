import React, { useState } from 'react';
import './journey.css';

const Journey = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="journey section">
            <h2 className="section__title">Trajectory</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="journey__container container">
                <div className="journey__tabs">
                    <div className={toggleState === 1 ? "journey__button journey__active button--flex" : "journey__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className='bx bxs-graduation journey__icon'></i> Education
                    </div>

                    <div className={toggleState === 2 ? "journey__button journey__active button--flex" : "journey__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className='bx bxs-briefcase journey__icon' ></i>Experience
                    </div>
                </div>

                <div className="journey__sections">
                    <div className={toggleState === 1 ? "journey__content journey__content-active" : "journey__content"}>
                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Software Engineering</h3>
                                <span className="journey__subtitle">General Assembly</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>May - Oct 2022
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <div className="journey__line"></div>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">Construction Management</h3>
                                <span className="journey__subtitle">SFSU</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>Spring 2020
                                </div>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">B. Architecture</h3>
                                <span className="journey__subtitle">ITESM Monterrey</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>2009 - 2014
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">Japanese Language</h3>
                                <span className="journey__subtitle">外語ビジネス専門学校</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>2008 - 2009
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "journey__content journey__content-active" : "journey__content"}>
                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Student</h3>
                                <span className="journey__subtitle">General Assembly</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">Project Manager</h3>
                                <span className="journey__subtitle">Baran Studio</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>July 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div>
                                <h3 className="journey__title">Designer</h3>
                                <span className="journey__subtitle">Baran Studio</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>Feb 2018 - Jun 2021
                                </div>
                            </div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>
                        </div>

                        <div className="journey__data">
                            <div></div>

                            <div>
                                <span className="journey__rounder"></span>
                                <span className="journey__line"></span>
                            </div>

                            <div>
                                <h3 className="journey__title">Designer</h3>
                                <span className="journey__subtitle">BantaDESIGN</span>
                                <div className="journey__calendar">
                                    <i className="uil uil-calendar-alt"></i>May 2015 - Jan 2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;