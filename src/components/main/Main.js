import React, { useContext,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faImage,
  faLightbulb,
  faMap,
  faPen,
  faMicrophone,
  faSeedling,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { Context } from "../Context";

function Main() {
  const {
    onSend,
    input,
    SetInput,
    send,
    Setsend,
    result,
    loading,
    SetLoading,
    showState,
    SetShowState,
    prevInput,
    newChat,
    card,
    mount,
    Setmount
  } = useContext(Context);

    // Effect to call onSend when input changes
    useEffect(() => {
      if (input && mount) {
          onSend();
          Setmount(false);
      }
  },[input,mount]); 
  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar">
        <p>Gemini</p>
        <div className="pcontainer">
          <div className="priofile">
            <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
          </div>
        </div>
      </nav>
      <div className="cartcontainer">
        {showState && !newChat? 
        (<div className="onchat">
          <div className="user">
            <div className="priofile">
              <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
            </div>
            <div className="text">
                {prevInput}
            </div>
          </div>
          <div className="Ai">
            {result ? (<div>
              <div className="priofile">
                <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" />
              </div>
              <div className="text">
                {result}
              </div>
            </div>) : 
            (<div className="loading">
              <hr/>
              <hr/>
              <hr/>
            </div>)}
           
           
          </div>
          </div>) : (<div className="onload">
          <p>Hello, Deepak</p>
          <p>How can I help you today?</p>
          <div className="row">
            <div className="col-3">
              <Card onClick = {()=>card('Road trip drive time and kid entertainment ideas')}style={{ width: "15rem;height: 140px;" }}>
                <Card.Body>
                  <Card.Text>
                    Road trip drive time and kid entertainment ideas
                  </Card.Text>
                  <div className="icon">
                    <FontAwesomeIcon icon={faMap} className="" />{" "}
                    {/* Use FontAwesomeIcon with   faBars */}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card onClick= {()=> card('I’m sick and need help crafting a text message for my boss')}style={{ width: "15rem;height: 140px;" }}>
                <Card.Body>
                  <Card.Text>
                    I’m sick and need help crafting a text message for my boss
                  </Card.Text>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPen} className="" />{" "}
                    {/* Use FontAwesomeIcon with   faBars */}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card onClick = {()=> card('Settle a debate: how should you store bread?') }style={{ width: "15rem;height: 140px;" }}>
                <Card.Body>
                  <Card.Text>
                    Settle a debate: how should you store bread?
                  </Card.Text>
                  <div className="icon">
                    <FontAwesomeIcon icon={faLightbulb} className="" />{" "}
                    {/* Use FontAwesomeIcon with   faBars */}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-3">
              <Card onClick = {()=>card('Explain the impact of globalization')}style={{ width: "15rem;height: 140px;" }}>
                <Card.Body>
                  <Card.Text>Explain the impact of globalization</Card.Text>
                  <div className="icon">
                    <FontAwesomeIcon icon={faBook} className="" />{" "}
                    {/* Use FontAwesomeIcon with   faBars */}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>)}
      </div>
      <div className="proptmain">
        <div className="promp">
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => SetInput(e.target.value)}
            value={input}
          />
          <div className="prompicon">
            <FontAwesomeIcon onClick={() => onSend()} icon={faPaperPlane} className="icon1" />
            <FontAwesomeIcon icon={faMicrophone} className="icon1" />
            <FontAwesomeIcon
              icon={faImage}
              className="icon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
