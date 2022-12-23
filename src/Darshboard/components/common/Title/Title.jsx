import React, { useContext, useEffect } from "react";
import styles from "./Title.module.css";
import { UilBars } from "@iconscout/react-unicons";

import { DarshboardContext } from "../../../../context/DarshboardProvider/DarshboardProvider";

function Title({ icon, title, name, avatar }) {
  const context = useContext(DarshboardContext);

  const { togleSider, setTogleSider } = context;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {icon.map((item, index) => {
          const name = item.icon.name;
          return (
            <div className={styles[name]} key={index}>
              <item.icon size={12} />
            </div>
          );
        })}
        {title}
      </div>
      <div className={styles.avatar}>
        {/* <div className={styles.name}>Xin chào Cường</div>
        <div className={styles.avatarImg}>
          <img
            src={require("../../../../asset/image/avatar.jpg")}
            alt="Avatar"
          />
        </div> */}
        <div
          // className={togleBar ? "" : "nonDisplay"}
          className={styles.barBtn}
          onClick={() => setTogleSider(!togleSider)}
        >
          <UilBars className={styles.bar} size={35} />
        </div>
      </div>
    </div>
  );
}

export default Title;