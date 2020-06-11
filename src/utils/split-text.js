let SplitText = function SplitText(selector) {

  this.selector = selector;
  this.$el = document.querySelector(selector);

  let text = this.$el.innerText.trim();
  this.text = text;

  let newText = '<div style="position: relative; display: inline-block">';

  this.$el.innerText = '';

  for (let i = 0, l = this.text.length; i < l; i++) {

    if (this.text[i] !== ' ') {
      newText += `<span class="dx-char" style="position: relative; display: inline-block; transform: matrix(1,0,0,1,0,0);">${this.text[i]}</span>`;
    } else {
      newText += '</div> <div style="position: relative; display: inline-block">';

    }
  }

  newText += '</div>';

  this.$el.innerHTML = newText;
  this.chars = this.$el.querySelectorAll(".dx-char");

};

export default SplitText;
