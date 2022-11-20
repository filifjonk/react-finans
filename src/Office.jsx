import "./index.scss";
function Office() {
  return (
    <div className="office__wrapper">
      <div className="office__top">
        <h2 className="binding">БЕЗ ПРИВЯЗКИ К ОФИСУ</h2>
        <div className="line-orange"></div>
        <div className="office-info">
          Решайте любые финансовые задачи, не выходя из офиса.
          <br />
          Наши специалисты помогуть оформить любой финансовый продукт в самые
          короткие сроки.
        </div>
      </div>
      <div className="categories mt-50">
        <h3 className="choose__h">Выберете категорию услуги</h3>
        <div className="choose d-flex justify-between mw mt-50">
          <div className="photo photo--one"></div>
          <div className="photo photo--two"></div>
          <div className="photo photo--three"></div>
          <div className="photo photo--four"></div>
          <div className="photo photo--five"></div>
        </div>
      </div>
      <div className="d-flex">
        <div className="mr-30 d-flex flex-column align-start">
          <h2 className="dvk__names">Продукт БГ 1</h2>
          <li className="li_point">
            <span className="office-info">
              Lorem ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Amet, consectetuer dolor sit amet.
            </span>
          </li>
          <button className="more align-left">Получить сейчас</button>
        </div>
        <div className="mr-30 d-flex flex-column align-start">
          <h2 className="dvk__names">Продукт БГ 2</h2>
          <li className="li_point">
            <span className="office-info">
              Lorem ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Amet, consectetuer dolor sit amet.
            </span>
          </li>
          <button className="more align-left">Получить сейчас</button>
        </div>
        <div className="mr-30 d-flex flex-column align-start">
          <h2 className="dvk__names">Продукт БГ 3</h2>
          <li className="li_point">
            <span className="office-info">
              Lorem ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Ipsum dolor sit amet, consectetuer.
            </span>
          </li>
          <li className="li_point">
            <span className="office-info">
              Amet, consectetuer dolor sit amet.
            </span>
          </li>
          <button className="more align-left">Получить сейчас</button>
        </div>
      </div>
    </div>
  );
}
export { Office };
