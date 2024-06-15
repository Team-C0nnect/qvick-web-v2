import { Response } from "src/types/util/response.type";

export interface LoginResponse extends Response {
    data: {
      accessToken: string;
      refreshToken: string;
    };
}
  