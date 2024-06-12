import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useState } from "react";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  async function handleResetPassword(email) {
    // console.log(email);
    let input = { Email: email };
    try {
      let res = await axios.post(
        "https://worldwiseblog.onrender.com/users/checkEmail",
        input
      );

      console.log(res.data.message);
      if (res.status == 200) {
        let string = "jkhjldlkfsd65623";
        await axios.post(
          "https://prod2-16.centralindia.logic.azure.com:443/workflows/c2520185febc4912a30d01831c0b4837/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CsycTmeXFB7hXJ1kkUWgzEGf0flPrvkvm0vVrhS527A",
          { Email: email, recovery: string }
        );

        navigate("/landingPage");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image">
                    <img src="img-2.jpg" className="img-fluid" />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          Forgot Your Password?
                        </h1>
                        <p className="mb-4">
                          We get it, stuff happens. Just enter your email
                          address below and well send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => handleResetPassword(email)}
                        >
                          Reset Password
                        </button>
                        {/* <Link
                          to="/landingPage"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Reset Password
                        </Link> */}
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/login">
                          Already have an account? Login!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
