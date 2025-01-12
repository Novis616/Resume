import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// Директории для сборки страниц и ассетов
			pages: 'build',
			assets: 'build',
			// Устанавливаем fallback для динамических маршрутов
			fallback: 'index.html', // Используем fallback для динамических маршрутов
			precompress: false,
			// Отключаем строгую проверку на динамичные маршруты
			strict: false // Отключение строгой проверки для динамических маршрутов
		})
	}
};
