/**
 * Focus first input on modal / offcanvas / collapse open
 * 
*/

const inputAutoFocus = (() => {

  let targetInput = document.querySelectorAll('[data-focus-on-open]');

  if (targetInput === null) return;

  for (let i = 0; i < targetInput.length; i++) {
    let toggler = JSON.parse(targetInput[i].dataset.focusOnOpen);

    document.querySelector(toggler[1]).addEventListener(`shown.bs.${toggler[0]}`, e => {
      targetInput[i].focus();
    });
  }

})();

export default inputAutoFocus;
