import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="p-8 text-center space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo ao Portal de Ferramentas</h1>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <Link
          to="/TaskMaster"
          className="bg-cyan-800 text-white p-6 rounded-xl w-48 hover:bg-cyan-700"
        >
          TaskMaster
        </Link>

        <Link
          to="/ConnectHub"
          className="bg-cyan-800 text-white p-6 rounded-xl w-48 hover:bg-cyan-700"
        >
          ConnectHub
        </Link>

        <Link
          to="/MoneyFlow"
          className="bg-cyan-800 text-white p-6 rounded-xl w-48 hover:bg-cyan-700"
        >
          MoneyFlow
        </Link>
      </div>
    </div>
  );
}
