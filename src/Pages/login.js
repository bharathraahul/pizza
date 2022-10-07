import "./login.css"


function Login() {
  return (
    <div className="design">
    {/* <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://media.istockphoto.com/photos/table-full-of-pizza-picture-id467788694?k=20&m=467788694&s=170667a&w=0&h=mAMzlw-D1H21kAyEH9KMPjSc7mZHw6-P3DuSyDu4IVE="
                alt="login form" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black"> */}

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" ></i>
                    <div className="design2"><span class="h1 fw-bold mb-0">PIZZA Sign In</span></div>
                  </div>
                   <div className="design1">
                  <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>
                   </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" >Don't have an account? <a href="#!">Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>
{/* 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
</div>
  );
}

export default Login;