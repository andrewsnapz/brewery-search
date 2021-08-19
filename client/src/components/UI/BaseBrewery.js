import React from "react";
import styles from "./BaseBrewery.module.scss";

import { ReactComponent as PhoneIcon } from "../../assets/SVG/phone.svg";
import { ReactComponent as BrowserIcon } from "../../assets/SVG/browser.svg";
import { ReactComponent as GlobeIcon } from "../../assets/SVG/globe.svg";

const BaseBrewery = ({
  breweryName,
  city,
  state,
  phone,
  website_url,
  latitude,
  longitude,
}) => {
  const showInMapClicked = () => {
    window.open(`https://maps.google.com?q=${latitude},${longitude}`);
  };

  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardContainer__h3}>{breweryName}</h3>
      <h4 className={styles.cardContainer__h4}>{`${city}, ${state}`}</h4>
      <div className={styles.iconGroup}>
        {(latitude || longitude) && (
          <a>
            <GlobeIcon onClick={showInMapClicked} />
          </a>
        )}

        {phone && (
          <a href={`tel:${phone}`}>
            <PhoneIcon />
          </a>
        )}

        {website_url && (
          <a href={website_url}>
            <BrowserIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default BaseBrewery;
