import Env from "./env"
import {io,Socket} from "socket.io-client"
let socket:Socket
export const getSocket = ():Socket => {
    if(!socket) {
        socket = io(Env.BACKEND_URL,{autoConnect:false})
    }
    return socket
}