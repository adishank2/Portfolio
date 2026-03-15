import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          © {year} · Built with passion & caffeine
        </p>
      </div>
    </footer>
  );
}
