export function healthIndicator(hero) {
    if (hero.health > 50) {
      return 'healthy';
    } else if (hero.health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }
