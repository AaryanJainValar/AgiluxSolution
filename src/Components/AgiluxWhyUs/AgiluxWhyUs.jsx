import React from "react";
import "./AgiluxWhy.css"
const AgiluxWhyUs = () => {

    const AgiluxWhyUsContent = [
        {
            Title: "Client-Centered Approach",
            Desctiption: "Your goals are our priority. We work closely with you to understand your vision and deliver solutions that meet your specific needs, whether you’re launching a new product or optimizing an existing system."
        },
        {
            Title: "Comprehensive Expertise",
            Desctiption: "With a diverse range of services, we are your one-stop shop for all digital needs. From design and development to testing, deployment, and SEO, we cover every aspect of your project to ensure a seamless experience."
        },
        {
            Title: "Innovation at the Core",
            Desctiption: "We are constantly exploring new technologies, methodologies, and tools to bring the most innovative solutions to the table. Our team leverages the latest trends in design, development, and automation to keep your business ahead of the curve."
        },
        {
            Title: "Agile Methodology",
            Desctiption: "We follow agile methodologies to ensure flexibility, faster delivery, and continuous improvement. Our iterative approach allows for constant feedback and refinement, ensuring the final product meets and exceeds your expectations."
        },
        {
            Title: "Proven Results",
            Desctiption: "We have helped businesses from startups to enterprises achieve significant improvements in efficiency, customer engagement, and profitability through our technology-driven solutions."
        }
    ]
    return (
        <>
            <section>
                <div className="WhyUsAgilux">
                    <h4>/ WHY US?</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                        <h2>Your Success</h2>
                    </div>
                    <div className="AgiluxWhyUsContainer">

                        <div className="WhyUsAnimatedCards">
                            {AgiluxWhyUsContent.map((item, index) => (
                                <div key={index} className="AnimatedCardWhyUs" data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}>
                                    <p> {item.Title}</p>
                                    <br />
                                    <p>{item.Desctiption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default AgiluxWhyUs