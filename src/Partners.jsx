import "./index.scss";
function Partners() {
  return (
    <div className="office__wrapper">
      <div className="office__top mt-100">
        <h2 className="binding">ОФИЦИАЛЬНЫЕ ПАРТНЕРЫ </h2>
        <div className="line-orange"></div>
        <div className="office-info">
          ДВК ФИНАНС работает исключительно с проверенными и надежными
          поставщиками финансовых услуг, что позволяет гарантировать самые
          выгодные условия и безопастность.
        </div>
      </div>
      <img className="mt-100" src="/img/partners.png" />
      <div className="mt-100">
        <div className="office-info mt-100">
          Просмотреть список всех официальных партнеров и поставщиков финансовых
          услуг, а так же предложить партнерские программы Вы можете в разделе
          “Партнеры” или перейдя по ссылке
        </div>
      </div>
    </div>
  );
}
export { Partners };
