import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function LandingPage() {
  const navigate = useNavigate();

  function handleStartTracking() {
    if (sessionStorage.length) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <Header />

      <section className="homepage">
        <header className="py-5 bg-image-full">
          <div className="text-center my-5">
            <h2>
              Never forget your wonderful experiences, and show your friends how
              you have wandered the world.
            </h2>
          </div>
        </header>

        <section className="py-5">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h1 className="text-white fs-3 fw-bolder">
                  You travel the world.
                  <br />
                  WorldWise keeps track of your memories.
                </h1>
                <br />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleStartTracking}
                >
                  Start tracking
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
