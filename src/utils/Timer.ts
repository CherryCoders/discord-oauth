export class Timer {
  public static validateTime(ms: number): boolean {
    const limitDate = new Date(ms * 1000 + new Date().getTime());
    if (new Date().getTime() >= limitDate.getTime()) return false;
    return true;
  }
}
