import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="main_faq_bg" id="FAQ">
      <h1 className="text-white text-center fw-bold faqq_title">
        Frequently Asked Questions
      </h1>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-md-8">
            <Accordion defaultActiveKey="0" className="faq_main_acc">
              <Accordion.Item eventKey="0" className="dop">
                <Accordion.Header className="faq_header">
                  What does UAWIN aim to achieve?
                </Accordion.Header>
                <Accordion.Body className="">
                  <div className="all_gary fqq ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-4">
                <Accordion.Header className="faq_header">
                  What makes UAWIN so unique?
                </Accordion.Header>
                <Accordion.Body>
                  <div className='all_gary fqq'>
                  UAWIN was created as a token that represents a social and
                  political event. Never before has anything happened that would
                  influence the world so much in our digitalised time. Combining
                  the uniqueness of those two facts we end up having the
                  greatest event put into the greatest technology in the modern
                  world.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-4">
                <Accordion.Header className="faq_header">
                  How can I benefit from UAWIN?
                </Accordion.Header>
                <Accordion.Body>
                  <div className='all_gary fqq'>
                  UAWIN was created as a token that represents a social and
                  political event. Never before has anything happened that would
                  influence the world so much in our digitalised time. Combining
                  the uniqueness of those two facts we end up having the
                  greatest event put into the greatest technology in the modern
                  world.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
