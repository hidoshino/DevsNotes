const initalState = {
    list: [
        { title: 'Tests', body: 'testando initalState reducer' }
    ]
}

export default (state = initalState, action) => {
    let newList = [...state.list];

    console.log(action);

    switch (action.type) {
        case 'ADD_NOTE':
            newList.push({
                title: action.payload.title,
                body: action.payload.body
            });
            console.log("Add" + { tit: action.payload.title})
            break;
        case 'EDIT_NOTE':
            if (newList[action.payload.key]) {
                newList[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body,
                }
                console.log("EDT" + { tit: action.payload.title})
            }
            break;
        case 'DEL_NOTE':
            newList = newList.filter((item, index)=> index != action.payload.key)
            break;
    }

    return { ...state, list: newList };
}