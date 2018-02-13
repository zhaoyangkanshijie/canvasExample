var taijiCanvas = (function () {
	var canvas = null,
		ctx = null,
		taijis = [],
		taijinumber = 1,
		taijiargs = [],
		anim;

	/**
	 * 
	 * @param {*} fn 
	 * @param {*} context 
	 * @deprecated
	 */
	function runOnce(fn, context) { //控制让函数只触发一次,会报错
		return function () {
			try {
				fn.apply(context || this, arguments);
			} catch (e) {
				console.error(e); //一般可以注释掉这行
			} finally {
				fn = null;
			}
		}
	}
	/**
	 *
	 * @param {*} fn
	 * @param {*} context
	 * @deprecated
	 */
	function once(fn, context) {
		var result;

		return function () {
			if (fn) {
				result = fn.apply(context || this, arguments);
				fn = null;
			}

			return result;
		};
	}

	var addTaiji = function () {
		for (var i = 0; i < taijinumber; i++) {
			var size = taijiargs[i][0];
			var x = taijiargs[i][1];
			var y = taijiargs[i][2];
			var angle = taijiargs[i][3];
			var taiji = new Taiji(size, x, y, angle);
			taijis.push(taiji);
		}
	}

	var eachAnimation = function () {
		for (var i = 0; i < taijis.length; i++) {
			taijis[i].draw(ctx);
			taijis[i].update();
		}
	}

	return {
		initial: function (id, args) {
			canvas = document.getElementById(id);
			ctx = canvas.getContext("2d");
			taijinumber = args.length;
			taijiargs = args;
			addTaiji();
			//cancelAnimationFrame(anim);
			//anim = requestAnimationFrame(eachAnimation);
			clearInterval(anim);
			anim = setInterval(eachAnimation, 50 / 3);
		}
	}
})();