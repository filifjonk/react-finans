import "./styles.css";
import "./index.scss";
function Trusts() {
  return (
    <div className="office__wrapper">
      <h2 className="binding mt-100">НАМ ДОВЕРЯЮТ БОЛЕЕ 1000 КЛИЕНТОВ</h2>
      <div className="line-orange"></div>
      <p className="office-info">
        Надежный пратнер в финансовой сфере для Вашего бизнеса. ДВК ФИНАНС
        явялется крупнейшим финансовым брокером на территории России.
      </p>
      <div className="d-flex">
        <div className="mw-285 mt-50 mr-30 align-left">
          <img src="/img/gena1.png" />

          <h2 className="choose__h">Иванов Владимир </h2>
          <p className="office-info">
            Строительная компания “Строим дом” Московская обл. г. Химки
          </p>
          <a className="read">Читать отзыв</a>
        </div>
        <div className="mw-285 mt-50 mr-30 align-left">
          <img src="/img/gena2.png" />
          <h2 className="choose__h">Кожевников Геннадий</h2>
          <p className="office-info">
            Клининговая компания “Чистюля” Ростовкая обл. г. Ржев
          </p>
          <a className="read">Читать отзыв</a>
        </div>
        <div className="mw-285 mt-50  mr-30 align-left">
          <img src="/img/gena3.png" />
          <h2 className="choose__h">Смирнов Инакентий</h2>
          <p className="office-info">
            Частное охранное предприятие “Витяз” Челябинская обл.
          </p>
          <a className="read">Читать отзыв</a>
        </div>
        <div className="mw-285 mt-50 mr-30 align-left">
          <img src="/img/gena4.png" />
          <h2 className="choose__h">Рузенфельд Григорий</h2>
          <p className="office-info">
            Студия дизайна “Чижик и К” Сахалинская обл. г. Сахалин.{" "}
          </p>
          <a className="read">Читать отзыв</a>
        </div>
      </div>
    </div>
  );
}
export { Trusts };
