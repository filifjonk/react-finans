import "./index.scss";
import { useState } from "react";
import { Nav } from "./Nav";
function History() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="office__wrapper">
        <Nav />
        <h2 className="binding mt-100">ИСТОРИИ УСПЕХА</h2>
        <div className="line-orange"></div>
        <p className="office-info">
          Специалисты ДВК ФИНАНС имеют высокую квалификацию в финансовой сфере,
          что позволяет находит выход, даже из безвыходной ситуации.
        </p>
      </div>
      <div className="wrapper-grey">
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">НЕТ ЛИМИТОВ</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <b className="text"> Задача:</b> Выпустить банковскую гарантию
                  на обеспечение исполнения контракта сроком на 5 лет, сумма 134
                  000 000,00 руб.
                </p>
                <p>
                  <b className="text"> Проблематика:</b> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <b className="text"> Решение:</b> Юридический департамент ДВК
                  ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <b className="text"> Результат:</b> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Отсутствует опыт</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Отрицательные балансы</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Высока кредитная нагрузка</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Новая компания</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 6 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Первый раз</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 7 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">
                  Отсутствие денег на оплату гарантии
                </h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 8 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Сложный макет</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 9 ? "content  active-content" : "content"
            }
          >
            <div className="d-flex">
              <div className="mw-390 mr-60">
                <img src="/img/sibir.png" />
                <h2 className="choose__h">ООО “Сибирские технологии”</h2>
                <h3 className="office-info">
                  Константинов Сергей Викторович Генеральный директор
                </h3>
                <br />
                <h3 className="office-info">Дорожные работы и строительство</h3>
              </div>
              <div className="align-left mw-675">
                <h2 className="orangeText">Незговорчивый заказчик</h2>
                <p className="text">
                  Государственный контракт на выполнение востановительных работ
                  на участке Трассы М5 225-889 км.
                  <br />
                  <a
                    className="text text--blue"
                    href="https://zakupki.gov.ru/223/purchase/public/purchase/info/
              common-info.html?regNumber=32110066161"
                  >
                    https://zakupki.gov.ru/223/purchase/public/purchase/info/
                    common-info.html?regNumber=32110066161
                  </a>
                </p>
                <p>
                  <h3 className="text"> Задача:</h3> Выпустить банковскую
                  гарантию на обеспечение исполнения контракта сроком на 5 лет,
                  сумма 134 000 000,00 руб.
                </p>
                <p>
                  <h3 className="text"> Проблематика:</h3> По финансовому
                  состоянию компаник клиента не проходила по лимитам не в одном
                  из банков, утвержденных заказчиком в аукционной документации.{" "}
                </p>
                <p>
                  <h3 className="text"> Решение:</h3> Юридический департамент
                  ДВК ФИНАНС согласовал с заказчико предоставление нескольких
                  банковских гарантий, от разных банков - итоговая сумма
                  соответствовала установленным требованиям заказчика, так же с
                  заказчиком были согласованны банки не входящие в
                  рекомендованный список. Специалисты финансового отдела в
                  короткие сроки подготовли все необходимые документы и получили
                  предложения от 4-х банков.
                </p>
                <p>
                  <h3 className="text"> Результат:</h3> Компания клиента
                  благополучна подписала контракт и приступила к выполнению
                  работ в сроки установленные контрактом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-1125 mt-40">
        <div className="d-flex ">
          <button
            className={
              toggleState === 1
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(1)}
          >
            Нет лимитов
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(2)}
          >
            Отсутствует опыт
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(3)}
          >
            Отрицательные балансы
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(4)}
          >
            Высока кредитная нагрузка
          </button>
          <button
            className={
              toggleState === 5
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(5)}
          >
            Новая компания
          </button>
        </div>
        <div className="d-flex mt-10">
          <button
            className={
              toggleState === 6
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(6)}
          >
            Первый раз
          </button>
          <button
            className={
              toggleState === 7
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(7)}
          >
            Отсутствие денег на оплату гарантии
          </button>
          <button
            className={
              toggleState === 8
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(8)}
          >
            Сложный макет
          </button>
          <button
            className={
              toggleState === 9
                ? "tabs active-tabs active-tabs--orange"
                : "tabs tabs--grey"
            }
            onClick={() => toggleTab(9)}
          >
            Незговорчивый заказчик
          </button>
        </div>
      </div>
    </>
  );
}
export { History };
