(() => {
  if (customElements.get('image-zoom')) {
    return;
  }

  class ImageZoom extends HTMLElement {
    constructor() {
      super();
      this.img = this.querySelector('#myimage');
      this.result = this.querySelector('#myresult');
      this._offsetWidth = this.result.offsetWidth;
      this._offsetHeight  = this.result.offsetHeight;

      this.lens = document.createElement("DIV");
      this.lens.setAttribute("class", "img-zoom-lens");
      this.img.parentElement.insertBefore(this.lens, this.img);

      this.cx = this.result.offsetWidth / this.lens.offsetWidth;
      this.cy = this.result.offsetHeight / this.lens.offsetHeight;
    }

    connectedCallback() {
      this.initZoomImage();
     this.img.addEventListener("mousemove", this.move.bind(this));
    }

    initZoomImage() {
      this.result.style.backgroundImage = "url('" + this.img.src + "')";
      this.result.style.backgroundSize = (this.img.width * this.cx) + "px " + (this.img.height * this.cy) + "px";
    }

    move(e) {
      e.preventDefault();
      const pos = this.getCursorPos(e);

      this.result.style.left = pos.x + "px";
      this.result.style.top = pos.y + "px";

      this.result.style.backgroundPosition = "-" + (pos.x * this.cx) + "px -" + (pos.y * this.cy) + "px";

      this.result.style.left = pos.x + "px";
      this.result.style.top = pos.y + "px";

      this.lens.style.left = pos.x + "px";
      this.lens.style.top = pos.y + "px";
    }

    getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = this.img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  customElements.define('image-zoom', ImageZoom);
})();
