import React from 'react';

const Gallery = () => {
  return (
    <section className="gallary" id="gallary">
      <div className="container">
        <div className="main-txt">
          <h1><span>G</span>allery</h1>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/REC-88.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/REC-103.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/REC-12.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/deva.png" alt="" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/DSC_0071 (2).jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src="images/png.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
