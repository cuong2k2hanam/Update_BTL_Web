import React, { useState, useEffect } from "react";
import styles from "./StaticOperator.module.css";

import {
  statusProduct,
  fatoryProduct,
  warrantyProduct,
  agencyProduct,
} from "./data";
import SingleBarChar from "./BarChar.js/SingleBarChar";
import { Title } from "../../../components/common";
import { UilShutter } from "@iconscout/react-unicons";

function StaticOperator() {
  const [sizeLabelStatusChart, setSizeLabelStatusChart] = useState(10);
  const [sizeTitle, setSizeTitle] = useState(18);

  const changeSizeLabelChart = () => {
    if (window.innerWidth <= 750 && sizeLabelStatusChart !== 8) {
      setSizeLabelStatusChart(8);
      setSizeTitle(12);
    }
  };

  const changeSizeLabelChart2 = () => {
    if (window.innerWidth > 750 && sizeLabelStatusChart !== 10) {
      setSizeLabelStatusChart(8);
      setSizeTitle(18);
    }
  };

  useEffect(() => {
    const createEvent = () => {
      window.addEventListener("resize", changeSizeLabelChart);
      window.addEventListener("resize", changeSizeLabelChart2);
      return () => {
        window.removeEventListener("resize", changeSizeLabelChart);
        window.addEventListener("resize", changeSizeLabelChart2);
      };
    };
    createEvent();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <Title icon={[{ icon: UilShutter }]} title="Ban điều hành" />
      <div className={styles.line_1}>
        <div className={styles.statusBarChart}>
          <div className={styles.tbOption}>
            {/* <label htmlFor="op">Tùy chọn</label> */}
            <select></select>
          </div>
          <SingleBarChar
            title={"Sản phẩm từng trạng thái"}
            dataList={statusProduct}
            positionLabels={"right"}
            sizeLabels={6}
            sizeTitle={sizeTitle}
            percent
          />
        </div>
        <div className={styles.factoryBarChart}>
          <div className={styles.tbOption}>
            {/* <label htmlFor="op">Tùy chọn</label> */}
            <select></select>
          </div>
          <SingleBarChar
            title={"Sản phẩm từng nhà sản xuất"}
            dataList={fatoryProduct}
            positionLabels={"right"}
            sizeLabels={sizeLabelStatusChart}
            sizeTitle={sizeTitle}
            percent
          />
        </div>
      </div>
      <div className={styles.line_2}>
        <div className={styles.warrantyBarChart}>
          <div className={styles.tbOption}>
            {/* <label htmlFor="op">Tùy chọn</label> */}
            <select></select>
          </div>
          <SingleBarChar
            title={"Sản phẩm từng cơ sở bảo hành"}
            dataList={warrantyProduct}
            positionLabels={"right"}
            sizeLabels={sizeLabelStatusChart}
            sizeTitle={sizeTitle}
            percent
          />
        </div>
        <div className={styles.agencyBarChart}>
          <div className={styles.tbOption}>
            {/* <label htmlFor="op">Tùy chọn</label> */}
            <select></select>
          </div>
          <SingleBarChar
            title={"Sản phẩm từng đại lý"}
            dataList={agencyProduct}
            positionLabels={"right"}
            sizeLabels={sizeLabelStatusChart}
            sizeTitle={sizeTitle}
            percent
          />
        </div>
      </div>
    </div>
  );
}

export default StaticOperator;
