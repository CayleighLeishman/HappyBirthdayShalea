document.addEventListener('DOMContentLoaded', () => {
  const flame = document.querySelector('.flame');
  const smoke = document.querySelector('.smoke');
  let extinguished = false;

  const extinguishFlame = () => {
    flame.style.animation = 'extinguish 2s ease-out forwards';
    flame.style.opacity = '0';
    flame.style.transform = 'scaleY(0.2)';
    extinguished = true;

    // Puff the smoke
    smoke.style.animation = 'none'; // reset
    void smoke.offsetWidth;
    smoke.style.animation = 'puff 1s ease-out';
  };

  const igniteFlame = () => {
    flame.style.animation = 'none';
    flame.style.opacity = '1';
    flame.style.transform = 'scale(1)';
    void flame.offsetWidth;

    // Spark into flame
    flame.style.animation = 'sparkToFlame 1s ease-out forwards';

    // After spark, start flickering again
    setTimeout(() => {
      flame.style.animation = 'flicker 1s ease-in-out alternate infinite';
    }, 1000);

    extinguished = false;
  };

  const toggleFlame = () => {
    extinguished ? igniteFlame() : extinguishFlame();
  };

  flame.addEventListener('click', toggleFlame);

  flame.addEventListener('touchstart', (e) => {
    e.preventDefault();
    toggleFlame();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const flame = document.querySelector('.flame');
  const smoke = document.querySelector('.smoke');
  let extinguished = false;

  const extinguishFlame = () => {
    flame.classList.remove('flickering', 'growing');
    flame.classList.add('extinguishing');
    extinguished = true;

    // Puff smoke animation
    if (smoke) {
      smoke.style.animation = 'none';
      void smoke.offsetWidth; // trigger reflow
      smoke.style.animation = 'puff 1s ease-out';
    }
  };

  const igniteFlame = () => {
    flame.classList.remove('extinguishing');
    flame.classList.add('growing');
    extinguished = false;

    // After spark animation finishes, switch to flicker
    setTimeout(() => {
      flame.classList.remove('growing');
      flame.classList.add('flickering');
    }, 1000);
  };

  const toggleFlame = () => {
    extinguished ? igniteFlame() : extinguishFlame();
  };

  flame.addEventListener('click', toggleFlame);
  flame.addEventListener('touchstart', (e) => {
    e.preventDefault();
    toggleFlame();
  });
});
