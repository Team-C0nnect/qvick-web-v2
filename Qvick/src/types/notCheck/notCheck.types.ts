import { Response } from "src/types/util/response.type";

export interface notCheckListItem {
    stdId: number;
    name: string;
    room: string;
    checked: boolean;
}

export interface notCheckListResponse extends Response {
    data: notCheckListItem[];
}
