import { z } from "zod";

export const ContactUsSchema = z.object({
    name: z.string().default(""),
    email: z.string().email(),
    message: z.string(),
});