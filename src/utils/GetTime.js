const getTime = {
	getTime: function(nowtime, oldtime) {
		let date3 = nowtime.getTime() - new Date(oldtime).getTime();
		let days = Math.floor(date3 / (24 * 3600 * 1000))

		//计算出小时数  
		let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数  
		let hours = Math.floor(leave1 / (3600 * 1000))
			//计算相差分钟数  
		let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数  
		let minutes = Math.floor(leave2 / (60 * 1000))
			//计算相差秒数  
		let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数  
		let seconds = Math.round(leave3 / 1000)
			//alert(" 相差 " + days + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
		if (days != 0) {
			if (days > 365) {
				return Math.floor(days / 365) + '年前'
			} else if (days > 30) {
				return Math.floor(days / 30) + '月前'
			} else if (days < 0) {
				return '刚刚'
			} else {

				return days + '天前'
			}
		} else if (hours != 0) {
			return hours + '小时前'
		} else if (minutes != 0) {
			return minutes + '分钟前'
		} else if (seconds != 0) {
			return seconds + '秒前'
		} else if (seconds == 0) {
			return '刚刚'
		}
	}
}
export default getTime;