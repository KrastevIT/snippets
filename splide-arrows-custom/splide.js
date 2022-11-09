    move(event) {
      const button = event.currentTarget;

      if(button.hasAttribute('next')) {
        this.slider.Components.Controller.go('>');
      } else {
        this.slider.Components.Controller.go('<');
      }

      const indexSlide = this.slider.Components.Controller.getIndex();
      const endIndex = this.slider.Components.Controller.getEnd();

      if(indexSlide == 0) {
        this.arrowPrev.setAttribute('disabled', '');
      }else {
        this.arrowPrev.removeAttribute('disabled');
      }

      if(indexSlide == endIndex) {
        this.arrowNext.setAttribute('disabled', '');
      } else {
        this.arrowNext.removeAttribute('disabled');
      }
    }
