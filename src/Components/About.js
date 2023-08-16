import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="main-txt">
          <h1>About <span>Us</span></h1>
        </div>

        <div className="row" style={{ marginTop: '50px' }}>

          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src="images/RAVEN-EYE-dark-.png" alt="" />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <h2>Discover the power of RavenEye Cameras and experience a new level of visual storytelling!</h2>
            <p>
              RavenEye Cameras is a versatile multimedia company specializing in video editing,
              camera shoots, brand designing, and content creation services.
              With a keen eye for visual storytelling, we cater to a wide range of clients,
              offering comprehensive solutions to meet their creative needs.
            </p>
            <p>
              Our skilled team excels in producing high-quality video content, whether it's editing travel vlogs,
              crafting captivating YouTube shorts, or creating engaging Instagram reels.
              We understand the power of visuals in today's digital landscape and
              are dedicated to helping our clients leave a lasting impression with their audience.
            </p>
            <p>
              In addition to our video production services, we offer brand designing solutions that
              help our clients establish a strong visual identity. From logo design and branding elements to
              graphic assets and promotional materials,
              we work closely with our clients to create cohesive and impactful brand experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
