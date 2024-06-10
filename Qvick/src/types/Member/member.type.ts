import { Response } from "src/types/util/response.type";

export interface Member {
    "id": number,
    "userId": number,
    "stdId": string,
    "name": string,
    "email": string,
    "room": string,
    "checkedDate": Date
}