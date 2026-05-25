class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount,
      });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount: amount,
      });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  listAllDeposits() {
    const depositsList = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount)
      .join(",");
    return `Deposits: ${depositsList}`;
  }
  listAllWithdrawals() {
    const withdrawalsList = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount)
      .join(",");
    return `Withdrawals: ${withdrawalsList}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(20);
myAccount.deposit(50);
myAccount.deposit(100);
myAccount.withdraw(10);
myAccount.withdraw(20);
