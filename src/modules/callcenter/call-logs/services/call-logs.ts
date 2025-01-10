import {api, HttpMethod} from "modules/core/utils/api";
import {Logs} from "modules/callcenter/call-logs/shared/Logs";

export const getLogs = (query?: string) => {
    return api<Logs[]>(HttpMethod.GET, `/call-logs${query?.length ? query + '&': '?'}sortByOrder=asc&sortByField=created_at`)
}

