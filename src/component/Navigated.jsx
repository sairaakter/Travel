import { Link } from "react-router-dom";
import styles from "../style/Innernav.module.css";

export default function Navigated({ links }) {
  return (
    <div className={styles.inner_nav}>
      <ol className={styles.breadcrumb}>
        {links.map((link, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbItem} ${
              link.active ? styles.breadcrumbItemActive : ""
            }`}
            aria-current={link.active ? "page" : undefined}
          >
            {link.active ? (
              <span>{link.name}</span>
            ) : (
              <Link to={link.path} className={styles.breadcrumbItem}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
