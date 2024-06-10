export interface checkResponse extends Response {
    data: ListType[];
}

export interface ListType {
    "id": number,
    "userId": number,
    "stdId": string,
    "name": string,
    "email": string,
    "room": string,
    "checkedDate": string
}