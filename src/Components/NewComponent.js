import React from "react";

    const NewComponent = (props) => {

      return (
          <div>

            <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
              <h1 className="title red">Your name here</h1>
              <br />
              <img src={props.img} alt="imageInSrc.jpg" />
              <br />
              <img src="/imageInPublic.jpg" />
            </div>

            <iframe width={320} height={240} src="https://www.youtube.com/embed/f9s0XvNETkM" type="video/mp4" controls></iframe>
          </div>
        )
    }

      export default NewComponent;


