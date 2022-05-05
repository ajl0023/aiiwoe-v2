import { useState } from "react";
import io from "socket.io-client";
import ReactDOM from "react-dom";
import { getNewSocket, getSocket } from "../../socketInstance";

import "./PopperElement.scoped.scss";
import { usePopper } from "react-popper";
function Component(props) {
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(props.popperRef, popperElement, {
    placement: props.position,
  });

  return props.active ? (
    <div
      style={styles.popper}
      ref={setPopperElement}
      {...attributes.popper}
      className="popper-container"
    >
      {props.content}
    </div>
  ) : null;
}
export function PopperElement(props) {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("popper")
  );
}
