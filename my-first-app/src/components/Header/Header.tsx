import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <p>
          Lasles<span>VPN</span>
        </p>
        <nav>
          <ul className={css.navMenu}>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </nav>
        <ul className={css.buttonsMenu}>
          <li>
            <button>Sign In</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </header>
    </>
  );
};
