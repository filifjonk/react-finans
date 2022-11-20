import "./styles.css";
import "./index.scss";
function Opens() {
  return (
    <div className="wrapper-grey">
      <h2 className="binding">МЫ ОТКРЫТЫ ДЛЯ ОБЩЕНИЯ</h2>
      <div className="line-orange"></div>
      <h3 className="office-info">
        Задайте интересующий Вас вопрос Эксперту компании ДВК ФИНАНС или
        обратитесь к руководству на прямую
      </h3>
      <div className="d-flex">
        <div className="mw-220 mt-50 mr-30">
          <img src="/img/sergey1.png" />
          <h2 className="choose__h">Колесников Сергей Сергеевич</h2>
          <p className="office-info">Генеральный директор</p>
          <button className="more align-left">Связаться</button>
        </div>
        <div className="mw-220 mt-50 mr-30">
          <img src="/img/sergey2.png" />
          <h2 className="choose__h">Колесников Сергей Сергеевич</h2>
          <p className="office-info">Генеральный директор</p>
          <button className="more align-left">Связаться</button>
        </div>
        <div className="mw-220 mt-50  mr-30">
          <img src="/img/sergey3.png" />
          <h2 className="choose__h">Колесников Сергей Сергеевич</h2>
          <p className="office-info">Генеральный директор</p>
          <button className="more align-left">Связаться</button>
        </div>
        <div className="mw-220 mt-50 mr-30">
          <img src="/img/sergey4.png" />
          <h2 className="choose__h">Колесников Сергей Сергеевич</h2>
          <p className="office-info">Генеральный директор</p>
          <button className="more align-left">Связаться</button>
        </div>
        <div className="mw-220 mt-50 mr-30">
          <img src="/img/sergey5.png" />
          <h2 className="choose__h">Колесников Сергей Сергеевич</h2>
          <p className="office-info">Генеральный директор</p>
          <button className="more align-left">Связаться</button>
        </div>
      </div>
      <div className="d-flex">
        <h2 className="choose__h mr-20 mt-45">Вся команда ДВК ФИНАНС</h2>
        <img className="mt-50" width={73} height={10} src="/img/strelka.png" />
      </div>
    </div>
  );
}
export { Opens };
