export class DateFormatOperation{
  
  private date: Date
  private dayOfWeekArr: string[]
  
  constructor(
    date: Date, 
    dayOfWeekArr: string[] = ["(日)","(月)","(火)","(水)","(木)","(金)","(土)"]
  ){
    this.date = date;
    this.dayOfWeekArr = dayOfWeekArr;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  /*
        Get formatted Dates
        - getFormattedDay()
        - getFormattedHours()
  */

  getFormattedFullDate(): string {
    const year = this.date.getFullYear();
    const month = this.getFormattedMonth();
    const day = this.getFormattedDay();
    const hours = this.getFormattedHours();
    const minutes = this.getFormattedMinutes();
    const seconds = this.getFormattedSeconds();
    const dayOfWeek = this.getDayOfWeek();

    return `${year}/${month}/${day}${dayOfWeek} ${hours}:${minutes}:${seconds}`;
  }

  getFormattedMonth(): string {
    return ("0"+(this.date.getMonth()+1)).slice(-2);
  }

  getFormattedDay(): string {
    return ("0"+this.date.getDate()).slice(-2);
  }

  getFormattedHours(): string {
    return ("0"+(this.date.getHours())).slice(-2);
  }

  getFormattedMinutes(): string {
    return ("0"+(this.date.getMinutes())).slice(-2);
  }

  getFormattedSeconds(): string {
    return ("0"+(this.date.getSeconds())).slice(-2);
  }

  getDayOfWeek():string  {
    return this.dayOfWeekArr[this.date.getDay()];
  }


  /*
      Year operating functions 
        - setBeforeYear()
        - setNextYear()
  */

  setBeforeYear(): void {
    this.date.setFullYear(this.date.getFullYear() - 1);
  }

  setNextYear(): void {
    this.date.setFullYear(this.date.getFullYear() + 1);
  }

  /*
        Month operating functions 
        - setBeforeMonth()
        - setNextMonth()
    */

  setBeforeMonth(): void {
    this.date.setMonth(this.date.getMonth() - 1);
  }

  setNextMonth(): void {
    this.date.setMonth(this.date.getMonth() + 1);
  }


  /*
        Day operating functions 
        - setBeforeDay()
        - setNextDay()
    */

  setBeforeDay(): void {
    this.date.setDate(this.date.getDate() - 1);
  }

  setNextDay(): void {
    this.date.setDate(this.date.getDate() + 1);
  }


  /*
        Hours operating functions 
        - setBeforeHours()
        - setNextHours()
    */

  setBeforeHours(): void {
    this.date.setHours(this.date.getHours() - 1);
  }

  setNextHours(): void {
    this.date.setHours(this.date.getHours() + 1);
  }

  /*
        Minutes operating functions 
        - setBeforeHours()
        - setNextHours()
    */

  setBeforeMinutes(): void {
    this.date.setMinutes(this.date.getMinutes() - 1);
  }

  setNextMinutes(): void {
    this.date.setMinutes(this.date.getMinutes() + 1);
  }

  /*
        Minutes operating functions 
        - setBeforeHours()
        - setNextHours()
    */

  setBeforeSeconds(): void {
    this.date.setSeconds(this.date.getSeconds() - 1);
  }

  setNextSeconds(): void {
    this.date.setSeconds(this.date.getSeconds() + 1);
  }
}
