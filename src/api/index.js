import jsonp from 'jsonp';

/*通过 jsonp 请求获取天气信息 */
export function reqWeather(city) {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p4 9MVra6urFRGOT9s8UBWr2`;
    return new Promise((resolve, reject) => {
        jsonp(url, {
            param: 'callback'
        }, (error, response) => {
            if (!error && response.status === 'success') {
                const {dayPictureUrl, weather} = response.results[0].weather_data[0];
                resolve({dayPictureUrl, weather});
            } else {
                alert('获取天气信息失败');
            }
        })
    })
}