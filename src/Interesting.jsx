import "./index.scss";
function Interesting() {
  return (
    <div className="office__wrapper">
      <h2 className="binding">ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО</h2>
      <div className="line-orange"></div>
      <h2 className="office-info">
        Дополнительные услуги от группы компаний ДВК
      </h2>
      <div className="d-flex">
        <div className="mr-30 d-flex flex-column align-start">
          <div className="left d-flex">
            <img
              className="mt-40"
              width={69}
              height={64}
              src="/img/logo.png"
              alt=""
            />
            <div className="name__company flex-column d-flex">
              <img
                className="mt-70"
                width={194}
                height={19}
                src="/img/DVK.png"
                alt=""
              />
              <img width={195} height={9} src="/img/market.png" alt="" />
            </div>
          </div>
          <h2 className="dvk__names">ООО “ДВК ГРУПП”</h2>
          <p className="office-info">
            Сопровождение в государственных
            <br /> и коммерческих закупках
          </p>
          <button className="more align-left">Подробнее</button>
        </div>
        <div className="mr-30 d-flex flex-column align-start">
          <div className="left d-flex">
            <img
              className="mt-40"
              width={69}
              height={64}
              src="/img/logo.png"
              alt=""
            />
            <div className="name__company flex-column d-flex">
              <img
                className="mt-70"
                width={194}
                height={19}
                src="/img/DVK.png"
                alt=""
              />
              <img width={195} height={9} src="/img/market.png" alt="" />
            </div>
          </div>
          <h2 className="dvk__names">ООО “ДВК ПРАВО”</h2>
          <p className="office-info">
            Юридическое сопровождение
            <br />
            Вашего бизнеса
          </p>
          <button className="more align-left">Подробнее</button>
        </div>
        <div className="d-flex flex-column align-start">
          <div className="left d-flex">
            <img
              className="mt-40"
              width={69}
              height={64}
              src="/img/logo.png"
              alt=""
            />
            <div className="name__company flex-column d-flex">
              <img
                className="mt-70"
                width={194}
                height={19}
                src="/img/DVK.png"
                alt=""
              />
              <img width={195} height={9} src="/img/market.png" alt="" />
            </div>
          </div>
          <h2 className="dvk__names">ООО “ДВК СТАНДАРТ”</h2>
          <p className="office-info">
            Лицензирование, стандартизация <br /> и сертификация
          </p>
          <button className="more align-left">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
export { Interesting };
