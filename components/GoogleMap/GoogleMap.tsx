import React from "react";
import styles from "./styles.module.scss";

const GoogleMap = () => {
  return (
    <div className={styles.map}>
      <iframe
        title="Travel Agency Location"
        src="https://maps.google.com/maps?q=london%20eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        allowFullScreen></iframe>
    </div>
  );
};

export default GoogleMap;
