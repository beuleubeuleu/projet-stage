import axios                           from "axios";
import { UserType }                    from "../types/userType";
import { getObjectFromSessionStorage } from "../utils";

class AuthService {
  static async register(name: string, email: string, password: string, phone: string, street: string, apartment: string, zip: string, city: string, country: string): Promise<any> {
    return axios.post("/api/v1/users/register", {
      name,
      email,
      password,
      phone,
      street,
      apartment,
      zip,
      city,
      country
    });
  }

  static async login(email:string, password:string): Promise<any> {
    return axios.post("/api/v1/users/login", {email, password})
                .then(res => {
                  if (res.data.token) {
                    sessionStorage.setItem('user', JSON.stringify(res.data))
                  }
                  return res.data
                });
  }

  static logout() {
    localStorage.removeItem('user')
  }

  static getLoggedInUser() {
    const user: {token: string, user:UserType} = getObjectFromSessionStorage("user");
    return user? user: null
  }

}

export default AuthService