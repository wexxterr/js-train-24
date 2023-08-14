console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Promise 1")
  })
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 200, "Promise 2")
  })
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 300, "Promise 3")
  })
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  Promise.any([promise1, promise2, promise3])
    // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
    .then((data) => console.log(data))
    // Якщо проміс виконаний з помилкою виводимо в консоль помилку
    .catch((error) => console.log(error))
}

// Викликаємо функцію task10
task10();
