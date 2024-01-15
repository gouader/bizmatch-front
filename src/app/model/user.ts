// user.model.ts
export interface User {
    id?: any;
    username?: string;
  
    email?: string;
    password?: string;
    confirmpassword?: string;
    token?: string;
    blocked?:boolean;
  }
  