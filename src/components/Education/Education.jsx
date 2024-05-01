import React from 'react';
import './Education.css';

function Education() {
    const collegeDetails = () => {
        return [
            {
                collegeLogo: "./sahyadri.jpg",
                collegeName: "Sahyadri College of Engineering and Management",
                date: "Aug 2016 - Aug 2020",
                collegeDegreeTitle: "Bachelor of Engineering (Mechanical)",
            }
        ];
    }

    const details = collegeDetails()[0];

    return (
        <div className='education' id='education'>
            <h1 className='text-center text-light mt-3'>Education</h1>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="box-content">
                        <div className="boxcollege">
                            <div className="college-content">
                                {details.collegeLogo && (
                                    <img
                                        src={details.collegeLogo}
                                        className="college-logo"
                                        alt="College Logo"
                                    />
                                )}
                                <div className="college-details">
                                    <p className='collegeDegree mt-2'>{details.collegeDegreeTitle}</p>
                                    <p className=' collegeName mb-0'>{details.collegeName}</p>
                                    <p className='collegeDate'>{details.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
