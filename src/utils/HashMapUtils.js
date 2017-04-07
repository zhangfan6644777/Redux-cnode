/** 
 * *********  操作实例  ************** 
 *   var map = new HashMap(); 
 *   map.put("key1","Value1"); 
 *   map.put("key2","Value2"); 
 *   map.put("key3","Value3"); 
 *   map.put("key4","Value4"); 
 *   map.put("key5","Value5"); 
 *   alert("size："+map.size()+" key1："+map.get("key1")); 
 *   map.remove("key1"); 
 *   map.put("key3","newValue"); 
 *   var values = map.values(); 
 *   for(var i in values){ 
 *       document.write(i+"："+values[i]+"   "); 
 *   } 
 *   document.write("<br>"); 
 *   var keySet = map.keySet(); 
 *   for(var i in keySet){ 
 *       document.write(i+"："+keySet[i]+"  "); 
 *   } 
 *   alert(map.isEmpty()); 
 */
var length = 0;
var obj = new Object();
var HashMap = {


	// //定义长度  
	// length: 0,
	// //创建一个对象  
	// obj: new Object(),
	data: obj,
	ceshi: function() {
		alert('可以引用')
	},
	/** 
	 * 判断Map是否为空 
	 */
	isEmpty: function() {
		return length == 0;
	},

	/** 
	 * 判断对象中是否包含给定Key 
	 */
	containsKey: function(key) {
		return (key in obj);
	},

	/** 
	 * 判断对象中是否包含给定的Value 
	 */
	containsValue: function(value) {
		for (var key in obj) {
			if (obj[key] == value) {
				return true;
			}
		}
		return false;
	},

	/** 
	 *向map中添加数据 
	 */
	put: function(key, value) {
		if (!this.containsKey(key)) {
			length++;
		}
		obj[key] = value;
	},

	/** 
	 * 根据给定的Key获得Value 
	 */
	get: function(key) {
		return this.containsKey(key) ? obj[key] : null;
	},

	/** 
	 * 根据给定的Key删除一个值 
	 */
	remove: function(key) {
		if (this.containsKey(key) && (delete obj[key])) {
			length--;
		}
	},

	/** 
	 * 获得Map中的所有Value 
	 */
	values: function() {
		var _values = new Array();
		for (var key in obj) {
			_values.push(obj[key]);
		}
		return _values;
	},

	/** 
	 * 获得Map中的所有Key 
	 */
	keySet: function() {
		var _keys = new Array();
		for (var key in obj) {
			_keys.push(key);
		}
		return _keys;
	},

	/** 
	 * 获得Map的长度 
	 */
	size: function() {
		return length;
	},

	/** 
	 * 清空Map 
	 */
	clear: function() {
		length = 0;
		obj = new Object();
	}
}

module.exports = HashMap;