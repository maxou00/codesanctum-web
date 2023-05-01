import { z } from "zod";

export const SubscribeToNewsLetterSchema = z.object({
    name: z.string().default(""),
    email: z.string().email(),
});