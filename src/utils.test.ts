import { createRatingList, getLinksByTitle, humanizingDate } from './utils';

describe('Function: Utilities', () => {
  it('should return "true" if answer is correct and argument is type of FooterTitleType', () => {
    const arg = 'Ресурсы';
    const correctAnswer = {
      Blog: 'Блог',
      Community: 'Сообщество',
      OperatorCourses: 'Курсы операторов',
    };
    const result = getLinksByTitle(arg);
    expect(result).toEqual(correctAnswer);
  });

  it('should return date in format of DD MMMM', () => {
    const arg = new Date('19 October 2011').toISOString();
    const formatedDate = '19 октября';
    const result = humanizingDate(arg);
    expect(result).toBe(formatedDate);
  });

  it('should return " " when argument its string, should not return "Invalid date"', () => {
    const arg = 'ddd';
    const formatedDate = '';
    const result = humanizingDate(arg);
    expect(result).toBe(formatedDate);
  });

  it('should return correct array if argument is one of cases', () => {
    const arg = 4;
    const correctArray = [true, true, true, true, false];
    const result = createRatingList(arg);
    expect(result).toEqual(correctArray);
  });

});
