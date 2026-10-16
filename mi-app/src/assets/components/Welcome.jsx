import "./Welcome.css";

function Welcome() {
  return (
    <main className="welcome">
      <div className="welcome-overlay">
        <img
          className="welcome-logo"
          src="/images/crest.png"
          alt="Academia Society"
        />

        <section className="welcome-heading">
          <h1>Home based</h1>

          <h2>
            <em>Academia</em> Society
          </h2>

          <p className="welcome-description">
            CREATE YOUR OWN BOOK CLUB
          </p>
        </section>

        <section className="welcome-footer">
          <button className="apple-button" type="button">
         <span className="apple-icon">
        <img src="/images/apple.png" alt="Apple" />
         </span>
            <span>CONTINUE WITH APPLE</span>
          </button>

          <div className="social-buttons">
            <button type="button" aria-label="Continue with Google">
              G
            </button>

            <button type="button" aria-label="Continue with Facebook">
              f
            </button>

            <button type="button" aria-label="Continue with email">
              ✉
            </button>
          </div>

          <p className="welcome-terms">
            By continuing I agree with the
            <br />
            Terms &amp; Conditions and Privacy &amp; Cookie Policy
          </p>
        </section>
      </div>
    </main>
  );
}

export default Welcome;