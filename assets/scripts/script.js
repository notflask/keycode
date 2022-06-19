function _otherText(key, location, code) {
  return `event.key: ${key}\nevent.location: ${location}\nevent.code: ${code}`;
}

window.onload = function () {
  const keycode = document.getElementById('keycode');

  const other__key = document.getElementById('other__key');
  const other__location = document.getElementById('other__location');
  const other__code = document.getElementById('other__code');

  document.onkeydown = function (e) {
    keycode.textContent = `${e.keyCode}`;

    other__key.textContent = `event.key = ${e.key}`;
    other__location.textContent = `event.location = ${e.location}`;
    other__code.textContent = `event.code = ${e.code}`;
  };
};
