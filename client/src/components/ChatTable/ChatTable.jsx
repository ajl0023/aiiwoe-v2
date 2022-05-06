import "./ChatTable.scoped.scss";
import { createPopper } from "@popperjs/core";

import React, { useCallback, useEffect, useRef, useState } from "react";
var theta = [
  Math.PI / 2,
  Math.PI / 4,
  2 * Math.PI,
  7 * (Math.PI / 4),
  (3 * Math.PI) / 2,
  5 * (Math.PI / 4),
  3 * (Math.PI / 4),
  Math.PI,
];
import { usePopper } from "react-popper";
import { PopperElement } from "../PopperElement/PopperElement";
import { useSetPopper } from "../../hooks/useSetPopperRef";
import { PopperWrapper } from "../PopperElement/PopperRef";
import { cupObj } from "../../images/cups/cups";

const MemoImage = React.memo(
  ({ user }) => {
    return <img src={cupObj[user.name].default} alt="" />;
  },
  ({ user }) => {
    user.image === user.image;
  }
);
function ChatUser({ tableSize, index, user }) {
  const tableItem = useRef();
  const radius = tableSize / 2;
  useEffect(() => {
    const eleWidth = tableItem.current.offsetWidth / 2;

    tableItem.current.style.top = `${
      -radius * Math.sin(theta[index]) + radius - eleWidth
    }px `;
    tableItem.current.style.left = `${
      radius * Math.cos(theta[index]) + radius - eleWidth
    }px`;
  }, [index, tableSize]);
  return (
    <div ref={tableItem} className="user-container">
      <div className="user-image-container">
        <MemoImage user={user} />
      </div>
    </div>
  );
}

export function ChatTable(props) {
  const tableRef = useRef();
  const tableItem = useRef();
  const {
    setPopperActive,
    setPopperContent,
    setPopperRef,
    popperActive,
    popperContent,
    popperRef,
  } = useSetPopper();
  const [tableSize, setTableSize] = useState(null);

  const createLayout = useCallback(() => {
    setTableSize(tableRef.current.offsetWidth);
  }, []);
  useEffect(() => {
    setTableSize(tableRef.current.offsetWidth);
    window.addEventListener("resize", createLayout);
    return () => {
      window.removeEventListener("resize", createLayout);
    };
  }, []);

  return (
    <div ref={tableRef} className="table-container">
      <PopperElement
        content={popperContent}
        active={popperActive}
        popperRef={popperRef}
        position="top"
      />
      {props.users.map((item, i) => {
        return (
          <div className="user-container" key={item.id}>
            <PopperWrapper
              setPopperContent={setPopperContent}
              setPopperActive={setPopperActive}
              setPopperRef={setPopperRef}
              content={item.name}
            >
              <ChatUser user={item} index={i} tableSize={tableSize} />
            </PopperWrapper>
          </div>
        );
      })}
    </div>
  );
}
