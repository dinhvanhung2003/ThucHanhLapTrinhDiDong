//tính tiền tip dựa trên giá trị của hóa đơn
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//  tính tiền tip và tổng số tiền cho mỗi hóa đơn
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);  
  tips.push(tip);                
  totals.push(bills[i] + tip);   
}
console.log('Bills:', bills);     
console.log('Tips:', tips);     
console.log('Totals:', totals);   

//  hàm calcAverage trung bình các giá trị trong một mảng
const calcAverage = (arr) => {
  let sum = 0;  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
  }
  return sum / arr.length; 
};
console.log('Average Total:', calcAverage(totals));  
console.log('Average Tip:', calcAverage(tips));     
