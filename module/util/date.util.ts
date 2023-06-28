export class DateUtil {

    /**
     * 日期格式化
     * @param date 日期
     */
    public static dateFormat(date: Date): string {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        return year + '-' + this.paddingZero(month) + '-' + this.paddingZero(day) + ' ' + this.paddingZero(hour) + ':' + this.paddingZero(minute) + ':' + this.paddingZero(second)
    }

    /**
     * 填充0
     * @param time 年月日时分秒
     * @private
     */
    private static paddingZero(time: number): string {
        return time < 0 ? '0' + time: '' + time
    }
}