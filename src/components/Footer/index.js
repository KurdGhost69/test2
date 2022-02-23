import Link from 'components/Link';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Chase`}
    </span>
      Crafted by yours truly
  </footer>
);

export default Footer;
