"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { Block, Yard } from "@/libs";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import React from "react";

const TourFilter = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [price, setPrice] = useState<number>(250); // Giá mặc định

  return (
    <div className={styles.tourContainer}>
      <Yard className={styles.content}>
        <Block className={styles.section}>
          <label className={styles.label}>When are you traveling?</label>
          <div className={styles.date}>
            <FaRegCalendarAlt color="orange" />
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              dateFormat="MMM dd"
              className={styles.datePicker}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className={styles.customHeader}>
                  {/* Nút Previous */}
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className={styles.navButton}>
                    <FaCaretLeft size={30} className={styles.icon} />
                  </button>

                  {/* Tháng và năm */}
                  <div className={styles.monthYear}>
                    {date.toLocaleString("default", { month: "long" })}{" "}
                    {date.getFullYear()}
                  </div>

                  {/* Nút Next */}
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className={styles.navButton}>
                    <FaCaretRight size={30} className={styles.icon} />
                  </button>
                </div>
              )}
            />
          </div>
        </Block>

        <Block className={styles.section}>
          <label className={styles.label}>Price:</label>
          <div className={styles.info}>
            <span>${price}</span>
            <span>$500+</span>
          </div>

          <input
            className={styles.rangeInput}
            type="range"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, orange ${price / 5}%, #ddd ${price / 5}%)`,
            }}
          />
        </Block>

        <Block className={styles.section}>
          <label className={styles.label}>Durations</label>
          <div className={styles.checkboxGroup}>
            {["Day Tour & Activities", "1 to 3 days", "More than 3 days"].map(
              (item) => (
                <label key={item}>
                  <input type="checkbox" /> {item}
                </label>
              ),
            )}
          </div>
        </Block>

        <Block className={styles.section}>
          <label className={styles.label}>Rating</label>
          <div className={styles.checkboxGroup}>
            {[
              { label: "", value: 5 },
              { label: " & up", value: 4 },
              { label: " & up", value: 3 },
            ].map(({ label, value }) => (
              <label key={value} className={styles.radioLabel}>
                <input type="radio" name="rating" value={value} />
                <span className={styles.stars}>
                  {[...Array(value)].map((_, i) => (
                    <FaStar key={i} color="orange" />
                  ))}
                </span>
                {label}
              </label>
            ))}
          </div>
        </Block>
      </Yard>
    </div>
  );
};

export default TourFilter;
