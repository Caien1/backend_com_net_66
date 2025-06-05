import {z} from "zod/v4"
export const  UserValidation = z.object({
    username: z.string().min(5).nonempty(),
    email:z.email().nonempty(),
    password: z.string().min(8).nonempty(),

})