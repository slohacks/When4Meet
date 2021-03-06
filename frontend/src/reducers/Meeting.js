export default function Meeting(state = {}, action) {
  switch (action.type) {
    case 'SET_MEETING':
      return { ...state, selectedMeeting: action.meeting };
    default:
      return state;
  }
}
