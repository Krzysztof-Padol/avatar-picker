export const initialState = [{
  src: 'app/components/assets/avatar1.png',
  label: 'Avatar 1',
  id: 1
}, {
  src: 'app/components/assets/avatar2.png',
  label: 'Avatar 2',
  id: 2
}, {
  src: 'app/components/assets/avatar3.png',
  label: 'Avatar 3',
  id: 3
}];

export default function avatars(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
