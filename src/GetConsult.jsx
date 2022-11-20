import "./index.scss";
function GetConsult() {
  return (
    <div className="slider-wrapper-small">
      <div className="office__wrapper">
        <h2 className="white-textHead align-left pt-50">
          ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
        </h2>
        <div className="line-white"></div>
        <div className="mt-50 d-flex justify-between">
          <h2 className="white-textMiddle align-left">
            Оставьте номер телефона и менеджер
            <br />
            компании вас проконсультирует
          </h2>
          <div>
            <form>
              <label>
                <input
                  value="Ваш E-mail"
                  className="e-mail mr-20"
                  type="text"
                />
              </label>
              <input
                type="submit"
                value="Получить сейчас"
                className="poluchit"
              />
            </form>
            <h2 className="white-textSmall align-left">
              Нажимая кнопку, Вы подтверждаете согласие с условиями обработки
              <br /> персональных данных.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export { GetConsult };
