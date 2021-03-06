import RetryableException from '../flow/retryableException'
import Debug from 'debug';
import { EventEmitter } from 'events';

const debug = new Debug('flowjs:activity');

export default class Activity extends EventEmitter {

    constructor(name, executeFn) {
        super();
        this._name = name;
        this._executeFn = executeFn;
    }

    getName() {
        return this._name;
    }

    async execute(context) {
        if(this._executeFn) {
            await this._executeFn(context);
        } else {
            debug("No implementation for Activity!");
            throw new Error("Activity does not have an executable function");
        }
    }
}