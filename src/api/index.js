import Mock from 'mockjs';

export function apiGet (url, params) {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .then( resText => {
            resText = Mock.mock(resText);
            return resText;
        });
}

export function apiPost (url, params) {
    return fetch(url,{
        method: 'POST',
        body:JSON.stringify(params)
    })
    .then(response => {
        return response.json()
    })
    .then( resText => {
        resText = Mock.mock(resText);
        return resText;
    });
}