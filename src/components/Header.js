import React from 'react'

const Header = () => {
  return (
    <>
    <div className='space-header'>
        <label className='main-label-thin'>Reliable,efficient delivery</label>
        <br/>
        <lebel className='main-label-bold'>Powered by Technology</lebel>
        <p className='description-label'>Our Artificial intelligence powered tools use
            millions of projects data points to ensure that your projects is successful
        </p>


        
    </div>
    <div  className='grid-highlight'>   
              <div className='card-store'>
                  <div className='label-in-card' >
                      <label style={{ marginLeft: "10%" }}>Supervisor</label>
                  </div>

                  <div className='description-in-card'>
                      <p style={{ marginLeft: "10%", width: "77%" }} >Monitors activity to identify projects roadblocks</p>
                  </div>

                  <div className='icon-of-card'>
                      <div style={{ width: "40%" }}>
                          <img src="/icon-supervisor.svg" style={{ width: "70px" }} alt="Supervisor Icon" />
                      </div>
                  </div>

              </div>

              <div className='card-store-two'>
                  <div className='label-in-card' >
                      <label style={{ marginLeft: "10%" }}>Team builder</label>
                  </div>

                  <div className='description-in-card'>
                      <p style={{ marginLeft: "10%", width: "77%" }} >Monitors activity to identify projects roadblocks</p>
                  </div>

                  <div className='icon-of-card'>
                      <div style={{ width: "40%" }}>
                          <img src="/icon-team-builder.svg" style={{ width: "70px" }} alt="Supervisor Icon" />
                      </div>
                  </div>

              </div>

              <div className='card-store-three'>
                  <div className='label-in-card' >
                      <label style={{ marginLeft: "10%" }}>Karma</label>
                  </div>

                  <div className='description-in-card'>
                      <p style={{ marginLeft: "10%", width: "77%" }} >Monitors activity to identify projects roadblocks</p>
                  </div>

                  <div className='icon-of-card'>
                      <div style={{ width: "40%" }}>
                          <img src="/icon-karma.svg" style={{ width: "70px" }} alt="Supervisor Icon" />
                      </div>
                  </div>

              </div>

              <div className='card-store-four'>
                  <div className='label-in-card' >
                      <label style={{ marginLeft: "10%" }}>Calculator</label>
                  </div>

                  <div className='description-in-card'>
                      <p style={{ marginLeft: "10%", width: "77%" }} >Monitors activity to identify projects roadblocks</p>
                  </div>

                  <div className='icon-of-card'>
                      <div style={{ width: "40%" }}>
                          <img src="/icon-calculator.svg" style={{ width: "70px" }} alt="Supervisor Icon" />
                      </div>
                  </div>

              </div>
    </div>

    </>
  )
}

export default Header