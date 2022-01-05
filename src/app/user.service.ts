import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private getAllUsersUrl = "https://custom-states-api.herokuapp.com/users";
  private getOneUserUrl = "https://custom-states-api.herokuapp.com/users/";
  private deleteUserUrl = "https://custom-states-api.herokuapp.com/users/";
  private addUserUrl = "https://custom-states-api.herokuapp.com/users/add";
  private updateUserUrl =
    "https://custom-states-api.herokuapp.com/users/update";

  private registerUserUrl =
    "https://custom-states-api.herokuapp.com/users/register";
  private loginUserUrl = "https://custom-states-api.herokuapp.com/users/login";

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id);
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id);
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user: User) {
    return this.http.put<any>(this.updateUserUrl, user);
  }

  //Register & Login

  registerAdmin(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

  loginAdmin(user: User) {
    return this.http.post<any>(this.loginUserUrl, user);
  }

  isLoggedIn() {
    let token = localStorage.getItem("myToken");

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
