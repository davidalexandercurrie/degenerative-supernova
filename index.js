let counter = 1;
let grow = 1;
let buttons = [];
let sliders = [];
let id = 0;
console.log(window.location.search == '?frame' ? 'frame' : 'notframe');

function waitForDom() {
  if (window.location.search != '?frame') {
    setInterval(function () {
      if (Math.random() > 0.95) {
        const slider = document.createElement('input');
        const div = document.createElement('div');
        slider.setAttribute('type', 'range');
        slider.className = 'slider';
        sliders.push(slider);
        slider.style.transform =
          'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
        slider.onchange = function () {
          for (let i = 0; i < sliders.length; i++)
            sliders[i].style.transform =
              'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
          {
          }
        };
        let color =
          'rgb(' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255));
        slider.style.position = 'absolute';
        let left =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        let right =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        slider.style.left = left + 'vw';
        slider.style.top = right + 'vh';
        div.appendChild(slider);
        slider.background = 'none';
        container.appendChild(div);
        div.style.fill = color;
        div.style.stroke = 'none';
      }

      for (let i = 0; i < counter; i++) {
        var limit = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        var limitX = Math.max(
          document.body.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.clientWidth,
          document.documentElement.scrollWidth,
          document.documentElement.offsetWidth
        );
        let btn = document.createElement('BUTTON');
        btn.innerHTML = 'CLICK ME'; // Insert text
        btn.parentElement;
        btn.style.position = 'absolute';
        let left =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        let right =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        btn.style.left = left + 'vw';
        btn.style.top = right + 'vh';
        let container = document.getElementById('container');
        container.appendChild(btn);
        buttons.push(btn);
        let color =
          'rgb(' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255));
        btn.className = 'button';
        btn.style.border = '2px solid ' + color;
        btn.style.fontFamily = 'Helvetica';
        let paddingValue = String(Math.floor(Math.random() * 5)) + 'px';
        btn.style.padding = paddingValue;
        let scrollToPosition = Math.random() * limit * 2;
        let scrollToPositionX = Math.random() * limitX * 2;
        btn.onclick = function () {
          window.scrollTo({
            top: String(scrollToPosition),
            left: String(scrollToPositionX),
            behavior: 'smooth',
          });
        };
      }
      if (Math.random() > 0.9) {
        counter++;
        grow += 2;
      }
      console.log(buttons.length, grow);
    }, 100);

    setInterval(() => {
      let buttonsToRemove = buttons.length / 1.15;
      let virusStartPoint = Math.floor(
        Math.random() * buttons.length - buttonsToRemove
      );
      virusStartPoint = virusStartPoint < 0 ? 0 : virusStartPoint;
      for (
        let i = virusStartPoint;
        i < virusStartPoint + buttonsToRemove;
        i++
      ) {
        buttons[i].remove();
      }

      for (
        let i = virusStartPoint;
        i < virusStartPoint + buttonsToRemove;
        i++
      ) {
        buttons.splice(i, 1);
      }
      // grow = Math.floor(grow / 2);
      counter -= Math.floor(counter / 2);
    }, 1000);
  } else {
    var limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    for (let i = 0; i < 200; i++) {
      for (let i = 0; i < counter; i++) {
        let btn = document.createElement('BUTTON');
        btn.innerHTML = 'CLICK ME'; // Insert text
        btn.parentElement;
        btn.style.position = 'absolute';
        let left =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        let right =
          50 +
          Math.random() *
            (grow == 0 ? 1 : grow) *
            (Math.random() > 0.5 ? -1 : 1);
        btn.style.left = left + 'vw';
        btn.style.top = right + 'vh';
        let container = document.getElementById('container');
        container.appendChild(btn);
        buttons.push(btn);
        let color =
          'rgb(' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255)) +
          ',' +
          String(Math.floor(Math.random() * 255));
        btn.className = 'button';
        btn.style.border = '2px solid ' + color;
        btn.style.fontFamily = 'Helvetica';
        let paddingValue = String(Math.floor(Math.random() * 5)) + 'px';
        btn.style.padding = paddingValue;
        let scrollToPosition = Math.random() * limit * 2;
        // btn.onclick = function () {
        //   window.scrollTo({
        //     top: String(scrollToPosition),
        //     behavior: 'smooth',
        //   });
        // };
      }
      if (Math.random() > 0.9) {
        counter++;
        grow += 2;
      }
      if (Math.random() > 0.95) {
        let buttonsToRemove = buttons.length / 1.15;
        let virusStartPoint = Math.floor(
          Math.random() * buttons.length - buttonsToRemove
        );
        virusStartPoint = virusStartPoint < 0 ? 0 : virusStartPoint;
        for (
          let i = virusStartPoint;
          i < virusStartPoint + buttonsToRemove;
          i++
        ) {
          buttons[i].remove();
        }

        for (
          let i = virusStartPoint;
          i < virusStartPoint + buttonsToRemove;
          i++
        ) {
          buttons.splice(i, 1);
        }
        // grow = Math.floor(grow / 2);
        counter -= Math.floor(counter / 2);
      }
    }
  }
}
