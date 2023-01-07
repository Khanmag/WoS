
export const updateObjPropInArray = (array, objProp, itemId, newObjProp ) => {
    return array.map(item => {
        if (item[objProp] === itemId) {
            return {...item, ...newObjProp}
        }
        return item
    })
}