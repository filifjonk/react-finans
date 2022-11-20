import "./styles.css";

import { useState } from "react";
function StayUp() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="office__wrapper">
      <div className="office__top mt-100">
        <h2 className="binding">БУДЬТЕ В КУРСЕ СОБЫТИЙ </h2>
        <div className="line-orange"></div>
        <div className="office-info">
          Всегда оставайтесь в курсе актуальны событий в финансовой сфере и
          закупочном законодательстве. Пресс-центр ДВК ФИНАНС отслеживает
          актуальные изменения в сфере законодательства и финансов, что
          позволяет всегда владеть актуальной ифноврмацией, позволяющей
          развивать Ваш бизнес.
        </div>
      </div>
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

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="align-left mt-50 mw-390">
            <img src="/img/Rectangle65.png" />
            <h3 className="office-info">12.01.2021</h3>
            <h2 className="choose__h">
              Новости вышли на территории России и касаются юридических лиц ...
            </h2>
            <p className="office-info">
              Lorem ipsum dolor sit amet consectetuer. Psum dolor sit amet,
              consectetuer. Amet, consectetuer dolor sit amet. Lorem ipsum dolor
              sit amet consectetuer. Psum dolor sit amet, consectetuer. Amet,
              consectetuer dolor sit amet.{" "}
            </p>
            <br />
            <a className="read">Читать далее</a>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="align-left mt-50 mw-390">
            <img src="/img/Rectangle66.png" />
            <h3 className="office-info">12.01.2021</h3>
            <h2 className="choose__h">
              Новости вышли на территории России и касаются юридических лиц ...
            </h2>
            <p className="office-info">
              Lorem ipsum dolor sit amet consectetuer. Psum dolor sit amet,
              consectetuer. Amet, consectetuer dolor sit amet. Lorem ipsum dolor
              sit amet consectetuer. Psum dolor sit amet, consectetuer. Amet,
              consectetuer dolor sit amet.{" "}
            </p>
            <br />
            <a className="read">Читать далее</a>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="align-left mt-50 mw-390">
            <img src="/img/Rectangle67.png" />
            <h3 className="office-info">12.01.2021</h3>
            <h2 className="choose__h">
              Новости вышли на территории России и касаются юридических лиц ...
            </h2>
            <p className="office-info">
              Lorem ipsum dolor sit amet consectetuer. Psum dolor sit amet,
              consectetuer. Amet, consectetuer dolor sit amet. Lorem ipsum dolor
              sit amet consectetuer. Psum dolor sit amet, consectetuer. Amet,
              consectetuer dolor sit amet.{" "}
            </p>
            <br />
            <a className="read">Читать далее</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export { StayUp };
