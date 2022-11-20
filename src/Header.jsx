import "./index.scss";
function Header() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo d-flex justify-between">
          <div className="left d-flex">
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
                src="/img/DVK.png"
                alt=""
              />
              <img width={265} height={13} src="/img/market.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="consult d-flex justify-center">
              <h5 className="city mt-40 mr-80">Ваш город: Саратов</h5>
              <img
                className="mt-45 mr-10"
                width={16}
                height={13}
                src="/img/mail.png"
                alt=""
              />
              <h5 className="mail mt-40 mr-80">pochta@dvk.finance</h5>
              <img
                className="mt-45 mr-10"
                width={16}
                height={13}
                src="/img/truba.png"
                alt=""
              />
              <h5 className="phone mt-40">8 800 100 55 55 </h5>
            </div>
            <div className="line"></div>
            <div className="foot d-flex justify-between">
              <div className="media">
                <img className="mt-40 mr-30" src="/img/vk.png" alt="" />
                <img className="mt-40" src="/img/face.png" alt="" />
              </div>
              <button className="get__consult">Получить консультацию</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export { Header };
