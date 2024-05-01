import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaGitAlt, FaDocker, FaGithub, FaAws } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiSpringsecurity, SiMysql, SiPostman } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaSquareSteam, FaMicrochip } from "react-icons/fa6";
import { MdGeneratingTokens } from "react-icons/md";
import './Skills.css';

function Skills() {

    const skilldetails = () => {
        return [
            {
                title: "React JSX",
                icon: <FaReact className='icon react' style={{ color: "#00dcff" }} />,
            },
            {
                title: "React Native",
                icon: <FaReact className='icon react' style={{ color: "#9b27c2" }} />,
            },
            {
                title: "HTML",
                icon: <FaHtml5 className='icon html' style={{ color: "#e44d26" }} />,
            },
            {
                title: "CSS",
                icon: <FaCss3Alt className='icon css' style={{ color: "#264de4" }} />,
            },
            {
                title: "JavaScript",
                icon: <SiJavascript className='icon js' style={{ color: "#f0db4f" }} />,
            },
            {
                title: "Bootstrap",
                icon: <FaBootstrap className='icon bootstrap' style={{ color: "#8913ff" }} />,
            },
            {
                title: "Java",
                icon: <FaJava className='icon java' style={{ color: "red" }} />,
            },
            {
                title: "Spring Boot",
                icon: <SiSpringboot className='icon springboot' style={{ color: "#6cb33e" }} />,
            },
            {
                title: "Spring Security",
                icon: <SiSpringsecurity className='icon springsecurity' style={{ color: "#036a9e" }} />,
            },
            {
                title: "Spring Data JPA",
                icon: <FaGitAlt className='icon springjpa' style={{ color: "#6b3e02" }} />,
            },
            {
                title: "REST API",
                icon: <FaSquareSteam className='icon restapi' style={{ color: "#171c0b" }} />,
            },
            {
                title: "Microservices",
                icon: <FaMicrochip className='icon microservices' style={{ color: "#241b54" }} />,
            },
            {
                title: "Jwt Token, OAuth",
                icon: <MdGeneratingTokens className='icon jwt' style={{ color: "#2c9184" }} />,
            },
            {
                title: "MySQL",
                icon: <SiMysql className='icon mysql' style={{ color: "#dbb258" }} />,
            },
            {
                title: "Docker",
                icon: <FaDocker className='icon docker' style={{ color: "#2496ed" }} />,
            },
            {
                title: "GitHub",
                icon: <FaGithub className='icon github' style={{ color: "black" }} />,
            },
            {
                title: "Postman",
                icon: <SiPostman className='icon postman' style={{ color: "#fd6c35" }} />,
            },
            {
                title: "VS Code",
                icon: <DiVisualstudio className='icon vscode' style={{ color: "#25abf2" }} />,
            },
            {
                title: "AWS",
                icon: <FaAws className='icon aws' style={{ color: "#ff9900" }} />,
            },
        ];
    };

    return (
        <div className='skills-container' id='skills' style={{ paddingTop: '80px' }}>
            <div className='skills-content'>
                <h1 className='skills-title text-center'>Skills</h1>
                <p className='skills-description text-center p-3'>Cultivating these skills has been a focal point of my efforts over the past two years.</p>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="box">
                            <h1 className='text-center mt-3 coding'>Frontend</h1>
                            <div className='new-container'>
                                <SkillBoxes skills={skilldetails().slice(0, 6)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="box backend">
                            <h1 className='text-center mt-3 coding '>Backend</h1>
                            <div className='new-container'>
                                <SkillBoxes skills={skilldetails().slice(6, 14)} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="box">
                            <h1 className='text-center mt-3 coding'>Others</h1>
                            <div className='new-container'>
                                <SkillBoxes skills={skilldetails().slice(14)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillBoxes({ skills }) {
    return (
        skills.map((skill, index) => (
            <SkillBox key={index} title={skill.title} icon={skill.icon} />
        ))
    );
}

function SkillBox({ title, icon }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="smallbox">
                {icon} {/* Render the icon */}
                <div>{title}</div> {/* Render the skill name */}
            </div>
        </div>
    );
}

export default Skills;
