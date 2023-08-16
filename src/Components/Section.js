import React from 'react';

const App = () => {
  return (
    <section className="main-txt">
      <h1><span>Know </span>us better</h1>

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="section-1 box" style={{ height: '100vh', backgroundImage: "url(images/k1.jpg)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
          <h2>Partner with RavenEye Cameras and let us bring your vision to life</h2>
        </div>

        <div className="section-2 box" style={{ background: '#C5a78e', scrollBehavior: 'smooth' }}>
          <h1>What services does RavenEye Cameras offer?</h1>
          <p>
            RavenEye Cameras offers a comprehensive range of services including
            video editing, camera shoots, and content creation. Our team excels
            in crafting visually stunning videos, providing professional camera
            services, and creating engaging content for various platforms. We
            pride ourselves on delivering exceptional quality and tailored
            solutions to meet our clients' creative needs.
          </p>
        </div>

        <div className="section-3 box" style={{ backgroundImage: "url(images/k2.jpg)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
          <h3>
            Just like these remarkable birds, we aim to provide our customers
            with cutting-edge photography & many more that possess unparalleled
            visual acuity and capture every detail with precision.
          </h3>
        </div>

        <div className="section-4 box" style={{ background: '#353332', scrollBehavior: 'smooth' }}>
          <h2>
            YOU'RE STILL HERE, WHICH COULD ONLY MEAN ONE THING, YOU SAW
            SOMETHING DIFFERENT.
          </h2>
          <p>
            You saw stories that you connected with. Honest photos that made
            you feel something… and while you've seen other photographer's
            work, this time you felt something real. You don't want traditional
            or posey… you want relaxed and intentional... or as we like to call
            it "honest and unfussy".
          </p>
          <p>
            We think it's great that you care... because we want you to! We
            don't want you to book us because we're local or offered the best
            package. We simply want you to have the best experience ever, and
            we offer it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
