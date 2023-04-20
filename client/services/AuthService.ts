import axios from "axios";

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
}

export default AuthService