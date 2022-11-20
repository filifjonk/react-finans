import "./index.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Manager } from "./Manager";
import { Opens } from "./Opens";
import { Nav } from "./Nav";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
function Contacts() {
  const defaultState = {
    center: [51.528901, 46.007972],
    zoom: 15
  };
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="office__wrapper">
        <h2 className="binding mt-100">КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
        <div className="line-orange"></div>
        <div className="phone mt-50">Центральный офис</div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/map.png"
            alt=""
          />
          <div className="office-info">
            410026, г. Саратов, ул.Аткарская, 66 Г ДЦ “Спутник” офис. 420
          </div>
        </div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/truba.png"
            alt=""
          />
          <div className="office-info">8 8452 33 44 11</div>
        </div>
        <div className="mt-50">
          <YMaps className="">
            <Map width={1230} height={500} defaultState={defaultState}>
              <Placemark geometry={[51.528901, 46.007972]} />
            </Map>
          </YMaps>
        </div>
        <div className="phone phone--24 mt-100">
          РЕГИОНАЛЬНЫЕ ПРЕДСТАВИТЕЛЬСТВА
        </div>
        <div className="phone mt-50">Санкт-Петербург</div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/map.png"
            alt=""
          />
          <div className="office-info">
            191123, г. Санкт-Петербург, ул. Захарьевская 25, БЦ «Z-25» оф. 508
            м. Чернышевского
          </div>
        </div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/truba.png"
            alt=""
          />
          <div className="office-info">8 8452 33 44 11</div>
        </div>
        <div className="phone mt-50">Новосибирск</div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/map.png"
            alt=""
          />
          <div className="office-info">
            630004, г. Новосибирск, пр. Димитрова, 4/1, 15 этаж офис 15 D
          </div>
        </div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/truba.png"
            alt=""
          />
          <div className="office-info">8 8452 33 44 11</div>
        </div>
        <div className="phone mt-50">Краснодар</div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/map.png"
            alt=""
          />
          <div className="office-info">
            350002 г. Краснодар, ул. Северная д. 476, этаж 5, оф. № 15 и 16
          </div>
        </div>
        <div className="d-flex mt-30">
          <img
            width={16}
            height={16}
            className="mr-20 "
            src="/img/truba.png"
            alt=""
          />
          <div className="office-info">8 8452 33 44 11</div>
        </div>
        <h2 className="binding mt-100">РЕКВИЗИТЫ КОМПАНИИ</h2>
        <div className="line-orange"></div>
        <div className="d-flex">
          <div className="mt-50 d-flex flex-column align-right mr-30">
            <div className="textBlack">Полное назвнание</div>
            <div className="textBlack">Адрес</div>
            <div className="textBlack">ОКОПФ</div>
            <div className="textBlack">ИНН</div>
            <div className="textBlack">ОГРН</div>
            <div className="textBlack">КПП</div>
            <div className="textBlack">ОКАТО</div>
            <div className="textBlack">ОКПО</div>
          </div>
          <div className="mt-50 d-flex flex-column">
            <div className="textBlack textBlack--grey">
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ДВК ФИНАНС"
            </div>
            <div className="textBlack textBlack--grey">
              Саратовская обл., г. Саратов, ул. Аткарская, д. 66 литера Г, офис
              420
            </div>
            <div className="textBlack textBlack--grey">
              Общества с ограниченной ответственностью
            </div>
            <div className="textBlack textBlack--grey">6455072560</div>
            <div className="textBlack textBlack--grey">1196451017344</div>
            <div className="textBlack textBlack--grey">645501001</div>
            <div className="textBlack textBlack--grey">
              Саратовская область, Саратов, Фрунзенский
            </div>
            <div className="textBlack textBlack--grey">41089880</div>
          </div>
        </div>
      </div>
      <Opens />
      <Manager />
      <Footer />
    </div>
  );
}
export { Contacts };
