import "./index.scss";
function Footer() {
  return (
    <div className="wrapper">
      <footer className="mt-100 footer ">
        <div className=" d-flex justify-between ">
          <div className="left d-flex ">
            <img
              className="mt-40"
              width={94}
              height={87}
              src="/img/logo.png"
              alt=""
            />
            <div className="name__company flex-column d-flex">
              <img
                className="mt-70"
                width={264}
                height={26}
                src="/img/DVKWhite.png"
                alt=""
              />
              <img width={265} height={13} src="/img/market.png" alt="" />
            </div>
          </div>
          <div className="d-flex flex-column">
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
          </div>
          <div className="d-flex flex-column">
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
            <a className="footer__text">Ссылка</a>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <img
                className="mt-45 mr-10"
                width={16}
                height={13}
                src="/img/mail.png"
                alt=""
              />
              <h5 className="mail mail--white mt-40 mr-80">
                pochta@dvk.finance
              </h5>
            </div>
            <div className="d-flex">
              <img
                className="mt-45 mr-10"
                width={16}
                height={13}
                src="/img/truba.png"
                alt=""
              />

              <h5 className="phone phone--white mt-40">8 800 100 55 55 </h5>
            </div>{" "}
            <div className="media align-left">
              <img className="mt-40 mr-30" src="/img/vk.png" alt="" />
              <img className="mt-40" src="/img/face.png" alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-between">
          <h3 className="footer__text footer__text__small align-left">
            {" "}
            2021 © ООО «ДВК ФИНАНС». Все права защищены
          </h3>
          <h3 className="footer__text footer__text__small">Разработка сайта</h3>
        </div>
      </footer>
    </div>
  );
}
export { Footer };
