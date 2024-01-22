import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string(),
  user_name: z.string(),
  email: z.string(),
});
