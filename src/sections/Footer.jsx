import { socialImgs } from "../constants";

const Footer = () => {
  function handleonclick(e) {
    const link = document.createElement("a");
    link.href = e;
    link.target = "_blank";
    console.log(link);
    link.click();
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="icon"
              onClick={() => handleonclick(socialImg.path)}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abhishek Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
