import { createMachine } from "xstate";

export const myMachine = createMachine({
    id: "myMachine",
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EEgDQgAnjoC+x-Wix5CpbPSatOvAVwAqkmUhAKlKtRu0IALQAjAAcAMwkEgAsAOwAbOHRAKwATACc6alp4fpGCBKmZiAUEHAaFjgExBreyqrqngGBqeHBUXGJKRlZOXmIgaGxJKnxwekx6eGhocnxEsmm5hhV1mRUtAzMELWK9X5NiNGp-Qih7aPj2dcSqakxSyCVVsQktluQuz4N-ohpJMFwhJ0tFQilwqNZqdAekSAlxtE4glZq1UkVjEA */
    initial: "notHovered",
    states: {
        notHovered: {
            on: {
                MOUSEOVER: {
                    target: "hovered"
                }
            }
        },
        hovered: {
            on: {
                MOUSEOUT: {
                    target: "notHovered"
                }
            }
        },
    }
})