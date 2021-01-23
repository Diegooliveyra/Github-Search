import debounce from "./debounce.js"


export default class Scrollanima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.3;

    this.checkdistance = debounce(this.checkdistance.bind(this), 50);
  }

  // pega a distancia de casa item 
  // em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia de casa objero
  // em relação ao scroll do site
  checkdistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkdistance();
      window.addEventListener("scroll", this.checkdistance);
    }
    return this;
  }
}
