import { NavLink, Outlet } from "react-router-dom";
import classes from "./styles/EventsNavigation.module.css";

function EventsNavigation() {
  const navLink = () => ({ isActive }) => (isActive ? classes?.active : undefined);
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink className={navLink()} to="/events" end>
                All Events
              </NavLink>
            </li>
            <li>
              <NavLink className={navLink()} to="/events/new">
                New Event
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default EventsNavigation;
