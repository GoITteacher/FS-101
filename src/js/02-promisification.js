/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

const makeOrder = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  setTimeout(() => {
    if (passed) {
      onSuccess(`✅ Ваше замовлення: ${dish}`);
    }

    onError("❌ Упс, у нас закінчилися продукти");
  }, 1000);
};

makeOrder(
  "пиріжок",
  (result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  },
  (error) => {
    console.log("onMakeOrderError");
    console.log(error);
  }
);

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = (dish, onSuccess, onError) => {
  const passed = Math.random() > 0.5;

  if (passed) {
    onSuccess(`✅ Ваше замовлення: ${dish}`);
  }

  onError("❌ Упс, у нас закінчилися продукти");
};

makeOrder(
  "пиріжок",
  (result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  },
  (error) => {
    console.log("onMakeOrderError");
    console.log(error);
  }
);
