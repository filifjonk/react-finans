import "./index.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Manager } from "./Manager";
import { Opens } from "./Opens";
import { Nav } from "./Nav";
import { useState } from "react";
import InputRange from "react-input-range";
const minmax = {
  minValue: 100000,
  maxValue: 10000000
};
const minmax2 = {
  minValue: 1,
  maxValue: 36
};
function Calc() {
  const [price, setPrice] = useState(100000);
  const [month, setMonth] = useState(1);
  const [totalsum, setTotalsum] = useState(0);
  const [totalmonth, setTotalmonth] = useState(0);
  const [total, setTotal] = useState(10000);
  const totaly = () => {
    setTotal(totalsum * totalmonth);
  };

  const handleChangeNumber = (e) => {
    const numbers = e.target.value;
    setPrice(numbers);
    //console.log("price " + numbers);
  };
  const handleChangeRange = (e) => {
    const numbers = e.target.value;
    setPrice(numbers);
    setTotalsum(numbers);
    totaly();
    //console.log("price " + numbers);
  };

  const handleChangeNumber2 = (e) => {
    const numbers2 = e.target.value;
    setMonth(numbers2);
    //console.log("price " + numbers);
  };
  const handleChangeRange2 = (e) => {
    const numbers2 = e.target.value;
    setMonth(numbers2);
    setTotalmonth(numbers2);
    totaly();
    //console.log("price " + numbers);
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="office__wrapper">
        <h2 className="binding mt-100">КАЛЬКУЛЯТОР</h2>
        <div className="line-orange"></div>
        <div className="d-flex">
          <div className="d-flex flex-column align-left mr-30">
            <div className="d-flex mt-50">
              <img
                className="mr-20"
                width={105}
                height={95}
                src="/img/Group233.png"
                alt=""
              />
              <div className="choose__h mt-30">
                Расчет стоимости <br />
                банковской гарантии
              </div>
            </div>
            <div className="mt-50">
              <div className="office-info ">Сумма кредита</div>
            </div>
            <div className="mt-10">
              <input
                type="text"
                onChange={(e) => handleChangeNumber(e)}
                value={price.toString() + " руб."} //value - это ваш стейт price, зесь же вы можете применить маску.
              />
            </div>
            <input
              className="mt-30"
              type="range"
              min={minmax.minValue}
              max={minmax.maxValue}
              onChange={(e) => handleChangeRange(e)}
              value={price}
            />
            <div className="d-flex justify-between mw-600">
              <div className="office-info">100 тыс.</div>
              <div className="office-info">1 млн.</div>
              <div className="office-info">5 млн.</div>
              <div className="office-info">10 млн.</div>
              <div className="office-info">30 млн.</div>
              <div className="office-info">100 млн.</div>
            </div>

            <div className="mt-50">
              <div className="office-info ">Срок кредита</div>

              <div className="mt-10">
                <input
                  type="text"
                  onChange={(e) => handleChangeNumber2(e)}
                  value={month.toString() + " месяца"} //value - это ваш стейт price, зесь же вы можете применить маску.
                />
              </div>
              <input
                className="mt-30"
                type="range"
                min={minmax2.minValue}
                max={minmax2.maxValue}
                onChange={(e) => handleChangeRange2(e)}
                value={month}
              />
              <div className="d-flex justify-between mw-600">
                <div className="office-info">1 мес.</div>
                <div className="office-info">2 мес.</div>
                <div className="office-info">6 мес.</div>
                <div className="office-info">12 мес.</div>
                <div className="office-info">24 мес.</div>
                <div className="office-info">36 мес.</div>
              </div>
            </div>
            <div className="d-flex justify-between mw-600">
              <div className="d-flex flex-column">
                <div className="radio mt-50">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-1"
                    name="color"
                    value="indigo"
                  />
                  <label className="office-info" for="color-1">
                    Без залога
                  </label>
                </div>

                <div className="radio mt-30">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-2"
                    name="color"
                    value="red"
                  />
                  <label className="office-info" for="color-2">
                    Исполнение контракта
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="radio mt-50">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-4"
                    name="color"
                    value="yellow"
                  />
                  <label className="office-info" for="color-4">
                    Без поручителя
                  </label>
                </div>

                <div className="radio mt-30">
                  <input
                    className="custom-radio "
                    type="radio"
                    id="color-5"
                    name="color"
                    value="green"
                  />
                  <label className="office-info" for="color-5">
                    Пополение оборотки
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-50">
              <p className="office-info">
                Расчет калькулятора произведен по действующим ставкам,
                поставщиков финансовых услуг, при условии полного соответствия
                минимальному риск-профилю клиента. Не является публичной
                офертой.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex mt-50">
              <img
                className="mr-20"
                width={105}
                height={95}
                src="/img/Group231.png"
                alt=""
              />
              <div className="choose__h choose__h--orange mt-30">
                Расчет стоимости <br />
                кредита
              </div>
            </div>
            <div className="box mt-50">
              <h2 className="phone phone--24 text-center">НАШЕ ПРЕДЛОЖЕНИЕ</h2>
              <div className="d-flex justify-between mt-50">
                <div className="mr-30">
                  <h2 className="office-info">Ежемесячный платеж</h2>
                  <br />
                  <div className="choose__h">{total} руб.</div>
                </div>

                <div>
                  <h2 className="office-info">Процентная ставка</h2>
                  <br />
                  <div className="choose__h">8%</div>
                </div>
              </div>
              <div className="mt-50">
                <input
                  type="submit"
                  value="Заполнить заявку"
                  className="poluchit poluchit--consult d-block m0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column align-left mr-30">
            <div className="d-flex mt-50">
              <img
                className="mr-20"
                width={105}
                height={95}
                src="/img/Group231.png"
                alt=""
              />
              <div className="choose__h choose__h--orange mt-30">
                Расчет стоимости <br />
                банковской гарантии
              </div>
            </div>
            <div className="mt-50">
              <div className="office-info ">Сумма кредита</div>
            </div>
            <div className="mt-10">
              <input
                type="text"
                onChange={(e) => handleChangeNumber(e)}
                value={price.toString() + " руб."} //value - это ваш стейт price, зесь же вы можете применить маску.
              />
            </div>
            <input
              className="mt-30"
              type="range"
              min={minmax.minValue}
              max={minmax.maxValue}
              onChange={(e) => handleChangeRange(e)}
              value={price}
            />
            <div className="d-flex justify-between mw-600">
              <div className="office-info">100 тыс.</div>
              <div className="office-info">1 млн.</div>
              <div className="office-info">5 млн.</div>
              <div className="office-info">10 млн.</div>
              <div className="office-info">30 млн.</div>
              <div className="office-info">100 млн.</div>
            </div>

            <div className="mt-50">
              <div className="office-info ">Срок кредита</div>

              <div className="mt-10">
                <input
                  type="text"
                  onChange={(e) => handleChangeNumber2(e)}
                  value={month.toString() + " месяца"} //value - это ваш стейт price, зесь же вы можете применить маску.
                />
              </div>
              <input
                className="mt-30"
                type="range"
                min={minmax2.minValue}
                max={minmax2.maxValue}
                onChange={(e) => handleChangeRange2(e)}
                value={month}
              />
              <div className="d-flex justify-between mw-600">
                <div className="office-info">1 мес.</div>
                <div className="office-info">2 мес.</div>
                <div className="office-info">6 мес.</div>
                <div className="office-info">12 мес.</div>
                <div className="office-info">24 мес.</div>
                <div className="office-info">36 мес.</div>
              </div>
            </div>
            <div className="d-flex justify-between mw-600">
              <div className="d-flex flex-column">
                <div className="radio mt-50">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-1"
                    name="color"
                    value="indigo"
                  />
                  <label className="office-info" for="color-1">
                    Без залога
                  </label>
                </div>

                <div className="radio mt-30">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-2"
                    name="color"
                    value="red"
                  />
                  <label className="office-info" for="color-2">
                    Исполнение контракта
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="radio mt-50">
                  <input
                    className="custom-radio"
                    type="radio"
                    id="color-4"
                    name="color"
                    value="yellow"
                  />
                  <label className="office-info" for="color-4">
                    Без поручителя
                  </label>
                </div>

                <div className="radio mt-30">
                  <input
                    className="custom-radio "
                    type="radio"
                    id="color-5"
                    name="color"
                    value="green"
                  />
                  <label className="office-info" for="color-5">
                    Пополение оборотки
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-50">
              <p className="office-info">
                Расчет калькулятора произведен по действующим ставкам,
                поставщиков финансовых услуг, при условии полного соответствия
                минимальному риск-профилю клиента. Не является публичной
                офертой.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex mt-50">
              <img
                className="mr-20"
                width={105}
                height={95}
                src="/img/Group233.png"
                alt=""
              />
              <div className="choose__h  mt-30">
                Расчет стоимости <br />
                кредита
              </div>
            </div>
            <div className="box mt-50">
              <h2 className="phone phone--24 text-center">НАШЕ ПРЕДЛОЖЕНИЕ</h2>
              <div className="d-flex justify-between mt-50">
                <div className="mr-30">
                  <h2 className="office-info">Ежемесячный платеж</h2>
                  <br />
                  <div className="choose__h">{total} руб.</div>
                </div>

                <div>
                  <h2 className="office-info">Процентная ставка</h2>
                  <br />
                  <div className="choose__h">8%</div>
                </div>
              </div>
              <div className="mt-50">
                <input
                  type="submit"
                  value="Заполнить заявку"
                  className="poluchit poluchit--consult d-block m0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Opens />
      <Manager />
      <Footer />
    </div>
  );
}
export { Calc };
