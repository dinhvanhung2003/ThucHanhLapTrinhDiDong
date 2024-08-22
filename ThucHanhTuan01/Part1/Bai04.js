//Data Test
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

//Ham tinh tien bill va tong so tien 
const tinhTip = (bill) => {
        // Tinh tip
        const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
        // Tinh tong tien
        const total = bill + tip;
        // In ket qua 
        console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)} and the total value ${total}`)
    }
    // Test du lieu 
tinhTip(bill1);
tinhTip(bill2);
tinhTip(bill3);