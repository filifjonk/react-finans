import "./index.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Manager } from "./Manager";
import { Opens } from "./Opens";
import { Nav } from "./Nav";
import { useState } from "react";
import { Trusts } from "./Trusts";
function News() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="office__wrapper">
        <h2 className="binding mt-100">БУДЬТЕ ВСЕГДА В КУРСЕ СОБЫТИЙ</h2>
        <div className="line-orange"></div>
        <p className="office-info">
          Кто владеет информацией то владеет миром! Пресс-центр ДВК ФИНАНС
          анализирует и освещает все важные изменения в законодательстве
          госзакупок и финансовой сфере, что позволяет оперативно реагировать на
          все изменения и быть готовыми к ударам судьбы.
        </p>
        <div className="bloc-tabs">
          <h3
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Финаносвые новости
          </h3>
          <h3
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Новости Госзаказа
          </h3>
          <h3
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Важное для Бизнеса
          </h3>
        </div>
        <div className="line-orange"></div>
        <p className="office-info">
          Кто владеет информацией то владеет миром! Пресс-центр ДВК ФИНАНС
          анализирует и освещает все важные изменения в законодательстве
          госзакупок и финансовой сфере, что позволяет оперативно реагировать на
          все изменения и быть готовыми к ударам судьбы.
        </p>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1
                ? "content content--white active-content"
                : "content"
            }
          >
            <div className="align-left mt-50 ">
              <div className="d-flex ">
                <img
                  className="mr-30"
                  width={390}
                  height={260}
                  src="/img/Rectangle65.png"
                />
                <div>
                  <h3 className="office-info">12.01.2021</h3>
                  <h2 className="choose__h">
                    Новости вышли на территории России и касаются юридических
                    лиц ...
                  </h2>
                  <p className="office-info">
                    Lorem ipsum dolor sit amet consectetuer. Psum dolor sit
                    amet, consectetuer. Amet, consectetuer dolor sit amet. Lorem
                    ipsum dolor sit amet consectetuer. Psum dolor sit amet,
                    consectetuer. Amet, consectetuer dolor sit amet.{" "}
                  </p>
                  <br />
                  <a className="read">Читать далее</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "content content--white active-content"
                : "content"
            }
          >
            <div className="align-left mt-50 ">
              <div className="d-flex ">
                <img
                  className="mr-30"
                  width={390}
                  height={260}
                  src="/img/Rectangle66.png"
                />
                <div>
                  <h3 className="office-info">12.01.2021</h3>
                  <h2 className="choose__h">
                    Новости вышли на территории России и касаются юридических
                    лиц ...
                  </h2>
                  <p className="office-info">
                    Lorem ipsum dolor sit amet consectetuer. Psum dolor sit
                    amet, consectetuer. Amet, consectetuer dolor sit amet. Lorem
                    ipsum dolor sit amet consectetuer. Psum dolor sit amet,
                    consectetuer. Amet, consectetuer dolor sit amet.{" "}
                  </p>
                  <br />
                  <a className="read">Читать далее</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3
                ? "content content--white active-content"
                : "content"
            }
          >
            <div className="align-left mt-50 ">
              <div className="d-flex ">
                <img
                  className="mr-30"
                  width={390}
                  height={260}
                  src="/img/Rectangle67.png"
                />
                <div>
                  <h3 className="office-info">12.01.2021</h3>
                  <h2 className="choose__h">
                    Новости вышли на территории России и касаются юридических
                    лиц ...
                  </h2>
                  <p className="office-info">
                    Lorem ipsum dolor sit amet consectetuer. Psum dolor sit
                    amet, consectetuer. Amet, consectetuer dolor sit amet. Lorem
                    ipsum dolor sit amet consectetuer. Psum dolor sit amet,
                    consectetuer. Amet, consectetuer dolor sit amet.{" "}
                  </p>
                  <br />
                  <a className="read">Читать далее</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trusts />
      <Opens />
      <Manager />
      <Footer />
    </div>
  );
}
export { News };
