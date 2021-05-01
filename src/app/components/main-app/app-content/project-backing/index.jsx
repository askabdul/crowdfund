import React, { useState, useEffect } from "react";
import { Dialog, Radio, Notification } from "element-react";
import EventEmitter from "reactjs-eventemitter";
import "./style.scss";

export const ProjectBacking = (props) => {
  const { dialogStatus, toggleModal } = props;
  const [projectBackingDialog, setProjectBackingDialog] = useState(
    dialogStatus
  );
  const [withoutReward, setWithoutReward] = useState("");
  //   const [bambooStand, setBambooStand] = useState(false);
  const [pledgeWithoutReward, setPledgeWithoutReward] = useState(null);
  const [bambooStand, setBambooStand] = useState(null);
  const [blackEdition, setBlackEdition] = useState(null);
  const [mahoganySpecial, setMahoganySpecial] = useState(null);

  const closeModal = () => {
    setProjectBackingDialog(projectBackingDialog);
    EventEmitter.dispatch("showProjectBacking", projectBackingDialog);
  };

  const validate = () => {
      if(!pledgeWithoutReward) {
        Notification.error({
            title: 'Error',
            message: 'Please you must pledge an amount before you continue'
          });
      } else {
          EventEmitter.dispatch('sendPledgeWithoutReward', pledgeWithoutReward)
          toggleModal()
      }
  }

  const validateBambooStand = () => {
    if(!bambooStand || bambooStand < 25 ) {
      Notification.error({
          title: 'Error',
          message: 'Please you must pledge $25 or more to continue'
        });
    } else {
        EventEmitter.dispatch('sendBambooPledge', bambooStand)
        toggleModal()
    }
  }

  const validateSpecialEdition = () => {
    if(!blackEdition || blackEdition < 75 ) {
      Notification.error({
          title: 'Error',
          message: 'Please you must pledge $75 or more to continue'
        });
    } else {
        EventEmitter.dispatch('sendSpecialEdition', blackEdition)
        toggleModal()
    }
  }

  useEffect(() => {
    // Message.error('Oops, this is a error message.');

  });

  return (
    <Dialog
      title="Back this Project"
      visible={projectBackingDialog}
      onCancel={() => closeModal()}
      size="tiny"
      className="back-project"
    >
      <Dialog.Body>
        <div className="dialog-content">
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world
          </p>
          <Radio.Group
            value={withoutReward}
            onChange={(e) => setWithoutReward(e)}
          >
            <Radio value="no_reward" className="no_reward">
              <div className="radio-content">
                <h1>Pledge with no reward</h1>
                <p>
                  Choose to support us without a reward if you simply believe in
                  our project. As a{" "}
                </p>
                <p>
                  backer, you'll be signed up to receive product updates via
                  email.
                </p>
              </div>

              {withoutReward === "no_reward" && (
                <div>
                  <hr />

                  <div className="pledging">
                    <p>Enter your pledge</p>
                    <div className="input-btn">
                    <span>$</span><input type="text" value={pledgeWithoutReward} onChange={(e) => setPledgeWithoutReward(e.target.value)}/>
                      <button onClick={() => validate()}>Continue</button>
                    </div>
                  </div>
                </div>
              )}
            </Radio>
            <Radio value="with_stand" className="with_stand">
              <div className="radio-stand-content">
                <div className="stand-header">
                  <div className="first-header">
                    <h1>Bamboo Stand</h1>
                    <span className="buck">Pledge $25 or more</span>
                  </div>
                  <span className="number-left">
                    101 <small>left</small>
                  </span>
                </div>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch <br />
                  our promotional campaign and you'll be added to a special
                  Backer member list
                </p>
              </div>
              {withoutReward === "with_stand" && (
                  <div className="show_if">
                  <hr />

                <div className="pledging">
                  <p>Enter your pledge</p>
                  <div className="input-btn">
                  <span>$</span><input type="text" value={bambooStand} onChange={(e) => setBambooStand(e.target.value)}/>
                    <button onClick={() => validateBambooStand()}>Continue</button>
                  </div>
                </div>
                </div>
              )}
            </Radio>

            <Radio value="with_black" className="with_black">
              <div className="radio-black-content">
                <div className="black-header">
                  <div className="first-header">
                    <h1>Black Edition Stand</h1>
                    <span className="buck">Pledge $75 or more</span>
                  </div>
                  <span className="number-left">
                    64 <small>left</small>
                  </span>
                </div>
                <p>
                  You get a Black Special Edition computer stand and a personal
                  thank you. <br />
                  You'll be added to our Backer member list. Shipping is
                  included.
                </p>
              </div>
              {withoutReward === "with_black" && (
                  <div className="show_if">
                  <hr/>
                <div className="pledging">
                  <p>Enter your pledge</p>
                  <div className="input-btn">
                  <span>$</span><input type="text" value={blackEdition} onChange={(e) => setBlackEdition(e.target.value)}/>
                    <button onClick={() => validateSpecialEdition()}>Continue</button>
                  </div>
                </div>
                </div>
              )}
            </Radio>

            <Radio value="with_mahogany" className="with_mahogany">
              <div className="radio-mahogany-content">
                <div className="mahogany-header">
                  <div className="first-header">
                    <h1>Mahogany Special Edition</h1>
                    <span className="buck">Pledge $200 or more</span>
                  </div>
                  <span className="number-left">
                    0 <small>left</small>
                  </span>
                </div>
                <p>
                  You get two Special Edition Mahogany stand, a Backer T-shirt
                  and a personal
                  <br />
                  thank you. You'll be added to our Backer member list. Shipping
                  is included.
                </p>
              </div>
              {withoutReward === "with_mahogany" && (
                  <div className="show_if">
                  <hr/>
                <div className="pledging">
                  <p>Enter your pledge</p>
                  <div className="input-btn">
                  <span>$</span><input type="text" value={mahoganySpecial} onChange={(e) => setMahoganySpecial(e.target.value)}/>
                    <button onClick={() => validate()}>Continue</button>
                  </div>
                </div>
                </div>
              )}
            </Radio>
          </Radio.Group>
        </div>
      </Dialog.Body>
    </Dialog>
  );
};
