﻿import * as Immutable from 'immutable';

export const ValveStates = {
    CLOSED: 'closed',
    OPEN: 'open',
    UNKNOWN: 'unknown'
};

export var InitialState = Immutable.Map({
    current: ValveStates.UNKNOWN,
    timeUntilClose: null,
    pin: Immutable.List<string>([]),
    invalidPin: false
});