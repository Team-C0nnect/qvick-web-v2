export interface checkResponse extends Response {
    data: ListType[];
}

export interface ListType {
    "stdId": number,
    "name": string,
    "room": string,
    "checkedDate": string
}