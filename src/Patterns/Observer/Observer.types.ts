/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
export interface Subject {
    // Присоединяет наблюдателя к издателю.
    attach(observer: Observer): void;

    // Отсоединяет наблюдателя от издателя.
    detach(observer: Observer): void;

    // Уведомляет всех наблюдателей о событии.
    notify(): void;
}

/**
 * Интерфейс Наблюдателя объявляет метод уведомления, который издатели
 * используют для оповещения своих подписчиков.
 */
export interface Observer {
    // Получить обновление от субъекта.
    update(subject: Subject): void;
}
