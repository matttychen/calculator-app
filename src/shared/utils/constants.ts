import { KeyboardOption } from 'shared/utils/types';

// CALCULATOR KEYBOARD OPTIONS
export const KeyboardOptions: KeyboardOption[] = [
  {
    id: '1',
    type: 'clear',
    value: 'clear',
  },
  {
    id: '2',
    type: 'special-operator',
    value: '+/-',
  },
  {
    id: '3',
    type: 'special-operator',
    value: '%',
  },
  {
    id: '4',
    type: 'operator',
    value: '/',
  },
  {
    id: '5',
    type: 'number',
    value: '7',
  },
  {
    id: '6',
    type: 'number',
    value: '8',
  },
  {
    id: '7',
    type: 'number',
    value: '9',
  },
  {
    id: '8',
    type: 'operator',
    value: '*',
  },
  {
    id: '9',
    type: 'number',
    value: '4',
  },
  {
    id: '10',
    type: 'number',
    value: '5',
  },
  {
    id: '11',
    type: 'number',
    value: '6',
  },
  {
    id: '12',
    type: 'operator',
    value: '-',
  },
  {
    id: '13',
    type: 'number',
    value: '1',
  },
  {
    id: '14',
    type: 'number',
    value: '2',
  },
  {
    id: '15',
    type: 'number',
    value: '3',
  },
  {
    id: '16',
    type: 'operator',
    value: '+',
  },
  {
    id: '17',
    type: 'number',
    value: '0',
  },
  {
    id: '18',
    type: 'number',
    value: '.',
  },
  {
    id: '19',
    type: 'equals',
    value: '=',
  },
];

// CALCULATOR STATE
export const ACCEPTING_FIRST_INPUT = 'accepting-first-input';
export const ACCEPTING_SECOND_INPUT = 'accepting-second-input';
export const DISPLAY_OUTPUT = 'display-calculation';

// CALCULATOR KEYBOARD KEYS TYPE
export const NUMBER_TYPE = 'number';
export const OPERATOR_TYPE = 'operator';
export const SPECIAL_OPERATOR_TYPE = 'special-operator';
export const CLEAR_TYPE = 'clear';
export const EQUALS_TYPE = 'equals';
