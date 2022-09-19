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
      this.cx = this._offsetWidth / 2;
      this.cy = this._offsetWidth / 2;
      this.magnifier = 2;
    }

    connectedCallback() {
      this.initZoomImage();
      this.img.addEventListener("mousemove", this.move.bind(this));
      this.img.addEventListener("mouseout", this.stopMove.bind(this));
    }

    initZoomImage() {
      this.result.style.backgroundImage = "url('" + this.img.src + "')";
      this.result.style.backgroundSize = (this.img.width * this.magnifier) + "px " + (this.img.height * this.magnifier) + "px";
    }

    move(e) {
      e.preventDefault();

      this.result.classList.remove('hidden');

      const pos = this.getCursorPos(e);

      this.result.style.left = pos.x + "px";
      this.result.style.top = pos.y + "px";
      this.result.style.backgroundPosition = "-" + (pos.x * this.magnifier - this.cx) + "px -" + (pos.y * this.magnifier - this.cy) + "px";
    }

    stopMove(e) {
      e.preventDefault();

      this.result.classList.add('hidden');
    }

    getCursorPos(e) {
      let a = 0;
      let x = 0;
      let y = 0;
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
