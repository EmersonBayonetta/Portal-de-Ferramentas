import { useMemo, useState } from "react";

type Item = {
  id: string;
  descricao: string;
  valor: number;
};

export function MoneyFlow() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [itens, setItens] = useState<Item[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  const saldoTotal = useMemo(() => {
    return itens.reduce((acc, item) => acc + item.valor, 0);
  }, [itens]);

  function adicionarItem(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    const desc = descricao.trim();
    const valorNumero = Number(valor);

    if (!desc) {
      setErro("A descrição é obrigatória.");
      return;
    }

    if (Number.isNaN(valorNumero)) {
      setErro("Digite um valor numérico válido.");
      return;
    }

    if (valorNumero === 0 || valorNumero < 0) {
      setErro("O valor não pode ser zero ou negativo.");
      return;
    }

    const novoItem: Item = {
      id: crypto.randomUUID(),
      descricao: desc,
      valor: valorNumero,
    };

    setItens((prev) => [novoItem, ...prev]);
    setDescricao("");
    setValor("");
  }

  function removerItem(id: string) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-50 p-6">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <header className="rounded-2xl border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-zinc-900">MoneyFlow</h1>
          <p className="text-sm text-zinc-500">Controle simples de gastos</p>

          <div className="mt-4 rounded-xl bg-zinc-900 p-4 text-white">
            <p className="text-sm opacity-80">Saldo Total</p>
            <p className="text-3xl font-bold">
              R$ {saldoTotal.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </header>

        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Novo registro</h2>

          <form onSubmit={adicionarItem} className="mt-4 grid gap-3">
            <input
              className="w-full rounded-xl border border-zinc-300 p-3 outline-none focus:border-zinc-500"
              type="text"
              placeholder="Descrição (ex: Mercado)"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <input
              className="w-full rounded-xl border border-zinc-300 p-3 outline-none focus:border-zinc-500"
              type="number"
              placeholder="Valor (ex: 120.50)"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              step="0.01"
            />

            {erro && (
              <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {erro}
              </p>
            )}

            <button
              className="rounded-xl bg-zinc-900 p-3 font-semibold text-white hover:bg-zinc-800"
              type="submit"
            >
              Adicionar
            </button>

            <p className="text-xs text-zinc-500">
              Obs: este exercício valida para não aceitar zero/negativo.
            </p>
          </form>
        </section>

        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Registros</h2>

          {itens.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-600">
              Nenhum item cadastrado ainda.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {itens.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border p-3"
                >
                  <div>
                    <p className="font-medium text-zinc-900">{item.descricao}</p>
                    <p className="text-sm text-zinc-500">
                      R$ {item.valor.toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <button
                    onClick={() => removerItem(item.id)}
                    className="rounded-lg border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
