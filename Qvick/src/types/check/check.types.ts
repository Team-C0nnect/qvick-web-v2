export interface checkResponse extends Response {
    data: ListType[];
}

export interface ListType {
    "stdId": string,
    "name": string,
    "room": string,
    "checkedDate": string
}