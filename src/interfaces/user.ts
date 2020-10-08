import { Bias } from "../enums"

export interface User {
  bias: Bias
  breakBiasTarget: number
  firstName: string
  lastName: string
  password: string
  email: string
  userId: number
}
