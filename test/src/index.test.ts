import { DateFormatOperation } from "../../src/index";

describe("Test DateFormatOperation", () => {
  let d: Date;
  let dateFormatOperation: DateFormatOperation;
  beforeEach(() => {
    d = new Date(2000,1,1,0,0,0);
    dateFormatOperation = new DateFormatOperation(d);

  });

  test("Test getDate()", () => {
    const result = new Date(2000,1,1,0,0,0);
    expect(dateFormatOperation.getDate()).toStrictEqual(result);
  });

  describe("Format", () => {
    test("Test FormattedDay()", () => {
      expect(dateFormatOperation.getFormattedDay()).toBe("01");
    });
    
    test("Test FormattedHours()", () => {
      expect(dateFormatOperation.getFormattedHours()).toBe("01");
    });
  });



  describe("Year", () => {
    test("Test setBeforeYear()", () => {
      dateFormatOperation.setBeforeYear();
      const result = new Date(1999,1,1,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
    
    test("Test setNextYear()", () => {
      dateFormatOperation.setNextYear();
      const result = new Date(2001,1,1,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });


  describe("Month", () => {
    test("Test setBeforeMonth()", () => {
      dateFormatOperation.setBeforeMonth();
      const result = new Date(1999,12,1,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
    
    test("Test setNextMonth()", () => {
      dateFormatOperation.setNextMonth();
      const result = new Date(2000,2,1,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });



  describe("Day", () => {
    test("Test setBeforeDay()", () => {
      dateFormatOperation.setBeforeDay();
      const result = new Date(1999,12,31,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
    
    test("Test setNextDay()", () => {
      dateFormatOperation.setNextDay();
      const result = new Date(2000,1,2,0,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });



  describe("Hours", () => {
    test("Test setBeforeHours()", () => {
      dateFormatOperation.setBeforeHours();
      const result = new Date(1999,12,31,23,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
    
    test("Test setNextHours()", () => {
      dateFormatOperation.setNextHours();
      const result = new Date(2000,1,1,1,0,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });

  describe("Minutes", () => {
    test("Test setBeforeMinutes()", () => {
      dateFormatOperation.setBeforeMinutes();
      const result = new Date(1999,12,31,23,59,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
    
    test("Test setNextMinutes()", () => {
      dateFormatOperation.setNextMinutes();
      const result = new Date(2000,1,1,0,1,0);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });

  describe("Seconds", () => {
    test("Test setBeforeSeconds()", () => {
      dateFormatOperation.setBeforeSeconds();
      const result = new Date(1999,12,31,23,59,59);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });

    test("Test setNexteSeconds()", () => {
      dateFormatOperation.setNextSeconds();
      const result = new Date(2000,1,1,0,0,1);
      expect(dateFormatOperation.getDate()).toStrictEqual(result);
    });
  });

});