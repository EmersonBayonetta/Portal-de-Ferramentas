import { useEffect, useState } from "react";

type Category = "Trabalho" | "Pessoal" | "Urgente";

type Task = {
  title: string;
  category: Category;
};

export function TaskMaster() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("TaskMaster");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Trabalho");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("TaskMaster", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (title.trim().length < 5) {
      setError("O título deve ter no mínimo 5 caracteres.");
      return;
    }

    const newTask: Task = {
      title: title.trim(),
      category,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("Trabalho");
    setError("");
  }

  function removeTask(index: number) {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">TaskMaster</h2>

      <div className="flex gap-2 mb-2">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Digite o título (mínimo 5 caracteres)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Urgente">Urgente</option>
        </select>

        <button
          onClick={addTask}
          className="bg-cyan-800 text-white px-4 rounded hover:bg-cyan-700"
        >
          Adicionar
        </button>
    
      </div>

      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between bg-zinc-100 p-3 rounded"
          >
            <div>
              <p className="font-semibold">{task.title}</p>
              <p className="text-sm text-zinc-600">{task.category}</p>
            </div>

            <button
              onClick={() => removeTask(index)}
              className="text-red-600 cursor-pointer"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}