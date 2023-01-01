export const encodeQueryParams = (data: Record<string, string | number>) => {
    const ret = [];
    for (let d in data)
        if (data[d])
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
};
