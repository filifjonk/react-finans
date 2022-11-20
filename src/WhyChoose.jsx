import "./styles.css";
import "./index.scss";
function WhyChoose() {
  return (
    <div className="office__wrapper ">
      <div className="office__top mt-100">
        <h2 className="binding">ПОЧЕМУ ВЫБИРАЮТ ДВК ФИНАНС </h2>
        <div className="line-orange"></div>
        <div className="d-flex flex-column mt-100">
          <div className="d-flex">
            <div className="mw-285">
              <img src="/img/cardAndWallet.png" />
              <h2 className="choose__h">
                90% одобрения по заявкам наших клиентов
              </h2>
            </div>
            <div className="mw-285">
              <img src="/img/kopilka.png" />
              <h2 className="choose__h">
                Лучшие предложения по цене и комиссии
              </h2>
            </div>
            <div className="mw-285">
              <img src="/img/dom.png" />
              <h2 className="choose__h">
                Работаем по всей России, в том числе Крым и Кавказ
              </h2>
            </div>
            <div className="mw-285">
              <img src="/img/wallet.png" />
              <h2 className="choose__h">
                Только проверенные и надежны банки из ТОП-50
              </h2>
            </div>
          </div>
          <div className="d-flex ">
            <div className="mw-285">
              <img src="/img/atm.png" />
              <h2 className="choose__h">
                Работаем под ключ до подписания договора
              </h2>
            </div>
            <div className="mw-285">
              <img src="/img/gifts.png" />
              <h2 className="choose__h">
                Кэшбек с каждой заявки, кредита и гарантии
              </h2>
            </div>
            <div className="mw-285">
              <img src="/img/graphics.png" />
              <h2 className="choose__h">Максимальные лимиты</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { WhyChoose };
