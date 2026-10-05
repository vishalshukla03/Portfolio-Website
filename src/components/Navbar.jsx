import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["About", "Project", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (!mobileMenu) return;
    const handleShown = () => setMenuOpen(true);
    const handleHidden = () => setMenuOpen(false);
    mobileMenu.addEventListener("shown.bs.offcanvas", handleShown);
    mobileMenu.addEventListener("hidden.bs.offcanvas", handleHidden);
    return () => {
      mobileMenu.removeEventListener("shown.bs.offcanvas", handleShown);
      mobileMenu.removeEventListener("hidden.bs.offcanvas", handleHidden);
    };
  }, []);

  const gradientStyle = { background: "linear-gradient(to top right, rgb(18, 55, 246), rgb(9, 244, 244))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };
  const hamburgerGradient = { background: "rgba(12, 159, 192, 1)" };

  return (
    <>
      <nav className={`navbar navbar-black fixed-top ${scrolled ? "bg-black shadow-lg" : "bg-black bg-opacity-75"}`} style={{ zIndex: 1060 }}>
        <div className="container-fluid px-4">

          <a href="/" className="navbar-brand text-decoration-none">
            <h1 className="fw-bold mb-0"><span style={{ ...gradientStyle, fontSize: "2.2rem" }}>Vishal</span></h1>
          </a>

          <button className="navbar-toggler border-0 shadow-none d-md-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            <div style={{ width: "40px", height: "28px", position: "relative" }}>
              <span className="rounded-pill position-absolute" style={{ ...hamburgerGradient, width: "30px", height: "2px", left: "0", top: menuOpen ? "12px" : "0", transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)", transformOrigin: "center", transition: "top 0.3s ease, transform 0.3s ease" }} />
              <span className="rounded-pill position-absolute" style={{ ...hamburgerGradient, width: "40px", height: "2px", left: "-10px", top: "12px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
              <span className="rounded-pill position-absolute" style={{ ...hamburgerGradient, width: "30px", height: "2px", left: "0", top: menuOpen ? "12px" : "24px", transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)", transformOrigin: "center", transition: "top 0.3s ease, transform 0.3s ease" }} />
            </div>
          </button>


          <ul className="navbar-nav ms-auto d-none d-md-flex flex-row align-items-center gap-4 mb-0">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}><a className="nav-link px-2 text-light fw-medium" href={`#${item}`}>{item}</a></li>
            ))}
            <li className="nav-item ms-2"><a href="https://drive.google.com/file/d/160G-C7SrbjBKjSG61EOyUy3O9-n28MuU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info rounded-2 px-4 py-2 fw-medium">Resume</a></li>
          </ul>

        </div>
      </nav>

      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="mobileMenu" aria-label="Mobile navigation">
        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center text-center">
          <ul className="navbar-nav gap-4 w-100 align-items-center">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}><a className="nav-link fs-4 fw-medium text-light py-2" href={`#${item}`} >{item}</a></li>
            ))}
            <li className="nav-item mt-4"><a href="https://drive.google.com/file/d/160G-C7SrbjBKjSG61EOyUy3O9-n28MuU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info rounded-4 px-5 py-2 fs-5 fw-medium" data-bs-dismiss="offcanvas">Resume</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
