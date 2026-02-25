import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
};

export function ConnectHub() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log("Dados enviados:", data);
    reset(); 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4">
        
        <h2 className="text-2xl font-semibold text-center text-zinc-800">
          ConnectHub
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 3,
                  message: "O nome deve ter no mínimo 3 caracteres"
                }
              })}
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nome.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Digite um email válido"
                }
              })}
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Digite seu telefone"
              {...register("telefone", {
                required: "O telefone é obrigatório"
              })}
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.telefone.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-800 text-white py-3 rounded-lg hover:bg-cyan-700 transition font-medium cursor-pointer"
          >
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
}