//merge each object within arrays by index

const array3 = excArr.map((obj, index) => ({
    ...obj,
    ...incArr[index]
}));