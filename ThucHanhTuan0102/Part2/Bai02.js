// Tạo hàm calcTip
const calcTip=(bill)=>{
    return (bill>=50&&bill<=300?bill*0.15:bill*0.20);
}

// bill
const bills=[125,555,44];

// tip
const tips=bills.map(calcTip);

// Total
const total=bills.map((bill,index)=>bill+tips[index]);

// In kết quả
console.log("Bills",bills);
console.log("Tips",tips);
console.log("Totals",total);