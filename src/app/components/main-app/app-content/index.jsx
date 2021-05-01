import React, { useEffect, useState } from "react";
import { Progress, Loading } from "element-react";
import Minecraft from "./../../../../assets/images/logo-mastercraft.svg";
import Bookmark from "./../../../../assets/images/icon-bookmark.svg";
import Bookmarked from "./../../../../assets/images/icon-bookmarked.svg";
import { ProjectBacking } from "./project-backing";
import { ConfirmBacking } from "./confirm-backing";
import EventEmitter from "reactjs-eventemitter";
import { fadeIn } from "react-animations";
import { Spring } from "react-spring";
import "./style.scss";

export const AppContent = (props) => {
  const [projectBackingDialog, setProjectBackingDialog] = useState(false);
  const [confirmBackingDialog, setConfirmBackingDialog] = useState(false);
  const [backingAmount, setBackingAmount] = useState(0);
  const [totalBackers, setTotalBackers] = useState(0);
  const [backingLoading, setBackingLoading] = useState(false);

  const showProjectBackingDialog = () => {
    setProjectBackingDialog(true);
  };

  const closeDialogEvent = () => {
    EventEmitter.subscribe("showProjectBacking", () => {
      setProjectBackingDialog(false);
    });
  };

  const showConfirmBackingDialog = () => {
    setProjectBackingDialog(false);
    setConfirmBackingDialog(true);
  };

  const closeConfirmDialogEvent = () => {
    EventEmitter.subscribe("showConfirmBacking", () => {
      setConfirmBackingDialog(false);
    });
  };

  const changeBg = () => {
    const bookmarked = document.querySelector("#marked-btn");
    if (bookmarked.classList.length === 1) {
      bookmarked.innerHTML =
        '<img src= "' +
        Bookmarked +
        ' " alt="bookmark icon"/>  <span class="btn-label"> Bookmarked </span>';
    } else {
      bookmarked.innerHTML =
        '<img src= "' +
        Bookmark +
        ' " alt="bookmark icon"/>  <span class="btn-label"> Bookmark </span>';
    }
    bookmarked.classList.toggle("bookmarked");
    // console.log(bookmarked.classList.length)
  };

  const getPledgeWithoutReward = () => {
    EventEmitter.subscribe("sendPledgeWithoutReward", (event) => {
      if (JSON.parse(window.localStorage.getItem("sum"))) {
        const amountArray = [];
        amountArray.push(
          parseInt(event),
          JSON.parse(window.localStorage.getItem("sum"))
        );
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingLoading(true);
        setTimeout(() => {
          setBackingAmount(sum);
          setBackingLoading(false);
        }, 2000);
        JSON.parse(window.localStorage.getItem("backers"));
        setTotalBackers(JSON.parse(window.localStorage.getItem("backers")) + 1);
      } else {
        const amountArray = [];
        amountArray.push(event);
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingAmount(sum);
        setTotalBackers(totalBackers + 1);
      }
    });
  };

  const getBambooPledge = () => {
    EventEmitter.subscribe("sendBambooPledge", (event) => {
      if (JSON.parse(window.localStorage.getItem("sum"))) {
        const amountArray = [];
        amountArray.push(
          parseInt(event),
          JSON.parse(window.localStorage.getItem("sum"))
        );
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingLoading(true);
        setTimeout(() => {
          setBackingAmount(sum);
          setBackingLoading(false);
        }, 2000);
        JSON.parse(window.localStorage.getItem("backers"));
        setTotalBackers(JSON.parse(window.localStorage.getItem("backers")) + 1);
      } else {
        const amountArray = [];
        amountArray.push(event);
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingAmount(sum);
        setTotalBackers(totalBackers + 1);
      }
    });
  };

  const getSpecialEdition = () => {
    EventEmitter.subscribe("sendSpecialEdition", (event) => {
      if (JSON.parse(window.localStorage.getItem("sum"))) {
        const amountArray = [];
        amountArray.push(
          parseInt(event),
          JSON.parse(window.localStorage.getItem("sum"))
        );
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingLoading(true);
        setTimeout(() => {
          setBackingAmount(sum);
          setBackingLoading(false);
        }, 2000);
        JSON.parse(window.localStorage.getItem("backers"));
        setTotalBackers(JSON.parse(window.localStorage.getItem("backers")) + 1);
      } else {
        const amountArray = [];
        amountArray.push(event);
        const sum = amountArray.reduce((a, b) => a + b);
        setBackingAmount(sum);
        setTotalBackers(totalBackers + 1);
      }
    });
  };

  useEffect(() => {
    closeDialogEvent();
    closeConfirmDialogEvent();
    getPledgeWithoutReward();
    getBambooPledge();
    getSpecialEdition();
    setBackingAmount(JSON.parse(window.localStorage.getItem("sum")));
    setTotalBackers(JSON.parse(window.localStorage.getItem("backers")));
  }, []);

  useEffect(
    () => {
      window.localStorage.setItem("sum", +backingAmount);
      window.localStorage.setItem("backers", +totalBackers);
    },
    [backingAmount],
    [totalBackers]
  );

  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <article>
        <div className="content">
          <div className="riser">
            <div className="logo">
              <img src={Minecraft} alt="bamboo logo" />
            </div>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <span className="bamboo-span">
              A beautiful & handicrafted monitor stand to reduce neck and eye
              strain
            </span>
            <div className="btns">
              <button
                onClick={() => showProjectBackingDialog()}
                className="project-btn"
              >
                Back this project
              </button>
              <button
                className="bookmark-btn"
                id="marked-btn"
                onClick={() => changeBg()}
              >
                {" "}
                <img src={Bookmark} alt="bookmark icon" />{" "}
                <span className="btn-label">Bookmark</span>
              </button>
            </div>
          </div>
          <Loading loading={backingLoading}>
            <div className="backers">
              <div className="backers-figures">
                <p>
                  ${backingAmount} <br />
                  <small>of $100,000 backed</small>
                </p>
                <p>
                  {totalBackers} <br />
                  <small>total backers</small>
                </p>
                <p>
                  56 <br />
                  <small>days left</small>
                </p>
              </div>
              <div className="progress">
                <Progress
                  percentage={(backingAmount * 100) / 100000}
                  showText={false}
                />
              </div>
            </div>
          </Loading>
          <div className="about">
            <h2>About this project</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates <br />
              your screen to a more comfortable viewing height. Placing your
              monitor at eye level has <br />
              the potential to improve your posture and make you more
              comfortable while at work, <br />
              helping you stay focused on the task at hand.
            </p>

            <p>
              Featuring artisan craftmanship, the simplicity of design creates
              extra desk space below <br />
              your computer to allow notepads, pens, and USB sticks to be
              stored under the stand
            </p>

            <div className="stand">
              <div className="bamboo">
                <div className="pledge">
                  <h3>Bamboo Stand</h3>
                  <span>Pledge $25 or more</span>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch <br />
                  our promotional campaign and you'll be added to a special
                  Backer member list
                </p>
                <div className="remnant">
                  <span>
                    101 <small>left</small>
                  </span>
                  <button>Select Reward</button>
                </div>
              </div>

              <div className="black-edition">
                <div className="edition">
                  <h3>Black Edition Stand</h3>
                  <span>Pledge $75 or more</span>
                </div>
                <p>
                  You get a Black Special Edition computer stand and a
                  personal thank you. you'll <br />
                  be added to our Backer member list. Shipping is included
                </p>
                <div className="reward">
                  <span>
                    64 <small>left</small>
                  </span>
                  <button>Select Reward</button>
                </div>
              </div>

              <div className="special-edition">
                <div className="mahogany">
                  <h3>Mahogany Special Edition</h3>
                  <span>Pledge $200 or more</span>
                </div>
                <p>
                  You get two Special Edition Mahogany stands, a Backer
                  T-Shirt and a personal <br />
                  thank you. You'll be added to our Backer member list.
                  Shipping included
                </p>
                <div className="stock">
                  <span>
                    0 <small>left</small>
                  </span>
                  <button>Out of Stock</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {projectBackingDialog && (
          <ProjectBacking
            dialogStatus={projectBackingDialog}
            toggleModal={showConfirmBackingDialog}
          />
        )}

        {confirmBackingDialog && (
          <ConfirmBacking dialogStatus={confirmBackingDialog} />
        )}
      </article>
      )}
        
    </Spring>
  );
};
