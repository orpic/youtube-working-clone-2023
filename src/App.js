import classes from "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <header className={classes.header}>
      <section className={classes.logoGroup}>
        <MenuIcon />
        <YouTubeIcon />
        Youtube
      </section>
      <section className={classes.searchGroup}>
        <input type="text" />
        <button>
          <SearchIcon />
        </button>
      </section>
      <section className={classes.buttonGrourp}>Buttons</section>
    </header>
  );
}

export default App;
