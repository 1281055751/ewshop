import {request} from "@/network/request";

export function getCategory() {
    return request({
        url: '/api/goods'
        // method:'get',
        // params:{}
    })
}