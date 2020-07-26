export default function Availability(state = {}, action) {
  switch (action.type) {
    case 'SET_NAME':
      console.log('setting name');
      return { ...state, name: action.name };
    case 'SET_AVAILABILITY':
      console.log('setting availability');
      return { ...state, availability: action.availability };
    default:
      return state;
  }
}
