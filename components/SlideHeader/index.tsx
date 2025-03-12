"use client";

import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaTimes,
  FaRegCalendarAlt,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

const index = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Easy exploring the beautiful world</h1>

        <div className={styles.searchBar}>
          <div className={styles.inputGroup}>
            <FaMapMarkerAlt color="orange" />
            <div style={{ marginLeft: "8px" }}>
              <label>Where to ?</label>
              <input
                type="text"
                placeholder="Search for a place or activity"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Date Picker */}
          <div className={styles.inputGroup}>
            <FaRegCalendarAlt color="orange" />
            <div style={{ marginLeft: "8px" }}>
              <label>When</label>
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                dateFormat="MMM dd"
                className="datePicker"
              />
            </div>
          </div>

          {/* Clear Button */}
          {location && (
            <button onClick={() => setLocation("")} className={styles.clearBtn}>
              <FaTimes color="gray" />
            </button>
          )}

          {/* Search Button */}
          <button className={styles.searchBtn}>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
