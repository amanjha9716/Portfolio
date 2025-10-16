const Button = ({ text, className, id, href, onClick, download }) => {
  const handleClick = (e) => {
    // If href and download are set, skip scroll logic
    if (href && download) {
      return; // let browser handle download naturally
    }

    // Only scroll if an ID is passed
    if (id) {
      e.preventDefault(); // stop default jump
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }

    // Call custom onClick if provided
    if (onClick) onClick(e);
  };

  // Render as <a> if href is passed, else just use <a> for scroll
  return (
    <a
      href={href}
      download={download}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
