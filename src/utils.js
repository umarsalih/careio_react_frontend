export const getJobLength = (strStart, strEnd) =>{
    let strInt = `${strStart}`.replace(':00', '')
    strInt = parseInt(strInt)
    let endInt = `${strEnd}`.replace(':00', '')
    endInt = parseInt(endInt)

    return endInt-strInt;
}

const servicesArr = [
    'cleaning',
    'lawn maintenance',
    'moving',
    'repairs',
    'haircut',
    'manicure and pedicure',
    'massage and facials',
    'nanny service',
    'aged care'
]

export const resolveServiceToId = (serviceStr) => {
    return servicesArr.findIndex( s =>  s == serviceStr )
    
}

export const resolveIdToService = (serviceId) => {
    return servicesArr[serviceId]
}