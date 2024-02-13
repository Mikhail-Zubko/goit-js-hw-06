const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))

textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})



/*
Напиши скрипт, который при потере фокуса на инпуте 
(событие blur), проверяет его содержимое на правильное 
количество введённых символов.

Сколько символов должно быть в инпуте, указывается в его 
атрибуте data-length.
Если введено подходящее количество символов, то border
 инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и
 invalid, которые мы уже добавили в исходные файлы
  задания.

*/