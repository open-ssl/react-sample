// при каждом вызове компонента React создает новый виртуальный DOM
// и сравнивает его с предыдущим чтобы не обновлять весь реальный DOM.

// Функция memo возвращает оптимизированный компонент, который будет вызываться только в том случае,
// если хотя бы один проп этого компонента изменился.
