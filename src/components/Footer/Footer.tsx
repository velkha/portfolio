import "./Footer.css";
import tlfLogo from 'assets/tlfLogo.png';
import mailLogo from 'assets/mailLogo.png';

export default function Footer() {
  return(
    <footer className="footer">
      <div className="contactoFooter">
          <div>
              <img src={tlfLogo} />
              <p>+34 666666666</p>
          </div>
          <div>
              <img src={mailLogo} />
              <p>testesttesteqwet1qwe@gmail.com</p>
          </div>
      </div>
    </footer>

  )
}