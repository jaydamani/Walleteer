export function formatCurrencyInput(num: string) {
  let res = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(+num);
  let leadingZeros = num.match(/\.0{0,2}$/);
  if (leadingZeros) res += leadingZeros[0];
  return res;
}
