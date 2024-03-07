/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

const product = {
  name: "Smart TV",
  price: 25000,
  category: "Electronics",
  details: {
    brand: "Samsung",
    color: "Black",
    weight: "15.5",
  },
};

function displayProductInfo() {
  console.log(`Назва товару: ${name}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log("Деталі:");
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

displayProductInfo(product);
