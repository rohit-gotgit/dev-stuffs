function calculateTicketPrice(age, isWeekend) {
  if (typeof age !== "number" || age < 0 || Number.isNaN(age)) {
    return -1;
  }

  if (typeof isWeekend !== "boolean") {
    return -1;
  }

  let price;

  if (age <= 12) {
    price = 8;
  } else if (age <= 17) {
    price = 12;
  } else if (age <= 59) {
    price = 15;
  } else {
    price = 10;
  }

  if (isWeekend) {
    price += 3;
  }

  return price;
}
