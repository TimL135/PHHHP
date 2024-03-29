import { ref } from 'vue';

export function closeModal() {
  (document.getElementsByClassName("btn-close")[0] as HTMLButtonElement)?.click()
}

export const view = ref('login');
export const repeatOptions = ref([
  { text: 'einmal', value: 0 },
  { text: 'jeden tag', value: 1 },
  { text: 'alle 7 tage', value: 7 },
  { text: 'alle 14 tage', value: 14 },
  { text: 'einmal im monat', value: 31 },
]);
export const importantOptions = ref([
  { text: 'nichtig', value: 0 },
  {text:'normal',value:1},
  { text: 'wichtig', value: 2 },
  { text: 'sehr wichtig', value: 3 },
]);