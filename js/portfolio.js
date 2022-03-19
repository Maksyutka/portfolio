$(".my-popup").mouseup(function (e) {
	// событие клика по веб-документу
	var div = $(".my-popup__inner"); // тут указываем ID элемента
	if (
		!div.is(e.target) && // если клик был не по нашему блоку
		div.has(e.target).length === 0
	) {
		// и не по его дочерним элементам
		$(".my-popup").fadeOut(); // скрываем его
		$("body").removeClass("overflowed");
	}
});

$(".main__info button").click(function () {
	$(".my-popup").fadeToggle();
	$("body").toggleClass("overflowed");
});

$(".close").click(function () {
	$(".my-popup").fadeToggle();
	$("body").toggleClass("overflowed");
});
