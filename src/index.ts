export class DateFormatOperation{
  
  private date: Date
  
  constructor(date: Date){
    this.date = date;
  }

  getDate(): Date {
    return this.date;
  }

  /*
        Get formatted Dates
        - getFormattedDay()
        - getFormattedHours()
    */


  getFormattedDay(): string {
    return ("0"+this.date.getDate()).slice(-2);
  }

  getFormattedHours(): string {
    return ("0"+(this.date.getHours() + 1)).slice(-2);
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
