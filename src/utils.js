export const getJobLength = (strStart, strEnd) =>{
    let strInt = `${strStart}`.replace(':00', '')
    strInt = parseInt(strInt)
    let endInt = `${strEnd}`.replace(':00', '')
    endInt = parseInt(endInt)

    return endInt-strInt;
}