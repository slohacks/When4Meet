export default function Meeting(state = {}, action) {
  switch (action.type) {
    case 'SET_NAME':
      console.log('setting name');
      return { name: action.name };
    default:
      return state;
  }
}
