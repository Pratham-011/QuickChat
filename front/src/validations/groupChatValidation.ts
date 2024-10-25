import {z} from "zod"

export const createChatSchema = z
.object({
    title:z.string().min(4 ,{message:"Chat title must be 4 character long"}).max(191 ,{message:"Chat title can be only of max 191 character long"}),
    passcode:z.string().min(4 ,{message:"Chat passcode must be 4 character long"}).max(25 ,{message:"Chat passcode can be only of max 25 character long"})
}).required()

export type createChatSchemaType = z.infer<typeof createChatSchema>;