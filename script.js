const startBtn = document.getElementById("start");
      const stopBtn = document.getElementById("stop");
      const body = document.querySelector("body");
      const hex = "0123456789ABCDEF";
      let colorChanged;

      function changeColor() {
        let colorCode = "#";
        for (let i = 0; i < 6; i++) {
          var randomCode = Math.floor(Math.random() * 16);
          colorCode += hex[randomCode];
        }
        body.style.backgroundColor = colorCode;
        console.log(colorCode);
      }

      startBtn.addEventListener("click", function () {
        if (!colorChanged) {
          colorChanged = setInterval(changeColor, 1000);
        }
      });

      stopBtn.addEventListener("click", function () {
        clearInterval(colorChanged);
        colorChanged = null;
      });