import { Response } from "src/types/util/response.type";

export interface ListType extends Response {
    data: {
        name: "string",
        stdId: "number",
        room: "string",
        checkedDate: string,
        checked: boolean
    }
}