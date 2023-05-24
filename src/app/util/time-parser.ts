import {DateTime} from "luxon";

export class TimeParser {

  public static getTimeRange(isoStartTime: string, isoEndTime: string): string {
    return `${DateTime.fromISO(isoStartTime).toLocaleString(DateTime.TIME_SIMPLE)} - ${DateTime.fromISO(isoEndTime).toLocaleString(DateTime.TIME_SIMPLE)}`
  }
  public static getTime(isoTime: string): string {
    return `${DateTime.fromISO(isoTime).toLocaleString({
      weekday: 'long',
    })} ${DateTime.fromISO(isoTime).toLocaleString()}`;
  }

  public static hasEventPassed(isoTime: string): boolean {
    const currentTime = DateTime.now();
    const givenTime = DateTime.fromISO(isoTime);
    return givenTime < currentTime;
  }

}
