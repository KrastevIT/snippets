    getCursorPosition(e) {
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
