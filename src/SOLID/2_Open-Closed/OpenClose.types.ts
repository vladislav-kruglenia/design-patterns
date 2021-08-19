/**
 * Интерфейс Shape имплементируется как в старый неизменяемый код, так и в новый функционал
 */
export interface Shape {
    area(): number,
}

export interface SquareType extends Shape {
    size: number;
}