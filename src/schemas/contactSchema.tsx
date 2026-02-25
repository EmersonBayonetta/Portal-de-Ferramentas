import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido"), // Validação de e-mail [cite: 27]
  phone: z.string().regex(/^\d+$/, "Apenas números são permitidos") // Validação de telefone [cite: 27]
});