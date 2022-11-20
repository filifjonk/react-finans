import "./index.scss";
function Manager() {
  return (
    <div className="office__wrapper">
      <div className="mt-100">
        <h2 className="binding">ВАМ ВСЕГДА ПОМОЖЕТ ПЕРСОНАЛЬНЫЙ МЕНЕДЖЕР</h2>
        <div className="line-orange"></div>
        <div className="choose d-flex justify-between mw mt-50">
          <div>
            <div className="photo photo--six"></div>
            <h2 className="dvk__names">Оставьте заявку</h2>
            <p className="office-info">Мы свяжемся в удобное для Вас время</p>
          </div>
          <div>
            <div className="photo photo--seven"></div>
            <h2 className="dvk__names">Позвоните нам</h2>
            <p className="office-info">
              Мы подберем оптимальный продукт
              <br />и расскажем все условия{" "}
            </p>
          </div>
          <div>
            <div className="photo photo--eight"></div>
            <h2 className="dvk__names">Напишите нам</h2>
            <p className="office-info">Мы подберем ответим на Ваш вопрос</p>
          </div>
        </div>
      </div>
      <div className="d-flex mt-50">
        <form className="d-flex">
          <label>
            <input value="Ваше имя" className="name mr-20" type="text" />
          </label>
          <label>
            <input value="E-mail" className="name mr-20" type="text" />
          </label>
          <label>
            <input value="Телефон" className="name mr-20" type="text" />
          </label>
          <input
            type="submit"
            value="Получить консультацию"
            className="poluchit poluchit--consult"
          />
        </form>
      </div>
      <p className="footer__text footer__text__small align-right">
        Нажимая кнопку, Вы подтверждаете согласие с условиями обработки
        персональных данных.
      </p>
    </div>
  );
}
export { Manager };
