# Инструкция к сайту

## О проекте
Многостраничный сайт с разнообразными блоками. Проект выступил хорошим тренажером по применению различных подходов в верстке, благодаря различающимся особенностям элемнтов сайта.

## JavaScript
В данном проекте была использована популярная библиотека jQuery. Хотел познакомиться с особенностями данного инстумента и применить его в работе.

_Порядок выполнения и функции кода в проекте_:

Обворачиваем всю страницу кода в событие готовности документа, чтобы код не выполнялся до полной загрузки документов, во избежании незапланированных проблем.
```
$(document).ready(function(){
});
```


### _Шапка_

Загружается страница.

В переменной scrollOffset храниться текущий скролл в пикселях:
```
let scrollOffset = $(window).scrollTop();
```

Затем вызываем функцию checkScroll, чтобы шапка сохранялась на том же месте, если пользователь обновит страницу:
```
checkScroll(scrollOffset);
```
Для отслеживания состояния скроллинга в jQuery используется событие scroll.
```
$(window).on('scroll', function () {
	scrollOffset = $(this).scrollTop();

	checkScroll(scrollOffset);
});
```
После вызывается функция checkScroll, в которой определяется будет ли показываться шапка (#fixed).

### _Скролл к блокам при клике на ссылки_

Отменяем стандарное поведение ссылки:
```
event.preventDefault();
```

Создаем переменную, в которой будет сохраняться значение 'data-scroll':
```
let blockId = $(this).data('scroll');
```
Далее создаем селектор blockId, к которому потом наша странице будет переходить при клике:

```
let blockOffset = $(blockId).offset().top;
```
Задаем анимацию:
```
$('html, body').animate({
			scrollTop: blockOffset
		}, 900);
```
### _Nav раскрытие_

Суть функции - при клике должен добавляться класс active.
```
$('#nav_toggle').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');

	})
```
### _Аккордеон - открытие_
Суть функции - при клике должен добавляться класс active к data-scroll.
```
$('[data-collapse]').on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		blockId = $this.data('collapse');

		$(blockId).slideToggle();
		$this.toggleClass('active');

	})
```
### _Слайдер_

Вводим код из библиотеки для активации слайдера:
```
$('[data-slider]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
	});
```
