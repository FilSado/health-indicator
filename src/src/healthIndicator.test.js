import { healthIndicator } from './healthIndicator';

describe('healthIndicator', () => {
  it('should return "healthy" when health is greater than 50', () => {
    expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(healthIndicator({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  it('should return "wounded" when health is between 15 and 50 (inclusive)', () => {
    expect(healthIndicator({ name: 'Лучник', health: 50 })).toBe('wounded');
    expect(healthIndicator({ name: 'Разбойник', health: 15 })).toBe('wounded');
    expect(healthIndicator({ name: 'Паладин', health: 30 })).toBe('wounded');
  });

  it('should return "critical" when health is less than 15', () => {
    expect(healthIndicator({ name: 'Зомби', health: 14 })).toBe('critical');
    expect(healthIndicator({ name: 'Скелет', health: 1 })).toBe('critical');
    expect(healthIndicator({ name: 'Крыса', health: 0 })).toBe('critical');
  });
});
