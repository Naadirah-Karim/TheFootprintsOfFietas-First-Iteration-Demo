import { Link } from "react-router-dom";

function PageHeading({ title, subtitle }) {
  return (
    <>
      <div className="heading-row">
        <Link to="/" className="header-home-link" aria-label="Go to home page">
          <img src="{`${import.meta.env.BASE_URL}Icons/footprint-logo.png" alt="" />
        </Link>
        <h1>{title}</h1>
      </div>
      {subtitle && <p>{subtitle}</p>}
    </>
  );
}

export default PageHeading;
