import React from "react";
import NavBar2 from "../../NavBar2";

const styles = {
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  sidebarTitle: {
    margin: "25px",
    padding: "20px",
    width: "30%",
    borderTop: "solid 3px #a7a4a4",
    borderBottom: "solid 3px #a7a4a4",
    textAlign: "center",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: "25px",
    lineHeight: "15px",
    color: "#222222",
    fontWeight: "600",
    marginRight:"85px"
  },

  sidebarList: {
    listStyleType: "none",
    marginBottom: "30px",
  },

  sidebarListItem: {
    display: "inline-block",
    width: "50%",
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "20px",
  },
};

export default function StaffCategory() {
  return (
    <>
      <NavBar2 />
      <div style={styles.sidebarItem}>
        <span style={styles.sidebarTitle}>CATEGORIES</span>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarListItem}>
            <p className="link">Festival</p>
          </li>
          <li style={styles.sidebarListItem}>
            <p className="link">Food</p>
          </li>
          <li style={styles.sidebarListItem}>
            <p className="link">Expo</p>
          </li>
          <li style={styles.sidebarListItem}>
            <p className="link">Household</p>
          </li>
          <li style={styles.sidebarListItem}>
            <p className="link">Concert</p>
          </li>
          <li style={styles.sidebarListItem}>
            <p className="link">Music</p>
          </li>
        </ul>
      </div>
    </>
  );
}
