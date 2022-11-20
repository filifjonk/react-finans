import "./index.scss";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="office__wrapper">
      <div className="grLine"></div>
      <div className="d-flex justify-between mt-40 ">
        <Link to="/">
          <li className="li--black mr-60">Наши услуги</li>
        </Link>
        <Link to="/cart">
          <li className="li--black mr-60">Отзывы клиентов</li>
        </Link>
        <Link to="/mate">
          <li className="li--black mr-60">Партнеры</li>
        </Link>
        <Link to="/about">
          <li className="li--black mr-60">О компании</li>
        </Link>
        <Link to="/news">
          <li className="li--black mr-60">Новости</li>
        </Link>
        <Link to="/contacts">
          <li className="li--black mr-60">Контакты</li>
        </Link>
        <Link to="/calc">
          <li className="li--black ">Калькулятор</li>
        </Link>
      </div>
      <div className="grLine mt-40"></div>
    </div>
  );
}
export { Nav };
