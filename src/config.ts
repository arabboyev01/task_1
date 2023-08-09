import { ApiCaller } from './ApiCalls'
// @ts-ignore
export const api = new ApiCaller(process.env.NEXT_PUBLIC_SERVER_ADDRESS);