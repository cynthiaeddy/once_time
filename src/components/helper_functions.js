const month_name = (dt) => {
  const mlist = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return mlist[dt.getMonth()]
}
export { month_name }
