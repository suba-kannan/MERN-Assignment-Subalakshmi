//closure
const createBankAccount = (balance) => {
  return (amount) => {
    balance += amount;
    return balance;
  };
};

const account = createBankAccount(1000);

console.log(account(500));
console.log(account(200));