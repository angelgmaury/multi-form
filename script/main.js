// 1era pag, VALID FORM

const nameUser = document.getElementById('name');
const email = document.getElementById('email');
const numberPhone = document.getElementById('numberPhone');

nameUser.addEventListener('keyup', (e) => {
  let txtError = document.querySelector('.txtErrorName');
  let name = e.target.value;
  nameUser.value = name.replace(/[0-9]/g, '').replace(/\W/g, '');

  if (nameUser.value === '') {
    nameUser.classList.add('error');
    nameUser.classList.remove('inputs');
    txtError.classList.add('active');
    nameUser.classList.toggle('shake-horizontal');
  } else {
    nameUser.classList.remove('error');
    nameUser.classList.add('inputs');
    txtError.classList.remove('active');
  }
});

email.addEventListener('keyup', (e) => {
  let txtError = document.querySelector('.txtErrorEmail');
  let data = e.target.value;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data)) {
    email.value = data;
    email.classList.add('inputs');
    email.classList.remove('error');
    txtError.classList.remove('active');
    email.classList.remove('shake-horizontal');
  } else {
    email.classList.add('error');
    email.classList.remove('inputs');
    txtError.classList.add('active');
    email.classList.add('shake-horizontal');
  }
});

numberPhone.addEventListener('keyup', (e) => {
  let number = e.target.value;
  let txtError = document.querySelector('.txtErrorPhone');
  numberPhone.value = number.replace(/\+?[a-zA-Z]/g, '').replace(/\D/g, '');

  if (numberPhone.value === '' || numberPhone.value.length < 12) {
    numberPhone.classList.add('error');
    numberPhone.classList.add('shake-horizontal');
    numberPhone.classList.remove('inputs');
    txtError.classList.add('active');
  } else {
    numberPhone.classList.remove('error');
    numberPhone.classList.add('inputs');
    txtError.classList.remove('active');
    numberPhone.classList.remove('shake-horizontal');
  }
});

// 2DA PAG, SELECT PLAN.
const btnNext = document.getElementById('btn');
const btnNext2 = document.getElementById('btn2');
const btnBack = document.getElementById('btnBack');
const btnBack2 = document.getElementById('btnBack2');
const btnNext3 = document.getElementById('btn3');
const btnNext4 = document.getElementById('btn4');
const btnBack3 = document.getElementById('btnBack3');
let sectionForm = document.querySelector('.sectionForm');
let sectionPlan = document.querySelector('.sectionPlan');
let sectionPickAddons = document.querySelector('.sectionPickAddons');
let sectionFinish = document.querySelector('.sectionFinish');
let sectionConfirming = document.querySelector('.sectionConfirming');
let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let numberThree = document.getElementById('numberThree');
let numberFour = document.getElementById('numberFour');
let selectArcade = document.getElementById('selectArcade');
let selectAdvanced = document.getElementById('selectAdvanced');
let selectPro = document.getElementById('selectPro');
let lblSelectArcade = document.querySelector('.selectArcade');
let lblSelectAdvanced = document.querySelector('.selectAdvanced');
let lblSelectPro = document.querySelector('.selectPro');

let form = document.getElementById('sectionForm');

btnNext.addEventListener('click', () => {
  if (nameUser.value === '' || email.value === '' || numberPhone.value === '') {
    let txtError1raPag = document.querySelector('.txtError1raPag');
    txtError1raPag.classList.remove('desactive');
  } else if (
    nameUser.classList.contains('error', 'vibrate') ||
    email.classList.contains('error', 'vibrate') ||
    numberPhone.classList.contains('error', 'vibrate') ||
    numberPhone.value.length < 12
  ) {
    let txtError1raPag = document.querySelector('.txtError1raPag');
    txtError1raPag.classList.remove('desactive');
  } else {
    sectionForm.classList.add('desactive');
    sectionPlan.classList.remove('desactive');
    btnBack.classList.add('active');
    numberOne.classList.remove('status');
    numberTwo.classList.add('status');
    let txtError1raPag = document.querySelector('.txtError1raPag');
    txtError1raPag.classList.add('desactive');
  }
});

btnBack.addEventListener('click', () => {
  sectionForm.classList.remove('desactive');
  sectionPlan.classList.add('desactive');
  btnBack.classList.remove('active');
  numberOne.classList.add('status');
  numberTwo.classList.remove('status');
});

// SELECT YOUR PLAN UNA VEZ.
selectArcade.addEventListener('change', () => {
  if (selectArcade.checked) {
    selectAdvanced.addEventListener('change', () => {
      selectArcade.checked = false;
    });
    selectPro.addEventListener('change', () => {
      selectArcade.checked = false;
    });
  }
});

selectAdvanced.addEventListener('change', () => {
  if (selectAdvanced.checked) {
    selectArcade.addEventListener('change', () => {
      selectAdvanced.checked = false;
    });
    selectPro.addEventListener('change', () => {
      selectAdvanced.checked = false;
    });
  }
});

selectPro.addEventListener('change', () => {
  if (selectPro.checked) {
    selectArcade.addEventListener('change', () => {
      selectPro.checked = false;
    });
    selectAdvanced.addEventListener('change', () => {
      selectPro.checked = false;
    });
  }
});
let txtError2raPag = document.querySelector('.txtError2raPag');
btnNext2.addEventListener('click', () => {
  if (
    selectArcade.checked === false &&
    selectAdvanced.checked === false &&
    selectPro.checked === false
  ) {
    txtError2raPag.classList.remove('desactive');
  } else {
    sectionPlan.classList.add('desactive');
    sectionPickAddons.classList.remove('desactive');
    numberTwo.classList.remove('status');
    numberThree.classList.add('status');
    txtError2raPag.classList.add('desactive');
  }
});

btnBack2.addEventListener('click', () => {
  sectionPlan.classList.remove('desactive');
  sectionPickAddons.classList.add('desactive');
  numberTwo.classList.add('status');
  numberThree.classList.remove('status');
});

let btnCheck = document.getElementById('btnCheck');
let priceArcade = document.querySelector('.priceArcade');
let priceAdvanced = document.querySelector('.priceAdvanced');
let pricePro = document.querySelector('.pricePro');
let txtFreeArcade = document.querySelector('.txtFreeArcade');
let txtFreeAdvanced = document.querySelector('.txtFreeAdvanced');
let txtFreePro = document.querySelector('.txtFreePro');
let mes = document.querySelector('.month');

let addonOnline = document.getElementById('selectAddonOnline');
let addonStorage = document.getElementById('selectAddonStorage');
let addonCustom = document.getElementById('selectAddonCustom');
let txtPriceOn = document.querySelector('.txtPriceOn');
let txtPriceSt = document.querySelector('.txtPriceSt');
let txtPriceCp = document.querySelector('.txtPriceCp');

let priceService1 = document.querySelector('.priceService1');
let priceService2 = document.querySelector('.priceService2');
let priceService3 = document.querySelector('.priceService3');

let sumTotal = document.querySelector('.sumTotal');
let signo = document.querySelector('.signo');
signo.textContent = '- MO';
btnCheck.addEventListener('change', () => {
  if (
    priceArcade.textContent === '$9/mo' ||
    priceAdvanced.textContent === '$12/mo' ||
    pricePro === '$15/mo'
  ) {
    priceArcade.textContent = '$90/yr';
    priceAdvanced.textContent = '$120/yr';
    pricePro.textContent = '$150/yr';
    txtFreeArcade.classList.remove('desactive');
    txtFreeAdvanced.classList.remove('desactive');
    txtFreePro.classList.remove('desactive');
    mes.classList.remove('text-marineBlue');
    mes.classList.add('text-coolGray');
    txtPriceOn.textContent = '+$10/yr';
    txtPriceSt.textContent = '+$20/yr';
    txtPriceCp.textContent = '+$30/yr';
    priceService1.textContent = '+$10/yr';
    priceService2.textContent = '+$20/yr';
    priceService3.textContent = '+$30/yr';
    signo.textContent = '- YR';
  } else {
    priceArcade.textContent = '$9/mo';
    priceAdvanced.textContent = '$12/mo';
    pricePro.textContent = '$15/mo';
    txtFreeArcade.classList.add('desactive');
    txtFreeAdvanced.classList.add('desactive');
    txtFreePro.classList.add('desactive');
    mes.classList.remove('text-coolGray');
    mes.classList.add('text-marineBlue');
    txtPriceOn.textContent = '+$1/mo';
    txtPriceSt.textContent = '+$2/mo';
    txtPriceCp.textContent = '+$3/mo';
    priceService1.textContent = '+$1/mo';
    priceService2.textContent = '+$2/mo';
    priceService3.textContent = '+$3/mo';
    signo.textContent = '- MO';
  }
});

let planSelects = document.querySelector('.planSelects');
let changePlan = document.querySelector('.changePlan');
let firstService = document.querySelector('.firstService');
let twoService = document.querySelector('.twoService');
let threeService = document.querySelector('.threeService');

changePlan.addEventListener('click', () => {
  sectionFinish.classList.add('desactive');
  sectionPlan.classList.remove('desactive');
});

let namePlan = document.querySelector('.namePlan');
let pricePlan = document.querySelector('.pricePlan');
let resultAddonSelect1;
let resultAddonSelect2;
let resultAddonSelect3;

btnNext3.addEventListener('click', () => {
  sectionPickAddons.classList.add('desactive');
  sectionFinish.classList.remove('desactive');
  numberThree.classList.remove('status');
  numberFour.classList.add('status');

  if (selectArcade.checked || selectAdvanced.checked || selectPro.checked) {
    planSelects.classList.remove('desactive');
    if (selectArcade.checked) {
      namePlan.textContent = 'Arcade';
      pricePlan.textContent = priceArcade.textContent;
    } else if (selectAdvanced.checked) {
      namePlan.textContent = 'Advanced';
      pricePlan.textContent = priceAdvanced.textContent;
    } else if (selectPro.checked) {
      namePlan.textContent = 'Pro';
      pricePlan.textContent = pricePro.textContent;
    }
  } else {
    planSelects.classList.add('desactive');
  }
  if (addonOnline.checked || addonStorage.checked || addonCustom.checked) {
    if (addonOnline.checked) {
      firstService.classList.remove('desactive');
      resultAddonSelect1 = txtPriceOn;
    } else {
      firstService.classList.add('desactive');
      resultAddonSelect1 = '';
    }
    if (addonStorage.checked) {
      twoService.classList.remove('desactive');
      resultAddonSelect2 = txtPriceSt;
    } else {
      twoService.classList.add('desactive');
      resultAddonSelect2 = '';
    }
    if (addonCustom.checked) {
      threeService.classList.remove('desactive');
      resultAddonSelect3 = txtPriceCp;
    } else {
      threeService.classList.add('desactive');
      resultAddonSelect3 = '';
    }
  } else {
    firstService.classList.add('desactive');
    twoService.classList.add('desactive');
    threeService.classList.add('desactive');
  }

  function sumaNumerosEnString(texto) {
    let numeros = texto.match(/\d+/g);
    let suma = 0;

    if (numeros) {
      numeros = numeros.map(Number);
      suma = numeros.reduce((a, b) => a + b, 0);
    }

    return suma;
  }
  let elementos;
  let resultadito;
  let resultaditoSigno;
  if (
    addonOnline.checked === false &&
    addonStorage.checked === false &&
    addonCustom.checked === false
  ) {
    sumTotal.textContent = `${pricePlan.textContent}`;
  } else {
    elementos =
      pricePlan.textContent +
      resultAddonSelect1.textContent +
      resultAddonSelect2.textContent +
      resultAddonSelect3.textContent;
    resultadito = sumaNumerosEnString(elementos);
    resultaditoSigno = signo.textContent;
    sumTotal.textContent = `$${resultadito} ${resultaditoSigno}`;
  }
});

btnBack3.addEventListener('click', () => {
  sectionPickAddons.classList.remove('desactive');
  sectionFinish.classList.add('desactive');
  numberThree.classList.add('status');
  numberFour.classList.remove('status');
});

btnNext4.addEventListener('click', () => {
  sectionConfirming.classList.remove('desactive');
  sectionFinish.classList.add('desactive');
  setTimeout(() => {
    location.reload();
  }, 4000);
});

const selectPrice = document.querySelector('.selectPrice');
const month = selectPrice.children[2];
selectPrice.insertBefore(month, selectPrice.children[0]);
