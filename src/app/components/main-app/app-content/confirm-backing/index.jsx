import React, { useState, useEffect } from "react";
import { Dialog } from "element-react";
import EventEmitter from "reactjs-eventemitter";
import Check from "./../../../../../assets/images/icon-check.svg";
import "./style.scss";

export const ConfirmBacking = (props) => {
  const { dialogStatus } = props;
  const [confirmBackingDialog, setConfirmBackingDialog] = useState(
    dialogStatus
  );

  const closeModal = () => {
    setConfirmBackingDialog(confirmBackingDialog);
    EventEmitter.dispatch("showConfirmBacking", confirmBackingDialog);
  };

  useEffect(() => {});

  return (
    <Dialog
      visible={confirmBackingDialog}
      onCancel={() => closeModal()}
      size="tiny"
      className="confirm-backing"
    >
      <Dialog.Body>
        <div className="dialog-content">
          <div className="check">
            <img src={Check} alt="check icon" />
          </div>
          <h1>Thanks for your support!</h1>
          <p>Your pledge brings us one step closer to sharing Mastercraft</p>
          <p>Bamboo Monitor Riser Worldwide. You will get an email once </p>
          <p>our campaign is completed.</p>
          <button onClick={() => closeModal()}>Got it!</button>
        </div>
      </Dialog.Body>
    </Dialog>
  );
};
