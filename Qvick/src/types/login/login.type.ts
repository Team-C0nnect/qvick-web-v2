export interface Response {
    status: number;
    message: string;
  }
  
  export interface LoginResponse extends Response {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  }
  