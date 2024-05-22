export interface RefreshResponse extends Response {
    data: string;
    accessToken: string;
}