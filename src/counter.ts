export function compteur(element: HTMLDivElement) {
  let counter = 0;

  const output = () => {
    element.innerHTML = `Compteur : ${counter}`;
  };

  const increment = () => {
    counter++;
    output();
  };

  const decrement = () => {
    counter--;
    output();
  };

  const reset = () => {
    counter = 0;
    output();
  };

  output();

  return {
    increment,
    decrement,
    reset,
  };
}
