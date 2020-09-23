import moment from "moment";
import {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set start date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter  action object", () => {
  const action = setTextFilter("aloha");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "aloha",
  });
});

test("should generate set sort by date filter  action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate set sort by date filter  action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
