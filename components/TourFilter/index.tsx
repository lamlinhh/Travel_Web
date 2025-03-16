"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { Block, Yard } from "@/libs";


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
                            className="datePicker"
                        />
                    </div>
                </Block>

                <Block className={styles.section} >
                    <label className={styles.label}>Price:</label>
                    <div className={styles.info}>
                        <span>$0</span>
                        <span>$500+</span>
                    </div>
                    <input
                        className={styles.rangeInput}
                        type="range"
                        min="0"
                        max="500"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </Block>

                <Block className={styles.section}>
                    <label className={styles.label}>Durations</label>
                    <div className={styles.checkboxGroup}>
                        {["Day Tour & Activities",
                            "1 to 3 days",
                            "More than 3 days"].map((item) => (
                                <label key={item}>
                                    <input type="checkbox" /> {item}
                                </label>
                            ))}
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
