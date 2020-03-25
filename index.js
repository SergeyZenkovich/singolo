const navbar = document.querySelector('.navbar');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const sliderBlock1 = document.querySelector('.sliderBlock');

const horizontalPicture = document.querySelector(
  '.iphoneHorizontalSrceenBackground'
);
const verticalPicture = document.querySelector(
  '.iphoneVerticalSrceenBackground'
);
const verticalPhone = document.querySelector('.iphoneVerticalBlock');
const horizontalPhone = document.querySelector('.iphoneHorizontalBlock');

const Pictures = document.querySelector('.portfolio-pictures');
const FirstPicture = document.querySelector('.picture-block__1');
const SecondPicture = document.querySelector('.picture-block__2');
const ThirdPicture = document.querySelector('.picture-block__3');
const FourthPicture = document.querySelector('.picture-block__4');
const FivePicture = document.querySelector('.picture-block__5');
const SixPicture = document.querySelector('.picture-block__6');
const SevenPicture = document.querySelector('.picture-block__7');
const EightPicture = document.querySelector('.picture-block__8');
const NinePicture = document.querySelector('.picture-block__9');
const TenPicture = document.querySelector('.picture-block__10');
const ElPicture = document.querySelector('.picture-block__11');
const TwPicture = document.querySelector('.picture-block__12');
const ButtonsBlock = document.querySelector('.portfolio-buttons');
const Submit = document.querySelector('.connect-input__submit');
const Connect = document.querySelector('.connect');

const MenuBtn = document.querySelector('.mobileMenu');
let IsMenuInactive = true;

navbar.addEventListener('click', event => {
  let previousActive = navbar.querySelector('.navbar-elem__active');
  if (previousActive) {
    previousActive.classList.remove('navbar-elem__active');
  }
  let active = event.target;
  active.classList.add('navbar-elem__active');
});

function switchSlide() {
  if (getComputedStyle(sliderBlock1).getPropertyValue('opacity') == 1) {
    sliderBlock1.style.opacity = '0';
    setTimeout(() => {
      sliderBlock1.style.display = 'none';
    }, 500);
  } else {
    sliderBlock1.style.display = 'flex';
    setTimeout(() => {
      sliderBlock1.style.opacity = '1';
    }, 100);
  }
}
nextButton.addEventListener('click', switchSlide);
prevButton.addEventListener('click', switchSlide);

horizontalPhone.addEventListener('click', () => {
  if (
    getComputedStyle(horizontalPicture).getPropertyValue('display') == 'block'
  ) {
    horizontalPicture.style.display = 'none';
  } else {
    horizontalPicture.style.display = 'block';
  }
});
verticalPhone.addEventListener('click', () => {
  if (
    getComputedStyle(verticalPicture).getPropertyValue('display') == 'block'
  ) {
    verticalPicture.style.display = 'none';
  } else {
    verticalPicture.style.display = 'block';
  }
});

ButtonsBlock.addEventListener('click', event => {
  let previousActive = ButtonsBlock.querySelector('.activeButton');
  if (previousActive) {
    previousActive.classList.remove('activeButton');
  }
  let active = event.target;
  if (active.classList[0] === 'all-button') {
    Pictures.innerHTML = '';
    Pictures.insertAdjacentElement('afterbegin', TwPicture);
    Pictures.insertAdjacentElement('afterbegin', ElPicture);
    Pictures.insertAdjacentElement('afterbegin', TenPicture);
    Pictures.insertAdjacentElement('afterbegin', NinePicture);
    Pictures.insertAdjacentElement('afterbegin', EightPicture);
    Pictures.insertAdjacentElement('afterbegin', SevenPicture);
    Pictures.insertAdjacentElement('afterbegin', SixPicture);
    Pictures.insertAdjacentElement('afterbegin', FivePicture);
    Pictures.insertAdjacentElement('afterbegin', FourthPicture);
    Pictures.insertAdjacentElement('afterbegin', ThirdPicture);
    Pictures.insertAdjacentElement('afterbegin', SecondPicture);
    Pictures.insertAdjacentElement('afterbegin', FirstPicture);
    active.classList.add('activeButton');
  } else if (active.classList[0] === 'web-button') {
    Pictures.innerHTML = '';

    Pictures.insertAdjacentElement('afterbegin', FourthPicture);
    Pictures.insertAdjacentElement('afterbegin', ThirdPicture);
    Pictures.insertAdjacentElement('afterbegin', SecondPicture);
    Pictures.insertAdjacentElement('afterbegin', FirstPicture);
    Pictures.insertAdjacentElement('afterbegin', EightPicture);
    Pictures.insertAdjacentElement('afterbegin', SevenPicture);
    Pictures.insertAdjacentElement('afterbegin', SixPicture);
    Pictures.insertAdjacentElement('afterbegin', FivePicture);
    Pictures.insertAdjacentElement('afterbegin', TwPicture);
    Pictures.insertAdjacentElement('afterbegin', ElPicture);
    Pictures.insertAdjacentElement('afterbegin', TenPicture);
    Pictures.insertAdjacentElement('afterbegin', NinePicture);

    active.classList.add('activeButton');
  } else if (active.classList[0] === 'artwork-button') {
    Pictures.innerHTML = '';
    Pictures.insertAdjacentElement('afterbegin', FivePicture);
    Pictures.insertAdjacentElement('afterbegin', TwPicture);
    Pictures.insertAdjacentElement('afterbegin', ElPicture);
    Pictures.insertAdjacentElement('afterbegin', TenPicture);
    Pictures.insertAdjacentElement('afterbegin', FourthPicture);
    Pictures.insertAdjacentElement('afterbegin', SevenPicture);
    Pictures.insertAdjacentElement('afterbegin', SixPicture);
    Pictures.insertAdjacentElement('afterbegin', ThirdPicture);
    Pictures.insertAdjacentElement('afterbegin', SecondPicture);
    Pictures.insertAdjacentElement('afterbegin', FirstPicture);
    Pictures.insertAdjacentElement('afterbegin', EightPicture);
    Pictures.insertAdjacentElement('afterbegin', NinePicture);

    active.classList.add('activeButton');
  } else if (active.classList[0] === 'graphic-button') {
    Pictures.innerHTML = '';
    Pictures.insertAdjacentElement('afterbegin', FivePicture);
    Pictures.insertAdjacentElement('afterbegin', TwPicture);
    Pictures.insertAdjacentElement('afterbegin', SecondPicture);
    Pictures.insertAdjacentElement('afterbegin', FirstPicture);
    Pictures.insertAdjacentElement('afterbegin', SevenPicture);
    Pictures.insertAdjacentElement('afterbegin', TenPicture);
    Pictures.insertAdjacentElement('afterbegin', FourthPicture);
    Pictures.insertAdjacentElement('afterbegin', ThirdPicture);
    Pictures.insertAdjacentElement('afterbegin', SecondPicture);
    Pictures.insertAdjacentElement('afterbegin', SixPicture);
    Pictures.insertAdjacentElement('afterbegin', ElPicture);
    Pictures.insertAdjacentElement('afterbegin', NinePicture);
    Pictures.insertAdjacentElement('afterbegin', FirstPicture);
    Pictures.insertAdjacentElement('afterbegin', EightPicture);

    active.classList.add('activeButton');
  }
});
Pictures.addEventListener('click', event => {
  let previousActive = Pictures.querySelector('.active-picture-block');
  if (previousActive) {
    previousActive.classList.remove('active-picture-block');
  }
  let active = event.target;
  if (active.classList[0] === 'picture-block') {
    active.classList.add('active-picture-block');
    if (previousActive === active) {
      active.classList.remove('active-picture-block');
    }
  }
});
Submit.addEventListener('click', event => {
  event.preventDefault();
  let subject = document.querySelector('#iSubject').value;
  if (subject === '') {
    subject = 'Без темы';
  } else {
    subject = `Тема: ${subject}`;
  }
  let description = document.querySelector('#tDescribe').value;
  if (description === '') {
    description = 'Без описания';
  } else {
    description = `Описание: ${description}`;
  }
  Connect.insertAdjacentHTML(
    'afterbegin',
    `<div class ="notificationBlock"><p class ="notificationParagraph"> Письмо отправлено!</p>  <p class = "subjectNotification">${subject}</p> <p class = "descriptionNotification">${description}</p><button id = "okButton" type = "button">Ok</button> </div>`
  );
  okButton.addEventListener('click', () => {
    document.querySelector('.notificationBlock').remove();
    document.querySelector('#iEmail').value = '';
    document.querySelector('#iName').value = '';
    document.querySelector('#iSubject').value = '';
    document.querySelector('#tDescribe').value = '';
  });
});
MenuBtn.addEventListener('click', () => {
  if (IsMenuInactive) {
    MenuBtn.style.transform = 'rotate(90deg)';
    navbar.style.transform = 'translate(0px, 0px)';
    IsMenuInactive = false;
  } else {
    MenuBtn.style.transform = 'rotate(0deg)';
    navbar.style.transform = 'translate(-500px, 0px)';
    IsMenuInactive = true;
  }
});
