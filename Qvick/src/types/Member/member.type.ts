import { Response } from "src/types/util/response.type";

export interface MemberType extends Response {
    data: {
        name: string,
        stdId: number,
        room: string,
    }
}