import { compteur } from './counter';

const counterContainer = document.getElementById('display') as HTMLDivElement;
const { increment, decrement, reset } = compteur(counterContainer);

const incButton = document.getElementById('incrementer') as HTMLButtonElement;
const decButton = document.getElementById('decrementer') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);
