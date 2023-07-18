import { Car } from "../type";
import { Button, createAndAppendElement } from "./util";

let cars: [Car];

const storedCars = localStorage.getItem("carsAll");
if (storedCars !== null) {
  cars = JSON.parse(storedCars);
}

const createCar = {
  elements: {
    main: null as HTMLElement | null,
    container: null as HTMLElement | null,
    div: null as HTMLElement | null,
    button: null as HTMLElement | null,
    p: null as HTMLElement | null,
    road: null as HTMLElement | null,
    flag: null as HTMLElement | null,
    pole: null as HTMLElement | null,
    checkered: null as HTMLElement | null,
    car: null as HTMLElement | null,
  },

  init(carName: string) {
    this.elements.main = document.querySelector("main");
    this.elements.container = createAndAppendElement(
      "div",
      "container car-box"
    );
    if (this.elements.main) {
      this.elements.main.appendChild(this.elements.container);
    } else {
      console.error("Not find <main></main>");
    }

    const selectBtn = new Button("select");
    const removeBtn = new Button("remove");
    const aBtn = new Button("a", "green");
    const bBtn = new Button("b");

    const btn = (btn: Button) => {
      this.elements.button = createAndAppendElement(
        "button",
        `button editor-button start-button`,
        btn.name
      );
      this.elements.button.style.backgroundColor = btn.color;
      this.elements.container?.appendChild(this.elements.button);
    };

    btn(selectBtn);
    btn(removeBtn);
    btn(aBtn);
    btn(bBtn);

    this.elements.p = createAndAppendElement("p", "car-name");
    this.elements.p.textContent = carName;
    this.elements.container?.appendChild(this.elements.p);
  },
  road(color: string) {
    this.elements.road = createAndAppendElement("div", "car-road");
    this.elements.container?.appendChild(this.elements.road);

    this.elements.flag = createAndAppendElement("div", "flag");
    this.elements.road?.appendChild(this.elements.flag);
    this.elements.pole = createAndAppendElement("div", "pole");
    this.elements.flag?.appendChild(this.elements.pole);
    this.elements.checkered = createAndAppendElement("div", "checkered");
    this.elements.flag?.appendChild(this.elements.checkered);

    this.elements.car = createAndAppendElement("div", "car");
    this.elements.road?.appendChild(this.elements.car);
    this.elements.div = createAndAppendElement("div", "car-body");
    this.elements.div.style.backgroundColor = color;
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-window");
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-wheel car-front");
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement("div", "car-wheel car-rear");
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement(
      "div",
      "car-headlight car-left car-left-light"
    );
    this.elements.car?.appendChild(this.elements.div);
    this.elements.div = createAndAppendElement(
      "div",
      "car-headlight car-right car-right-light"
    );
    this.elements.car?.appendChild(this.elements.div);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  cars.forEach((car: Car) => {
    createCar.init(car.name);
    createCar.road(car.color);
  });
});
