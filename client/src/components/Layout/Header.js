import React, { useState } from "react";
import styles from "./Header.module.scss";

// import BaseModal from "../UI/BaseModal";
import BreweryInfoForm from "../Form/BreweryInfoForm";
import { ReactComponent as MagnifyingIcon } from "../../assets/SVG/magnifying-glass.svg";
import { ReactComponent as OpenBookIcon } from "../../assets/SVG/open-book.svg";

const Header = ({ setBreweriesToDisplay }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const showModal = isModalOpen ? (
    <BreweryInfoForm
      setBreweriesToDisplay={setBreweriesToDisplay}
      setModalOpen={setModalOpen}
    />
  ) : null;

  return (
    <nav className={styles.header}>
      <ul className={styles.navGroup}>
        <li className={styles.navGroup__icon}>
          <MagnifyingIcon
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </li>
        <li className={styles.navGroup__icon}>
          <OpenBookIcon />
        </li>
      </ul>
      {showModal}
    </nav>
  );
};

export default Header;
