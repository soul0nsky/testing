/* eslint-disable no-param-reassign */
export default class CardWidget {
  constructor() {
    this.cardNumberInput = document.getElementById('cardNumber');
    this.cardBrandImages = document.querySelectorAll('.card-brand img');
    this.cardBrandNames = ['Visa', 'Mastercard', 'Mir', 'American Express'];
    this.cardNumberInput.addEventListener('input', this.onCardNumberInput.bind(this));
  }

  onCardNumberInput(event) {
    const cardNumber = event.target.value.replace(/\D/g, '');
    const cardBrand = this.getCardBrand(cardNumber);
    this.updateCardBrand(cardBrand);
  }

  getCardBrand(cardNumber) {
    if (cardNumber.match(/^4\d{12}(\d{3})?$/)) {
      return 'Visa';
    } if (cardNumber.match(/^5[1-5]\d{14}$/)) {
      return 'Mastercard';
    } if (cardNumber.match(/^220[0-4]\d{12}|2(2[2-7]\d{2}|8[0-9]{2}\d{10}|9([01]\d{2}|20)\d{10})$/)) {
      return 'Mir';
    } if (cardNumber.match(/^3[47]\d{13}$/)) {
      return 'American Express';
    }
    return null;
  }

  updateCardBrand(cardBrand) {
    this.cardBrandImages.forEach((image) => {
      const brandName = image.getAttribute('alt');
      if (brandName === cardBrand) {
        image.style.display = 'inline-block';
      } else {
        image.style.display = 'none';
      }
    });
  }
}
