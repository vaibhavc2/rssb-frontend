import { APPWRITE_PROJECT_ID, APPWRITE_URL } from "@/config";
import { appwriteError } from "@/lib/helpers";
import { getFuncName } from "@/lib/utils";
import { User, UserLogin } from "@/types";
import { Account, Client, ID } from "appwrite";

class AuthService {
  client = new Client();
  account: Account;
  readonly clsName: string;

  constructor() {
    this.client.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
    this.clsName = AuthService.name;
  }

  async createAccount({ email, password, name }: User) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method: for login
        return this.login({ email, password });
      } else return userAccount;
    } catch (error) {
      // return appwriteError(AuthService.name, this.createAccount.name, error);
      return appwriteError(this.clsName, getFuncName(), error);
    }
  }

  async login({ email, password }: UserLogin) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      return appwriteError(this.clsName, getFuncName(), error);
    }
  }

  async isLoggedIn() {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      return appwriteError(this.clsName, getFuncName(), error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return appwriteError(this.clsName, getFuncName(), error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      return appwriteError(this.clsName, getFuncName(), error);
    }
  }
}

const authService = new AuthService();

export default authService;
