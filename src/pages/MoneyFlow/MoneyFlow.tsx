import  { useState } from "react";
import "./MoneyFlow.css";

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

export default function MoneyFlow() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 0);

  const handleAddTransaction = () => {
    setError("");
    const numAmount = parseFloat(amount);

    if (!description.trim()) {
      setError("Descrição é obrigatória");
      return;
    }

    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Valor deve ser maior que zero");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: numAmount,
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="money-flow-container">
      <h1>Controle de Gastos</h1>

      <div className="balance-card">
        <h2>Saldo Total</h2>
        <p className="balance-amount">R$ {totalBalance.toFixed(2)}</p>
      </div>

      <div className="form-section">
        <input
          type="text"
          placeholder="Descrição da despesa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddTransaction}>Adicionar</button>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="transactions-list">
        {transactions.map((t) => (
          <div key={t.id} className="transaction-item">
            <div>
              <p className="description">{t.description}</p>
              <p className="amount">R$ {t.amount.toFixed(2)}</p>
            </div>
            <button onClick={() => handleDeleteTransaction(t.id)}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
