// import photo1 from "./img/photo1.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebar: false };
    this.showSidebar = this.showSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  showSidebar() {
    this.setState({ sidebar: true });
  }
  closeSidebar() {
    this.setState({ sidebar: false });
  }
  render() {
    const { sidebar } = this.state;
    return (
      <div className="header">
        <h1 className="logo">this interior</h1>
        <div className="navbar">
          <i class="material-icons" onClick={this.showSidebar}>
            menu
          </i>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <i class="material-icons" onClick={this.closeSidebar}>
                close
              </i>
            </li>
            <li className="nav-text">
              <a href="#">Home</a>
            </li>
            <li className="nav-text">
              <a href="#">Collection</a>
            </li>
            <li className="nav-text">
              <a href="#">About</a>
            </li>
            <li className="nav-text">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function ContenueText() {
  return (
    <div className="wrapper_text">
      <h2>Modern interior</h2>
      <p>A full Servide residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
      <small>Read more{/* <i class="material-icons">keyboard_arrow_right </i> */}</small>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card_image">
        <img src="./img/photo2.png" alt="Aliza Webbe" />
        <div className="card_content">
          <div className="card_name">Aliza Webber</div>
          <div className="card_job">interior designer</div>
        </div>
      </div>
      <div className="card_content_text">
        <div className="card_text">Designed in 2020 by Aliza Webber</div>
      </div>
    </div>
  );
}

function ContenueImg() {
  return (
    <div className="wrapper__img">
      {/* <img src="./img/photo1.png" /> */}
      <Card />
    </div>
  );
}

function Contenue() {
  return (
    <div className="wrapper">
      <ContenueText />
      <ContenueImg />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Mohamed@DevChallenges.io</p>
    </footer>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Contenue />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"));
