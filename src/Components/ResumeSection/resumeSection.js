import React from 'react';
import './resumeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function resumeSection() {
    return (
        <section id="resume" class="resume">
            <div class="container">
                <div class="section-title">
                    <h1 class='white-font'>Resume</h1>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="resume-title">Experience &amp; Education</h3>
                    </div>
                    <div class="col-lg-6">
                        <div class="resume-item">
                            <h4>Software Engineer &amp; Technical Consultant</h4>
                            <h5>Feb 2019 - Present</h5>
                            <p><em>TigernixERP, PT Tigernix Solution Indonesia</em></p>
                            <ul>
                                <li>Using Python, Linux, Odoo Framework, and TigernixFramework.</li>
                                <li>Collaborate with Front-end team for having nice UI/UX for web-apps.</li>
                                <li>Design pattern system workflow based on requirement and request from customer.</li>
                                <li>Updating Server performace and Optimize Function.</li>
                                <li>Adapt system based on customer feedback and needs.</li>
                                <li>Manage task of project, man-days of each task, documentation of project, and relationship with customer (such as reply email and call)</li>
                                <li>Guide cutomer to adapt with system and interact with them</li>
                                <li>Create API and Setup SSL</li>
                                <li>Setup project into server</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="resume-item">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>2018 - 2022</h5>
                            <p><em>Universitas Internsional Batam, Batam, Indonesia</em></p>
                            <ul>
                                <li>Majoring in Information System</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-lg-12">
                        <h3 class="resume-title">Education</h3>
                    </div>
                     */}
                </div>
            </div>
        </section>
    );
}

export default resumeSection