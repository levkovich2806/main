import React, {useRef} from 'react';
import styles from './index.module.css';
import Link from "next/link";

const Menu = () => {
  const menuRef = useRef(null);

  const handleOpen = () => {
    menuRef.current.style.width = "250px";
  }

  const handleClose = () => {
    menuRef.current.style.width = "0";
  }

  return (
    <>
      <div className={styles.sidenav} ref={menuRef}>
        <a href="#" className={styles.closebtn} onClick={handleClose}>&times;</a>
        <Link href={"/"}><a href="#">Main</a></Link>
        <Link href={"/contacts"}><a href="#">Contacts</a></Link>
        <hr/>
        <div className={styles.category}>Projects:</div>
        <a href="https://wow.levkovich.dev" target={"_blank"}>WoW</a>
      </div>
      <span style={{fontSize: "30px", cursor: "pointer"}} onClick={handleOpen}>&#9776;</span>
    </>
  );
};

export default Menu;